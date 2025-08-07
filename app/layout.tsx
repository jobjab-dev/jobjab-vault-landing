import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JVAULT - Weekly-Batch Liquidity Vault',
  description: 'Earn market-making yield, withdraw every Sunday. Deposit USDC and get JVAULT shares with transparent returns.',
  keywords: ['DeFi', 'Vault', 'Market Making', 'USDC', 'Base L2', 'Yield'],
  openGraph: {
    title: 'JVAULT - Weekly-Batch Liquidity Vault',
    description: 'Earn market-making yield, withdraw every Sunday',
    url: 'https://jobjabvault.xyz',
    siteName: 'JVAULT',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JVAULT - Weekly-Batch Liquidity Vault',
    description: 'Earn market-making yield, withdraw every Sunday',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}