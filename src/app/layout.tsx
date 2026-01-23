import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "เว็บแอปพลิเคชันที่สร้างด้วย Next.js",
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
