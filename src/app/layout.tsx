import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk"
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
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
