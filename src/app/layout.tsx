import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import ProjektantragNavbar from "@/components/projektAntragNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "brweb.app",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
    <body className={inter.className}>
    <div>



            {children}

    </div>
    <Footer/>
    </body>
    </html>
);
}
