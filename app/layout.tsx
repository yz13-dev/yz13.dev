import { metaTitle, slogan } from "@/const/app";
import { getDomain, getURL } from "@/lib/domain";
import { cn } from "@/lib/utils";
import { isProduction } from "@/utils/env";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sans = localFont({
  src: "./fonts/google-sans.ttf",
  variable: "--font-sans",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "Inter", "sans-serif"],
});
const mono = localFont({
  src: "./fonts/jetbrains-mono.ttf",
  variable: "--font-mono",
  display: "swap",
  preload: false,
  fallback: ["mono"],
});
const serif = localFont({
  src: "./fonts/playfair-serif.ttf",
  variable: "--font-serif",
  display: "swap",
  preload: false,
  fallback: ["serif"],
});

export const metadata: Metadata = {
  // Основные мета-теги
  title: {
    default: metaTitle,
    template: "%s | YZ13", // для других страниц
  },
  // Канонический URL
  alternates: {
    canonical: getURL("/"),
  },
  // Приложение для мобильных устройств
  appleWebApp: {
    capable: true,
    title: "YZ13 Фронтенд",
    statusBarStyle: "default",
    startupImage: "/logo/512x512.png",
  },
  // Информация о сайте
  applicationName: "YZ13 - Фронтенд разработчик",
  creator: "YZ13",
  publisher: "YZ13",
  category: "Technology",
  metadataBase: new URL(getDomain()),
  openGraph: {
    title: metaTitle,
    description: slogan,
    url: getURL(""),
    type: "website",
    locale: "ru_RU",
    siteName: "YZ13",
    images: [
      new URL(
        "og.png",
        getDomain(),
      ),
    ],
  },
  twitter: {
    title: metaTitle,
    description: slogan,
    card: "summary_large_image",
    creator: "@yz13_dev",
    site: "@yz13_dev",
    images: [
      new URL(
        "og.png",
        getDomain(),
      ),
    ],
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#ffffff",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#000000",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      suppressHydrationWarning
    >
      <body
        className={cn("antialiased", sans.variable, mono.variable, serif.variable)}
      >
        {children}
      </body>
      {
        // Google Analytics
        isProduction() &&
        <GoogleAnalytics gaId="G-ZHN81DDEZF" />
      }
    </html>
  );
}
