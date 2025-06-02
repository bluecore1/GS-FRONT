import { ReactNode } from 'react'

interface MetricCardProps {
  title: string
  value: string | number
  subtitle?: string
  icon: ReactNode
  trend?: {
    value: number
    isPositive: boolean
  }
}

export const MetricCard = ({ title, value, subtitle, icon, trend }: MetricCardProps) => {
  return (
    <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-lg backdrop-blur-sm hover:bg-slate-800/70 transition-colors duration-200">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-blue-500/20 rounded-lg">{icon}</div>
        <div>
          <p className="text-sm font-medium text-slate-300">{title}</p>
          <p className="text-2xl font-bold text-white">{value}</p>
          {subtitle && <p className="text-sm text-slate-400">{subtitle}</p>}
          {trend && (
            <p className={`text-xs mt-1 ${trend.isPositive ? 'text-green-400' : 'text-red-400'}`}>
              {trend.isPositive ? '+' : ''}
              {trend.value}% vs mês anterior
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
