import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Optymalista",
  description: "Poznaj mnie",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <div className="flex flex-col w-full">
          <Header />
          <main className="flex-1 h-full">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
