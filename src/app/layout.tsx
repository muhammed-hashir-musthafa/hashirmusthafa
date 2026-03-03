import type { Metadata } from "next"
import { Inter, Space_Grotesk, Poppins } from "next/font/google"
import { Toaster } from "react-hot-toast"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk"
})

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins"
})

export const metadata: Metadata = {
  title: "Muhammed Hashir Musthafa - Software Developer Portfolio",
  description: "Passionate Software Developer specializing in building scalable web applications with modern technologies. Explore my projects and get in touch.",
  keywords: ["software developer", "full stack developer", "web development", "react", "next.js", "portfolio"],
  authors: [{ name: "Muhammed Hashir Musthafa" }],
  openGraph: {
    title: "Muhammed Hashir Musthafa - Software Developer Portfolio",
    description: "Passionate Software Developer specializing in building scalable web applications",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${poppins.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#1a1a1a",
              color: "#fff",
              border: "1px solid rgba(251, 191, 36, 0.2)",
            },
            success: {
              iconTheme: {
                primary: "#fbbf24",
                secondary: "#1a1a1a",
              },
            },
            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#1a1a1a",
              },
            },
          }}
        />
      </body>
    </html>
  )
}
