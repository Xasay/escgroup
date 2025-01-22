import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Header from "../_components/layout/header";
import { Suspense } from "react";
import Loading from "../_components/shared/loading";
import { Locale } from "./lang";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ESC Group",
  description: "Effective, Simple Code group",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <Suspense fallback={<Loading />}>
          <main>{children}</main>
        </Suspense>
      </body>
    </html>
  );
}
