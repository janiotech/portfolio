import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jânio Tech - Portfólio',
  description: 'um portfólio de jânio de oliveira matos júnior com as descrições detalhadas de suas habilidades como java, javascrip, html, css, lua, react, nodejs, nextjs, nestjs, spring boot.',
  generator: 'janio.tech',
  icons:{
    icon:"favicon.png",
    shortcut: 'favicon.ico',
    apple: 'favicon.png',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt_br" webcrx=""> 
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
