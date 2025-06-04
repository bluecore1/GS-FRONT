'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Registrar() {
  const [data, setData] = useState('');
  const [local, setLocal] = useState('');
  const [volume, setVolume] = useState('');
  const [observacoes, setObservacoes] = useState('');
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!data || !local || !volume) {
      setErro('Preencha todos os campos obrigatórios.');
      setSucesso('');
      return;
    }

    // Envio dos dados para API futuramente
    setErro('');
    setSucesso('Registro salvo com sucesso!');
    setData('');
    setLocal('');
    setVolume('');
    setObservacoes('');
  };

  return (
    <main className="bg-gradient-to-b from-[#1740a0] to-[#0B1120] min-h-screen p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Registrar Dados de Chuva</h1>
        <p className="text-slate-400 mb-6">
          Contribua com dados precisos para nossa base pluviométrica. Suas
          informações ajudam toda a comunidade.
        </p>

        {erro && <p className="bg-red-700 text-white p-3 rounded mb-4">{erro}</p>}
        {sucesso && <p className="bg-green-600 text-white p-3 rounded mb-4">{sucesso}</p>}

        <form
          onSubmit={handleSubmit}
          className="bg-slate-800 p-6 rounded-lg border border-slate-700 mb-8 space-y-4"
        >
          <div>
            <label className="block text-sm mb-1">Data da Ocorrência *</label>
            <input
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="w-full p-2 rounded bg-slate-900 border border-slate-700"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Local *</label>
            <input
              type="text"
              placeholder="Ex: São Paulo, SP"
              value={local}
              onChange={(e) => setLocal(e.target.value)}
              className="w-full p-2 rounded bg-slate-900 border border-slate-700"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Volume (mm) *</label>
            <input
              type="number"
              placeholder="Ex: 25.5"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              className="w-full p-2 rounded bg-slate-900 border border-slate-700"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Observações</label>
            <textarea
              rows={3}
              placeholder="Observações adicionais sobre a chuva..."
              value={observacoes}
              onChange={(e) => setObservacoes(e.target.value)}
              className="w-full p-2 rounded bg-slate-900 border border-slate-700"
            />
          </div>

          <div className="flex gap-4 mt-4">
            <button
              type="submit"
              className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Salvar Registro
            </button>
            <Link
              href="/"
              className="bg-slate-600 px-6 py-2 rounded-lg hover:bg-slate-700"
            >
              Cancelar
            </Link>
          </div>
        </form>

        {/* Seção de Dicas — MANTIDA */}
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
