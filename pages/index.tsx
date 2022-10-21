import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { loadComparisons } from '../services/lowdb'
import { Comparison } from '../types/Comparison'

const Home: NextPage = () => {
  const [comparisons, setComparisons] = useState<Comparison[]>([])

  useEffect(() => {
    setComparisons(loadComparisons())
  }, [])

  return (
    <div className="w-full h-full">
      <div className="text-right text-lg">
        <button className="bg-slate-700 text-white rounded-xl px-10 py-2">
          Create comparison
        </button>
      </div>
    </div>
  )
}

export default Home
