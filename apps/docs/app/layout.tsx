import { Provider } from '@/components/provider';
import type { Metadata } from 'next';
import './global.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://sudonym-btc.github.io/nmdk/'),
  title: {
    default: 'NMDK API Reference',
    template: '%s | NMDK',
  },
  description: 'Generated API reference for NMDK marketplace packages.',
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
