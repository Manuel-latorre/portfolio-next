import { Poppins } from 'next/font/google'
import {Providers} from "./providers";
import './globals.css'
import NavbarUi from '@/components/Navbar/Navbar';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['100', '200', '300']
})

export const metadata = {
  title: 'Manuel Latorre',
  description: 'Portfolio Manuel Latorre',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <body className={poppins.className}>
      <Providers>
        <NavbarUi/>
        {children}
      </Providers>
      </body>
    </html>
  )
}
