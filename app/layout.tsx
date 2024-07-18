import "@/styles/globals.css";
import {fontSans} from "@/config/fonts";
import {Providers} from "./providers";
import {Navbar} from "@/components/navbar";
import {cn} from "@nextui-org/react";
import {Footer} from "@/components/footer";
import {Metadata} from "next";
import {siteConfig} from "@/config/site";


export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    themeColor: [
        {media: "(prefers-color-scheme: light)", color: "white"},
        {media: "(prefers-color-scheme: dark)", color: "black"},
    ],
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
};

export default function RootLayout({children}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head/>
        <body
            className={cn(
                "min-h-screen bg-background font-sans antialiased",
                fontSans.variable
            )}
        >
        <Providers
            themeProps={{
                attribute: "class",
                defaultTheme: "dark",
                themes: ["light", "dark", "posthog", "political", "purple-dark"]
            }}>
            <div className="relative flex flex-col h-screen">
                <Navbar/>
                <main className="container mx-auto max-w-full pt-16 px-6 flex-grow">
                    {children}
                </main>
                <Footer/>
            </div>
        </Providers>
        </body>
        </html>
    );
}
