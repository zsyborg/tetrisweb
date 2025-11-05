import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TETRIS - Solana Edition',
  description: 'Play retro TETRIS on Solana blockchain with TETRIS token rewards',
  icons: {
    icon: '🎮',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="grid-bg">
        {children}
      </body>
    </html>
  )
}
