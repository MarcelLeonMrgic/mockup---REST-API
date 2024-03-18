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
    <div className={"max-w-3xl mx-auto p-8"}>


        <div className={"mt-8"}>
            {children}
        </div>
    </div>
        <Footer/>
    </body>
    </html>
);
}
