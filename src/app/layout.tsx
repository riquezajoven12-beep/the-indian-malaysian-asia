import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Indian Malaysian | மலேசிய இந்தியர்கள்',
  description: 'Your trusted source for news, education, and cultural preservation of the Indian Malaysian community.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
