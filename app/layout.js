
import './globals.css'

export const metadata = {
  title: 'Codewinx IT Solutions',
  description: 'Professional 3D IT Startup Website'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
