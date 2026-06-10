import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { metaTitle, slogan } from "@/const/app";
import { getDomain, getURL } from "@/lib/domain";
import { cn } from "@/lib/utils";
import { isProduction } from "@/utils/env";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import "./globals.css";

// const sans = localFont({
//   src: [
//     { path: "./fonts/google-sans-regular.woff2", weight: "400", style: "normal" },
//     { path: "./fonts/google-sans-500.woff2", weight: "500", style: "normal" },
//   ],
//   variable: "--font-sans",
//   display: "swap",
//   preload: true,
//   fallback: ["system-ui", "Inter", "sans-serif"],
// });
const sans = localFont({
  src: [
    { path: "./fonts/golos-text-regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/golos-text-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/golos-text-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/golos-text-700.woff2", weight: "700", style: "normal" },
    // { path: "./fonts/google-sans-regular.woff2", weight: "400", style: "normal" },
    // { path: "./fonts/google-sans-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "Inter", "sans-serif"],
});

const mono = localFont({
  src: [
    { path: "./fonts/jetbrains-mono-regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/jetbrains-mono-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-mono",
  display: "optional",
  preload: false,
  fallback: ["mono"],
});
const serif = localFont({
  src: [
    { path: "./fonts/playfair-regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/playfair-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-serif",
  display: "optional",
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
        className={cn(
          "antialiased",
          sans.variable,
          mono.variable,
          serif.variable
        )}
      >
        <NuqsAdapter>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem={true}
            enableColorScheme={true}
          >
            <TooltipProvider>
              <Toaster position="bottom-center" />
              {children}
            </TooltipProvider>
          </ThemeProvider>
        </NuqsAdapter>
      </body>
      {
        // Google Analytics
        isProduction() &&
        <GoogleAnalytics gaId="G-Y05QY597ZL" />
      }
    </html>
  );
}
