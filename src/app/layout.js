import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollAnimation from "./components/ScrollAnimation";
import StarfieldBackground from "./components/backgrounds/StarfieldBackground";
import ConstellationBackground from "./components/backgrounds/ConstellationBackground";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Allison Still Portfolio",
  description: "Personal & Technical Portfolio of Allison Still, a Computer Science student at The University of Texas at Austin",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <StarfieldBackground />
        <ScrollAnimation />
        <ConstellationBackground/>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
