/**
 * Consume a marketplace payment stream while Lightning payments are in
 * flight. Reverse swaps use held invoices, so awaiting invoice settlement
 * before requesting the next stream item would deadlock the claim path.
 */
export async function collectPaymentStates(stream, payInvoice) {
  const iterator = stream[Symbol.asyncIterator]()
  const states = []
  const payments = []
  const invoices = new Set()
  const abortController = new AbortController()
  let rejectPayment
  const paymentFailure = new Promise((_, reject) => {
    rejectPayment = reject
  })
  // A rejection is also observed by the per-iteration Promise.race below; this
  // handler prevents an unhandled-rejection window between stream emissions.
  paymentFailure.catch(() => {})

  try {
    for (;;) {
      const next = payments.length > 0
        ? await Promise.race([iterator.next(), paymentFailure])
        : await iterator.next()
      if (next.done) break
      const state = next.value
      states.push(state)
      if (
        state.type === 'payment_required'
        && state.request?.bolt11
        && !invoices.has(state.request.bolt11)
      ) {
        invoices.add(state.request.bolt11)
        const payment = Promise.resolve(
          payInvoice(state.request.bolt11, { signal: abortController.signal }),
        )
        payment.catch(rejectPayment)
        payments.push(payment)
      }
    }
    await Promise.all(payments)
    return states
  } catch (error) {
    abortController.abort()
    const iteratorReturn = typeof iterator.return === 'function'
      ? Promise.resolve().then(() => iterator.return())
      : Promise.resolve()
    await Promise.allSettled([...payments, iteratorReturn])
    throw error
  }
}
