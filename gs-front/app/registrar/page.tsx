export default function Registrar() {
  return (
    <main className="bg-gradient-to-b from-[#1740a0] to-[#0B1120] min-h-screen p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Registrar Dados de Chuva</h1>
        <p className="text-slate-400 mb-8">
          Contribua com dados precisos para nossa base pluviométrica. Suas
          informações ajudam toda a comunidade.
        </p>

        <form className="bg-slate-800 p-6 rounded-lg border border-slate-700 mb-8 space-y-4">
          <div>
            <label className="block text-sm mb-1">Data da Ocorrência</label>
            <input
              type="date"
              className="w-full p-2 rounded bg-slate-900 border border-slate-700"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Local *</label>
            <input
              type="text"
              placeholder="Ex: São Paulo, SP"
              className="w-full p-2 rounded bg-slate-900 border border-slate-700"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Volume (mm) *</label>
            <input
              type="number"
              placeholder="Ex: 25.5"
              className="w-full p-2 rounded bg-slate-900 border border-slate-700"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Observações</label>
            <textarea
              rows={3}
              placeholder="Observações adicionais sobre a chuva..."
              className="w-full p-2 rounded bg-slate-900 border border-slate-700"
            />
          </div>
          <button className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700">
            Salvar Registro
          </button>
        </form>

        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">💡 Dicas para um bom registro</h3>
            <ul className="list-disc ml-5 text-slate-300">
              <li>Use endereços específicos quando possível</li>
              <li>Coordenadas GPS são bem-vindas</li>
              <li>Inclua cidade e estado</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">📏 Medição</h3>
            <ul className="list-disc ml-5 text-slate-300">
              <li>Use pluviômetros quando disponível</li>
              <li>Registre logo após a chuva</li>
              <li>Seja preciso na medição</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
