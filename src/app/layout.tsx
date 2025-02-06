import { Inter } from 'next/font/google'
import './globals.css'
import type React from 'react'
import { Navbar } from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ragib Barket -- Portfolio',
  description: 'This is ragibs world',
  icons: '/online-resume.ico',
}

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
