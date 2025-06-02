import { useState, FormEvent } from 'react'

interface FormData {
  date: string
  location: string
  volume: string
  observations: string
}

export const RainForm = () => {
  const [formData, setFormData] = useState<FormData>({
    date: '',
    location: '',
    volume: '',
    observations: '',
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('Form Data:', formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {['date', 'location', 'volume', 'observations'].map((field) => (
        <div key={field}>
          <label className="block text-slate-300 capitalize">{field}</label>
          <input
            type={field === 'volume' ? 'number' : field === 'date' ? 'date' : 'text'}
            value={formData[field as keyof FormData]}
            onChange={(e) => setFormData({ ...formData, [field as keyof FormData]: e.target.value })}
            className="w-full bg-slate-700 border border-slate-600 text-white p-2 rounded"
          />
        </div>
      ))}
      <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded">
        Salvar Registro
      </button>
    </form>
  )
}
