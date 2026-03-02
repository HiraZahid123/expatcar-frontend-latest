import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "ExpatCarBuyers | Sell Your Car in 30 Minutes",
    description: "The fastest way to sell your car in Dubai & UAE. Instant valuation, cash in hand.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased bg-[#f8fafc] text-gray-900`}>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
