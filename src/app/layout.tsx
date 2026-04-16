import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./legacy.css";

import Providers from "@/components/Providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="stylesheet" href="/front/css/cdns/googleapi.css" />
                <link rel="stylesheet" href="/css/app.css" />
                <link rel="stylesheet" href="/css/style_minify.css" />
                <link rel="stylesheet" href="/font-awesome/css/all.min.css" />
            </head>
            <body className="antialiased">
                <Providers>
                    <Header />
                    <main id="home-content">
                        {children}
                    </main>
                    <Footer />
                </Providers>

                {/* Legacy Scripts for Animations */}
                <Script src="/front/js/wow.min.js" strategy="afterInteractive" />
                <Script id="init-wow" strategy="afterInteractive">
                    {`
                        window.addEventListener('load', function() {
                            if (typeof WOW !== 'undefined') {
                                new WOW({
                                    animateClass: 'animated',
                                    offset: 100
                                }).init();
                            }
                        });
                    `}
                </Script>
            </body>
        </html>
    );
}
