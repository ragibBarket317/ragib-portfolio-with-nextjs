import { Inter } from 'next/font/google'
import './globals.css'
import type React from 'react' // Import React
import { Navbar } from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#1a1a1a] text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
