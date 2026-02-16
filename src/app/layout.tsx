import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-main" });

export const metadata: Metadata = {
  title: "Prime Marketplace | Luxury Rentals",
  description: "Experience premium stays around the globe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        <div className="app-layout" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <main style={{ flex: 1, paddingBottom: '70px' }}>
            {children}
          </main>

          {/* Desktop Footer */}
          <footer style={{
            padding: '40px 0',
            borderTop: '1px solid var(--border)',
            backgroundColor: 'var(--slate-50)',
            marginTop: '2rem'
          }} className="desktop-only">
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <p style={{ color: 'var(--gray)', fontSize: '14px' }}>© 2026 Prime Marketplace. All rights reserved.</p>
              <div style={{ display: 'flex', gap: '1.5rem', fontSize: '14px', fontWeight: 500, color: 'var(--slate-700)' }}>
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">Sitemap</a>
              </div>
            </div>
          </footer>

          <BottomNav />
        </div>
      </body>
    </html>
  );
}
