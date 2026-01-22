import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "My Next.JS App",
  description: "Yo Yo Yo !!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav style={{
          padding: '1rem',
          borderBottom: '1px solid #eaeaea',
          marginBottom: '2rem',
        }}>
          <Link href="/" style={{ marginRight: '1rem' }}>
            หน้าหลัก
          </Link>

          <Link href="/about" style={{ marginRight: '1rem' }}>
            เกี่ยวกับเรา
          </Link>

          <Link href="/products" style={{ marginRight: '1rem' }}>
            สินค้า
          </Link>
        </nav>
        
        {children}
      </body>
    </html>
  );
}
