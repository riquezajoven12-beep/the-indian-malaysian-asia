import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Indian Malaysian | மலேசிய இந்தியர்கள்',
  description: 'Your trusted source for news, education, and cultural preservation of the Indian Malaysian community.',
  keywords: 'Indian Malaysian, Tamil, Hindu, Malaysia, community, news, temples, education',
  openGraph: {
    title: 'The Indian Malaysian',
    description: 'Preserving Heritage. Building Futures.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Source+Sans+3:wght@400;500;600;700&family=Noto+Sans+Tamil:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
