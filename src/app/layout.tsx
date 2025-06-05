import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'PodAcademy - Transform Textbooks into Engaging Audio',
  description: 'AI-powered study system that converts any syllabus into podcast-style conversations.',
  icons: {
    icon: 'https://be13a6bfb72b1843b287a4c59c4f4174.cdn.bubble.io/f1748103745897x593348561538088200/Untitled_logo_1_free-file%20%281%29.jpg',
    apple: 'https://be13a6bfb72b1843b287a4c59c4f4174.cdn.bubble.io/f1748103745897x593348561538088200/Untitled_logo_1_free-file%20%281%29.jpg',
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
