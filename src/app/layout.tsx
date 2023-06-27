"use client"
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react"
import { Inter } from "next/font/google"
import { defaultTheme } from "../theme"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="en">
            <EmotionThemeProvider theme={defaultTheme}>
                <body className={inter.className}>{children}</body>
            </EmotionThemeProvider>
        </html>
    )
}