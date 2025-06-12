import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";
//import { CookieConsent } from "@/components/CookieConsent";
import HamburgerMenu from "@/components/HamburgerMenu/HamburgerMenu";
import WarningPopupCookie from "@/components/warning/WarningPopupCookie";

const kosugi = Noto_Sans_JP({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "翠翔祭HP",
  description: "翠翔祭2025の公式サイトです。有益な情報を公開しています!",
  verification: {
    google: "MxRHVCLgl_CHwlcqvPGVOgGooFSBdU0UdGq2UGc_JIc"
  },
  openGraph: {
    title: "翠翔祭HP",
    description: "翠翔祭2025の公式サイトです。有益な情報を公開しています!",
    url: "https://suishousai2025.vercel.app/",
    siteName: "翠翔祭HP",
    images: [
      {
        url: "https://suishousai2025.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "翠翔祭HPのプレビュー画像",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "翠翔祭HP",
    description: "横浜翠嵐高等学校",
    images: ["https://suishousai2025.vercel.app/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body >
        <WarningPopupCookie />
        <HamburgerMenu />
        <main className={kosugi.className}>
          {children}
        </main>
        {/* <CookieConsent /> */}
      </body>
    </html>
  );
}