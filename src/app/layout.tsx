import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import './globals.css'
import { Providers } from './providers'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Box } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Box position="sticky" top="0" zIndex="sticky">
            <NavBar />
          </Box>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
