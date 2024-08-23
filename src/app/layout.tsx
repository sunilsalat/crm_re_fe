import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import ReduxProivider from '@/_components/redux/ReduxProivider';
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CRM',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProivider>
            <NextTopLoader
              color="#3B82F6"
              initialPosition={0.08}
              crawlSpeed={200}
              height={4}
              crawl={false}
              showSpinner={false}
              easing="ease"
              speed={200}
              shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            />
          {children}
          <Toaster position="top-center" reverseOrder={false} />
        </ReduxProivider>
      </body>
    </html>
  );
}
