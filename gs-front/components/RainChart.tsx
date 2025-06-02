interface RainData {
  date: string
  volume: number
}

interface RainChartProps {
  data: RainData[]
}

export const RainChart = ({ data }: RainChartProps) => {
  const maxVolume = Math.max(...data.map((d) => d.volume))

  return (
    <div className="space-y-4">
      {data.map((d, i) => (
        <div key={i}>
          <div className="flex justify-between text-slate-300 mb-1">
            <span>{d.date}</span>
            <span>{d.volume} mm</span>
          </div>
          <div className="w-full bg-slate-700 h-4 rounded">
            <div
              className="bg-blue-500 h-4 rounded"
              style={{ width: `${(d.volume / maxVolume) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
