

export default function History() {
  const records = [
    { date: '2024-06-01', location: 'São Paulo', volume: 12, observations: 'Chuva moderada' },
    { date: '2024-06-02', location: 'Campinas', volume: 8, observations: 'Chuva leve' },
  ]

  return (
    
      <div className="p-8">
        <h1 className="text-3xl font-bold text-white mb-6">Histórico de Registros</h1>
        <ul className="space-y-4">
          {records.map((r, i) => (
            <li key={i} className="bg-slate-700 p-4 rounded text-white">
              {r.date} - {r.location}: {r.volume}mm ({r.observations})
            </li>
          ))}
        </ul>
      </div>
    
  )
}
