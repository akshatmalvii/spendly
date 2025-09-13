import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "../compnonents/Navbar";
import Footer from "@/compnonents/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ClerkThemeProvider from "@/compnonents/ClerkThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spendly",
  description: "A personal finance tracking app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
                  <ThemeProvider>
          <ClerkThemeProvider>
          <Navbar />
          {children}
          <Footer />
                    </ClerkThemeProvider>
        </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
