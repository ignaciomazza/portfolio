import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900',]
})

export const metadata = {
  title: 'Ignacio Mazza',
  description: 'Full-Stack Web Developer',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang='es'>
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  )
}
