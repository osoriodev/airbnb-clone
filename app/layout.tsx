import './globals.css'
import { Inter } from 'next/font/google'
import Header from "@/components/header/Header"
import LoginModal from "@/components/modals/LoginModal"
import RegisterModal from "@/components/modals/RegisterModal"
import ToasterProvider from "./providers/ToasterProvider"
import getCurrentUser from "./actions/getCurrentUser"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb Clone',
  description: 'Full Stack Airbnb Clone with Next.js',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header currentUser={currentUser} />
        <LoginModal />
        <RegisterModal />
        <ToasterProvider />
        {children}
      </body>
    </html>
  )
}
