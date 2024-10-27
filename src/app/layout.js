import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { LangProvider } from '@/components/context/langContext'

import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aguilar Painting Services LLC',
  description: 'Aguilar Painting Services LLC offers professional services for residencial and comercial. Get a free estimate today!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
        <LangProvider>
          <body>
            <Navbar />
            <main className='relative overflow-hidden'>
              {children}
            </main>
            <Footer />
          </body>
        </LangProvider>
      
    </html>
  )
}
