type TableRecentProps = {
  data: {
    date: string;
    location: string;
    volume: string;
    user: string;
  }[];
};

export const TableRecent = ({ data }: TableRecentProps) => {
  return (
    <div className="bg-[#172554] p-4 rounded-lg">
      <h3 className="font-semibold mb-4 flex items-center gap-2">📅 Registros Recentes</h3>
      <table className="w-full text-left">
        <thead>
          <tr className="text-slate-400 text-sm">
            <th>Data</th>
            <th>Local</th>
            <th>Volume</th>
            <th>Usuário</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-700">
          {data.map((r) => (
            <tr key={r.date} className="text-slate-300 text-sm">
              <td>{r.date}</td>
              <td>{r.location}</td>
              <td className="text-blue-400">{r.volume}</td>
              <td>{r.user}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
