import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { loadComparisons } from '../services/lowdb'

const Home: NextPage = () => {
  const [comparisons, setComparisons] = useState([])

  useEffect(() => {
    setComparisons(loadComparisons())
  }, [])

  return <div className="w-full h-full"></div>
}

export default Home
