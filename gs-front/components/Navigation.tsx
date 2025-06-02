'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Navigation = () => {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo e título */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white">
              ■
            </div>
            <span className="text-xl font-bold text-white">
              Cadastro da Chuva
            </span>
          </Link>

          {/* Menu de navegação */}
          <div className="hidden md:flex items-center space-x-4">
            {[
              { path: '/', label: 'Início' },
              { path: '/dashboard', label: 'Dashboard' },
              { path: '/register', label: 'Registrar' },
              { path: '/history', label: 'Histórico' },
              { path: '/integrantes', label: 'Integrantes' }
            ].map(({ path, label }) => (
              <Link key={path} href={path}>
                <span
                  className={`text-white hover:text-blue-300 ${
                    isActive(path) ? 'font-bold underline' : ''
                  }`}
                >
                  {label}
                </span>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navigation
