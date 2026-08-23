import assert from 'node:assert/strict'
import { test } from 'node:test'

import { collectPaymentStates } from '../scripts/collect-payment-states.mjs'

test('held Lightning payment runs concurrently with marketplace claim states', { timeout: 1_000 }, async () => {
  let settleInvoice
  let paymentStarted = false
  const payInvoice = async () => {
    paymentStarted = true
    await new Promise(resolve => {
      settleInvoice = resolve
    })
  }
  async function* paymentStream() {
    yield { type: 'payment_required', request: { bolt11: 'ln-held' } }
    assert.equal(paymentStarted, true)
    yield { type: 'payment_progress', status: 'claiming held swap' }
    settleInvoice()
    yield { type: 'paid' }
  }

  const states = await collectPaymentStates(paymentStream(), payInvoice)
  assert.deepEqual(states.map(state => state.type), [
    'payment_required',
    'payment_progress',
    'paid',
  ])
})

test('payment failure aborts work and closes the payment stream iterator', { timeout: 1_000 }, async () => {
  let returned = 0
  let observedAbort = false
  let rejectPayment
  const paymentFailure = new Promise((_, reject) => {
    rejectPayment = reject
  })
  const stream = {
    [Symbol.asyncIterator]() {
      let emitted = false
      return {
        async next() {
          if (!emitted) {
            emitted = true
            return { done: false, value: { type: 'payment_required', request: { bolt11: 'ln-fails' } } }
          }
          return new Promise(() => {})
        },
        async return() {
          returned += 1
          return { done: true }
        },
      }
    },
  }
  const payInvoice = async (_invoice, { signal }) => {
    signal.addEventListener('abort', () => {
      observedAbort = true
    }, { once: true })
    await paymentFailure
  }

  const collecting = collectPaymentStates(stream, payInvoice)
  rejectPayment(new Error('payment failed'))

  await assert.rejects(collecting, /payment failed/)
  assert.equal(returned, 1)
  assert.equal(observedAbort, true)
})
