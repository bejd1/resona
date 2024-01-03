import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resona - Greates audio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
