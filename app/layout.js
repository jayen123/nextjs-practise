import './globals.css'
import { Inter } from 'next/font/google'
import Header from './Components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shada Pixel',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        </body>
    </html>
  )
}
