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
        
{/* <!-- Google tag (gtag.js) --> */}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-2W6G0F1E0V"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-2W6G0F1E0V');
</script>

      </head>
      <body className="grid-bg">
        {children}
      </body>
    </html>
  )
}
