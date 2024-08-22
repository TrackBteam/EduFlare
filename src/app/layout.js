// layout.js
import { ClerkProvider, RedirectToSignIn } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider
          // Add your Clerk configuration here
          // For example:
          // frontendApi={process.env.NEXT_PUBLIC_CLERK_FRONTEND_API}
        >
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
