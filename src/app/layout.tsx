import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Geist, Geist_Mono } from "next/font/google";
import theme from "@/theme";
import "./globals.css";
import Footer from "./_components/footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CodeMap",
  description: "CodeMap is the best tool to visualize and explore your codebase structure. Created by Mostafa Gaber.",
  icons: [
    { rel: "icon", type: "image/x-icon", url: "/favicon.ico" },
  ],
  openGraph: {
    title: "CodeMap",
    description: "Explore, analyze and visualize your code structure easily with CodeMap.",
    url: "https://code-map-psi.vercel.app/",
    siteName: "CodeMap",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "CodeMap OpenGraph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeMap",
    description: "Visualize your code structure with CodeMap by Mostafa Gaber.",
    images: ["/cover-og.png"],
  },
  robots: "index, follow",
  keywords: [
    "CodeMap", "code visualization", "code explorer", "codebase analysis", "Mostafa Gaber"
  ],
  authors: [{ name: "Mostafa Gaber", url: "https://code-map-psi.vercel.app/" }],
  generator: "Next.js",
  applicationName: "CodeMap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="canonical" href="https://code-map-psi.vercel.app/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "CodeMap",
              "url": "https://code-map-psi.vercel.app/",
              "author": {
                "@type": "Person",
                "name": "Mostafa Gaber"
              }
            })
          }}
        />
      </head>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
