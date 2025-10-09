import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { HeroHeader } from "@/components/layout/header";
import FooterSection from "@/components/layout/footer";
import { SimpleToggle } from "@/components/ui/mode-toggle";
import { Toaster } from "@/components/ui/sonner";
import ErrorBoundary from "@/components/ErrorBoundary";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: "Morális - Automation with a conscience",
  description: "We help founders and teams make principled decisions that scale. Morális blends investment readiness, brand positioning, and AI-powered automation—without compromising ethics.",
  metadataBase: new URL('https://moralis.studio'),
  openGraph: {
    title: "Morális - Automation with a conscience",
    description: "We help founders and teams make principled decisions that scale. Morális blends investment readiness, brand positioning, and AI-powered automation—without compromising ethics.",
    url: 'https://moralis.studio',
    siteName: 'Morális',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Morális landing page showing "Automation with a conscience" with deep green accents',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morális - Automation with a conscience',
    description: 'We help founders and teams make principled decisions that scale. Morális blends investment readiness, brand positioning, and AI-powered automation—without compromising ethics.',
    images: [
      {
        url: '/og-image.png',
        alt: 'Morális landing page showing "Automation with a conscience" with deep green accents',
      }
    ],
    creator: '@moralisstudio',
    site: '@moralisstudio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Morális',
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'theme-color': '#FAFAF9',
    'msapplication-TileColor': '#FAFAF9',
    'msapplication-navbutton-color': '#FAFAF9',
    'apple-mobile-web-app-title': 'Morális',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${fraunces.variable} min-h-screen bg-background font-sans antialiased`}
      >
        <ThemeProvider>
          <ErrorBoundary>
            <HeroHeader />
          </ErrorBoundary>
          <div className="min-h-screen flex flex-col">
            <main className="flex-1 pt-[72px] sm:pt-16 lg:pt-14">{children}</main>
            <ErrorBoundary>
              <FooterSection />
            </ErrorBoundary>
          </div>
          {/* Theme toggle positioned as floating button */}
          <ErrorBoundary>
            <div className="fixed bottom-6 right-6 z-50">
              <SimpleToggle />
            </div>
          </ErrorBoundary>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
