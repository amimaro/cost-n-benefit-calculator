import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { loadComparisons } from '../services/lowdb'
import { Comparison } from '../types/Comparison'

const Home: NextPage = () => {
  const [comparisons, setComparisons] = useState<Comparison[]>([])

  useEffect(() => {
    setComparisons(loadComparisons())
  }, [])

  return <div className="w-full h-full"></div>
}

export default Home
