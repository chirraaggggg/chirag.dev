import { GeistMono } from "geist/font/mono";
import { Outfit } from "next/font/google";

// Using Outfit as the main font with San Francisco as primary fallback
export const fontSans = Outfit({
  weight: ["400", "500", "600", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans",
  fallback: ["-apple-system", "BlinkMacSystemFont", "San Francisco", "Segoe UI", "Roboto", "sans-serif"],
});

export const fontMono = GeistMono;
