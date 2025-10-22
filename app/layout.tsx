import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { AnimatedLogo } from "@/components/animated-logo"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _playfairDisplay = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] })

export const metadata: any = {
	title: "Coffee Appliance Lab - Machine & Bean Reviews",
	description:
		"Personal coffee machine and coffee bean reviews. Discover the best equipment and beans for your perfect cup.",
	referrer: 'unsafe-url'
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`font-sans antialiased`}>
				<AnimatedLogo />
				{children}
				<Analytics />
			</body>
		</html>
	)
}
