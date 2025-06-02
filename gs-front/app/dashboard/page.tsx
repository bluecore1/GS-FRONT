
import { RainChart } from '@/components/RainChart'

const data = [
  { date: '2024-06-01', volume: 10 },
  { date: '2024-06-02', volume: 15 },
  { date: '2024-06-03', volume: 8 },
]

export default function Dashboard() {
  return (
    
      <div className="p-8">
        <h1 className="text-3xl font-bold text-white mb-6">Dashboard</h1>
        <RainChart data={data} />
      </div>
    
  )
}
