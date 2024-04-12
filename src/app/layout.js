
import './globals.css'
import { fontMontserrat } from '@/fonts'
import CartProvider from '@/context/cart'
import { pageName } from '@/data'

export const metadata = {
  title: pageName,
  // description: 'Generated by create next app',
}


export default function RootLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={`${fontMontserrat.variable} font-montserrat`}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
