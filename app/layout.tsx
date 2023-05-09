import './globals.css'
import { Inter } from 'next/font/google'
import Header from "@/components/header/Header"
import RegisterModal from "@/components/modals/RegisterModal"
import ToasterProvider from "./providers/ToasterProvider"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb Clone',
  description: 'Full Stack Airbnb Clone with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <RegisterModal />
        <ToasterProvider />
        {children}
      </body>
    </html>
  )
}
