import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "My Next.js App",
    template: "%s | My Next.js App",
  },
  description:
    "เว็บแอปพลิเคชันที(สร้างด้วย Next.js 16 พร้อมฟีเจอร์ Cache Component",
  keywords: ["Next.js", "React", "Web Development", "TypeScript"],
  authors: [{ name: "CFH" }],
  creator: "CFH",
  publisher: "Code%Fun House",
  metadataBase: new URL("https://code-n-fun-house.top"),
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "https://code-n-fun-house.top",
    siteName: "My Next.js App",
    title: "My Next.js App",
    description: "เว็บแอปพลิเคชันที(สร้างด้วย Next.js 16",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "My Next.js App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Next.js App",
    description: "เว็บแอปพลิเคชันที(สร้างด้วย Next.js 16",
    images: ["/x-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body>
        <header
          className="sticky top-0 z-50 w-full border-b bg-white/95
backdrop-blur supports-backdrop-filter:bg-white/60"
        >
          <div className="container mx-auto flex h-16 items-center px-4">
            <Link href="/" className="flex items-center space-x-2 mr-8">
              <span
                className="text-2xl font-bold bg-linear-to-r from-blue-600
to-cyan-600 bg-clip-text text-transparent"
              >
                NextApp
              </span>
            </Link>
            <nav className="flex flex-1 items-center space-x-6 text-sm fontmedium">
              <Link
                href="/"
                className="text-slate-600 hover:text-slate-900 transitioncolors"
              >
                หน้าหลัก
              </Link>
              <Link
                href="/about"
                className="text-slate-600 hover:text-slate-900 transitioncolors"
              >
                เกี่ยวกับเรา
              </Link>
              <Link
                href="/products"
                className="text-slate-600 hover:text-slate-900 transitioncolors"
              >
                สินค้า
              </Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
