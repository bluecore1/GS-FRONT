export default function Dashboard() {
  return (
    <main className="bg-gradient-to-b from-[#1740a0] to-[#0B1120] min-h-screen p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Dashboard Pluviométrico</h1>
        <p className="text-slate-400">
          Acompanhe os dados de chuva em tempo real
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'Volume Total (Mês)', value: '123.5 mm' },
            { label: 'Registros Hoje', value: '12' },
            { label: 'Média Diária', value: '12.4 mm' },
            { label: 'Usuários Ativos', value: '95' },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-slate-800 p-4 rounded-lg border border-slate-700"
            >
              <h3 className="text-sm text-slate-400">{item.label}</h3>
              <p className="text-2xl font-bold mt-2">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
            <h3 className="font-semibold mb-4">
              🌧️ Volume de Chuva (Últimos 10 dias)
            </h3>
            <div className="h-48 bg-slate-900 rounded-md flex items-center justify-center">
              <span className="text-slate-500">[Gráfico Aqui]</span>
            </div>
          </div>

          <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
            <h3 className="font-semibold mb-4">📍 Locais Mais Ativos</h3>
            <ul className="space-y-2">
              <li>São Paulo, SP - 18.7mm</li>
              <li>Campinas, SP - 15.2mm</li>
              <li>Ribeirão Preto, SP - 12.8mm</li>
              <li>Santos, SP - 22.1mm</li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
          <h3 className="font-semibold mb-4">📅 Registros Recentes</h3>
          <table className="w-full text-left">
            <thead>
              <tr className="text-slate-400">
                <th>Data</th>
                <th>Local</th>
                <th>Volume</th>
                <th>Usuário</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {[
                {
                  data: '10/05/2024',
                  local: 'São Paulo, SP',
                  volume: '31.2mm',
                  usuario: 'João Silva',
                },
                {
                  data: '09/05/2024',
                  local: 'Campinas, SP',
                  volume: '9.6mm',
                  usuario: 'Maria Santos',
                },
                {
                  data: '08/05/2024',
                  local: 'Ribeirão Preto, SP',
                  volume: '0mm',
                  usuario: 'Pedro Costa',
                },
                {
                  data: '07/05/2024',
                  local: 'Sorocaba, SP',
                  volume: '18.9mm',
                  usuario: 'Ana Oliveira',
                },
                {
                  data: '06/05/2024',
                  local: 'Santos, SP',
                  volume: '5.3mm',
                  usuario: 'Carlos Lima',
                },
              ].map((r) => (
                <tr key={r.data} className="text-slate-300">
                  <td>{r.data}</td>
                  <td>{r.local}</td>
                  <td>{r.volume}</td>
                  <td>{r.usuario}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
