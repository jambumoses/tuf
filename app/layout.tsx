import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/common/footer";
import Header from "@/common/header";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Faraja’s Way",
  description:
    "Faraja’s Way envisions a world where children with Spina Bifida thrive in inclusive communities, empowered by education, quality continence care and essential life skills. We strive to break barriers, promote independence and foster a society that values and supports every child’s potential, ensuring they lead fulfilling lives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
