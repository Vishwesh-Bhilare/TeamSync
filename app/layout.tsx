import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "ANTI-SOLO",
    description: "Merit-based hackathon team formation for solo developers",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body
        className={`${inter.variable} font-sans bg-background text-textPrimary antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
