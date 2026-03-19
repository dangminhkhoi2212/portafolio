import { ThemeProvider } from "@/components/theme-provider"
import { ScrollArea } from "@/components/ui/scroll-area"
import { personalInfo } from "@/lib/data"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Geist_Mono, Outfit } from "next/font/google"
import "./globals.css"

const outfit = Outfit({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: `${personalInfo.name} — Frontend Developer`,
  description: `Portfolio of ${personalInfo.name}, a Frontend Developer specializing in architecting complex web systems and deep user experience optimization.`,
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Dang Minh Khoi",
  ],
  authors: [{ name: personalInfo.name }],
  openGraph: {
    title: `${personalInfo.name} — Frontend Developer`,
    description: `Portfolio of ${personalInfo.name}`,
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        outfit.variable,
        "font-sans"
      )}
    >
      <body>
        <ThemeProvider>
          <ScrollArea className="h-screen">{children}</ScrollArea>
        </ThemeProvider>
      </body>
    </html>
  )
}
