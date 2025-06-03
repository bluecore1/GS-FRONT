import RainChart from "@/components/RainChart";

export default function Dashboard() {
  return (
    <main className="bg-gradient-to-b from-[#1740a0] to-[#0B1120] min-h-screen p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-white">Dashboard Pluviométrico</h1>
        <p className="text-slate-400">Acompanhe os dados de chuva em tempo real</p>

        {/* Cards principais */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: "Volume Total (Mês)", value: "123.5 mm" },
            { label: "Registros Hoje", value: "12" },
            { label: "Média Diária", value: "12.4 mm" },
            { label: "Usuários Ativos", value: "95" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-slate-800 p-4 rounded-lg border border-slate-700"
            >
              <h3 className="text-sm text-slate-400">{item.label}</h3>
              <p className="text-2xl font-bold mt-2 text-white">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Gráfico + Locais Mais Ativos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Gráfico */}
          <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 h-[420px] flex flex-col justify-start">
            <h3 className="font-semibold mb-4 text-white">
              🌧️ Volume de Chuva (Últimos 10 dias)
            </h3>
            <div className="flex-1 bg-slate-900 rounded-md px-2 pt-4 pb-4">
              <RainChart />
            </div>
          </div>

          {/* Locais Mais Ativos */}
          <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
            <h3 className="font-semibold mb-4 text-white">📍 Locais Mais Ativos</h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>São Paulo, SP - 18.7mm</li>
              <li>Campinas, SP - 15.2mm</li>
              <li>Ribeirão Preto, SP - 12.8mm</li>
              <li>Santos, SP - 22.1mm</li>
              <li>São José dos Campos, SP - 11.4mm</li>
              <li>Guarulhos, SP - 13.9mm</li>
              <li>Jundiaí, SP - 9.8mm</li>
              <li>Barueri, SP - 14.3mm</li>
              <li>Osasco, SP - 10.7mm</li>
              <li>São Bernardo do Campo, SP - 16.1mm</li>
            </ul>
          </div>
        </div>

        {/* Registros Recentes */}
        <div className="bg-slate-800 p-4 mt-8 rounded-lg border border-slate-700">
          <h3 className="font-semibold mb-4 text-white">📅 Registros Recentes</h3>
          <table className="w-full text-left">
            <thead>
              <tr className="text-slate-400">
                <th>Data</th>
                <th>Local</th>
                <th>Volume</th>
                <th>Usuário</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700 text-slate-300">
              {[
                {
                  data: "10/05/2024",
                  local: "São Paulo, SP",
                  volume: "31.2mm",
                  usuario: "João Silva",
                },
                {
                  data: "09/05/2024",
                  local: "Campinas, SP",
                  volume: "9.6mm",
                  usuario: "Maria Santos",
                },
                {
                  data: "08/05/2024",
                  local: "Ribeirão Preto, SP",
                  volume: "0mm",
                  usuario: "Pedro Costa",
                },
                {
                  data: "07/05/2024",
                  local: "Sorocaba, SP",
                  volume: "18.9mm",
                  usuario: "Ana Oliveira",
                },
                {
                  data: "06/05/2024",
                  local: "Santos, SP",
                  volume: "5.3mm",
                  usuario: "Carlos Lima",
                },
              ].map((r) => (
                <tr key={r.data}>
                  <td className="py-2">{r.data}</td>
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
