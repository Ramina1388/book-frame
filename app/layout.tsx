import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Book Recommendations",
  description: "Get personalized book suggestions for any topic.",
  openGraph: {
    title: "Book Recommendations",
    description: "Get personalized book suggestions for any topic.",
    images: ["https://book-frame.vercel.app/api/og"],
  },
  other: {
    "fc:frame": "vNext",
    "fc:frame:image": "https://book-frame.vercel.app/api/og",
    "fc:frame:post_url": "https://book-frame.vercel.app/api/frame",
    "fc:frame:button:1": "Get Recommendations",

    "fc:miniapp": "vNext",
    "fc:miniapp:name": "Book Recs",
    "fc:miniapp:entrypoint": "https://book-frame.vercel.app",
    "fc:miniapp:manifest": "https://book-frame.vercel.app/miniapp.json"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
