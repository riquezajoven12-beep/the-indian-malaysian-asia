import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'The Indian Malaysian | மலேசிய இந்தியர்கள்',
    template: '%s | The Indian Malaysian',
  },
  description: 'Your trusted source for news, education, and cultural preservation of the Indian Malaysian community.',
  keywords: ['Indian Malaysian', 'Tamil', 'Malaysia', 'Hindu', 'Sikh', 'Tamil schools', 'Indian community'],
  authors: [{ name: 'The Indian Malaysian' }],
  openGraph: {
    type: 'website',
    locale: 'en_MY',
    url: 'https://theindianmalaysian.my',
    siteName: 'The Indian Malaysian',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Indian Malaysian',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@indianmalaysian',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
