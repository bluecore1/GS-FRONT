
import Link from 'next/link'

export default function Home() {
  return (
    
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Cadastro da Chuva</h1>
        <p className="text-slate-300 mb-8">
          Plataforma para cadastro e monitoramento de dados pluviométricos.
        </p>
        <Link href="/register">
          <span className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
            💧
            <span className="ml-2">Fazer Primeiro Registro</span>
          </span>
        </Link>
      </section>
    
  )
}
