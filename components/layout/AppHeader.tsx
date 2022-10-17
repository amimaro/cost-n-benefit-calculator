import { useState } from 'react'
import AppDialog from '../AppDialog'

export default function AppHeader() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex justify-between bg-slate-700 text-white px-2 py-4 mb-2 shadow-sm">
      <div className="text-2xl font-bold">Cost and benefit calculator</div>
      <button onClick={() => setIsOpen(true)}>Add product</button>
      <AppDialog isOpen={isOpen} close={() => setIsOpen(false)}></AppDialog>
    </div>
  )
}
