import './globals.css'
import { ReactNode } from 'react'
import { Navigation } from '@/components/Navigation'

export const metadata = {
  title: 'Cadastro de Chuva',
  description: 'Aplicação para controle de registros de chuva',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="pt">
      <body className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}
