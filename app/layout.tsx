import "../assets/styles/globals.css";

import type { Metadata } from "next";
import localFont from "next/font/local";

const helveticaNeueLtPro = localFont({
  declarations: [{ prop: "descent-override", value: "0%" }],
  src: [
    {
      path: "../assets/fonts/helvetica-neue-lt-pro/woff2/HelveticaNeueLTProTh.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/helvetica-neue-lt-pro/woff2/HelveticaNeueLTProUltLt.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/fonts/helvetica-neue-lt-pro/woff2/HelveticaNeueLTProLt.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/helvetica-neue-lt-pro/woff2/HelveticaNeueLTProMd.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/helvetica-neue-lt-pro/woff2/HelveticaNeueLTProBd.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-helvetica-neue-lt-pro",
});

export const metadata: Metadata = {
  title: "The Lounge Conjecture",
  description: "The official site of The Lounge Conjecture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${helveticaNeueLtPro.variable}`}>{children}</body>
    </html>
  );
}
