import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MainNav } from "@/components/navbar/MainNav";
import { Footer } from "@/components/footer/Footer";
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kwasi Owusu-Boateng",
  description: "Designed And Developed by Nana-Asiamah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col md:flex-row text-black bg-white py-5 pl-10 mb:pl-52 w-full ">
          <MainNav />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
