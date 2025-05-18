import { Metadata } from 'next';

interface GenerateMetadataProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

export function generateMetadata({
  title,
  description,
  path = '',
  image = '/og-image.jpg', // Default OG image
}: GenerateMetadataProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com';
  const url = `${baseUrl}${path}`;

  return {
    title: `${title} | Your Company Name`,
    description,
    metadataBase: new URL(baseUrl),
    openGraph: {
      title,
      description,
      url,
      siteName: 'Your Company Name',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
} 