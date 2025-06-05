import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const siteUrl = 'https://podacademy101.online'; // Replace with your actual production URL if different
const heroImageUrl = 'https://be13a6bfb72b1843b287a4c59c4f4174.cdn.bubble.io/f1749118093196x719140327044314200/ChatGPT%20Image%20Jun%205%2C%202025%2C%2001_03_14%20PM.png';
const logoUrl = 'https://be13a6bfb72b1843b287a4c59c4f4174.cdn.bubble.io/f1748103745897x593348561538088200/Untitled_logo_1_free-file%20%281%29.jpg';

const newTitle = "PodAcademy: AI Textbook-to-Podcast for Smarter Audio Learning";
const newDescription = "Transform textbooks into engaging podcasts with PodAcademy's AI. Boost your study with audio lessons, chapter summaries, and mobile-friendly learning. Try it free!";
const socialDescription = "PodAcademy uses AI to turn your textbooks into engaging podcasts. Study efficiently with audio lessons, summaries & more. Perfect for students on the go.";

export const metadata: Metadata = {
  title: newTitle,
  description: newDescription,
  icons: {
    icon: logoUrl,
    apple: logoUrl,
  },
  openGraph: {
    title: newTitle,
    description: socialDescription,
    url: siteUrl,
    siteName: 'PodAcademy',
    images: [
      {
        url: heroImageUrl,
        width: 1200, // Actual width of the hero image
        height: 800, // Actual height of the hero image
        alt: 'Students using PodAcademy for AI-powered audio learning',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: newTitle,
    description: socialDescription,
    images: [heroImageUrl],
    // If you have a Twitter handle, you can add it here:
    // creator: '@YourTwitterHandle', 
  },
  // You can also add keywords if you wish, though their importance has diminished:
  // keywords: ['AI learning', 'podcast study', 'textbook conversion', 'audio lessons', 'student tools'],
  alternates: {
    canonical: siteUrl,
  },
  robots: { // Basic robots directives
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning={true}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
