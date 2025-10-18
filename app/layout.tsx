import "../assets/styles/globals.css";

import type { Metadata } from "next";
import localFont from "next/font/local";

import Footer from "@/ui/footer/Footer";
import Header from "@/ui/header/Header";

import styles from "./layout.module.scss";

const helveticaNeueLtPro = localFont({
  declarations: [{ prop: "descent-override", value: "12%" }],
  src: [
    {
      path: "../assets/fonts/helvetica-neue-lt-pro/woff2/HelveticaNeueLTProUltLt.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/helvetica-neue-lt-pro/woff2/HelveticaNeueLTProTh.woff2",
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

const itcHandelGothicArabic = localFont({
  declarations: [
    { prop: "ascent-override", value: "80%" },
    { prop: "descent-override", value: "16%" },
  ],
  src: [
    {
      path: "../assets/fonts/itc-handel-gothic-arabic/itc-handel-gothic-arabic-heavy.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-itc-handel-gothic-arabic",
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
      <body
        className={`${styles.body} ${helveticaNeueLtPro.variable} ${itcHandelGothicArabic.variable}`}
      >
        <Header className={styles.header} />
        <main className={styles.main}>{children}</main>
        <Footer className={styles.footer} />
      </body>
    </html>
  );
}
