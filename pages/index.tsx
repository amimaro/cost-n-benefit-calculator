import { ok } from 'assert'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import AppButton from '../components/AppButton'
import AppCard from '../components/AppCard'
import DeleteButton from '../components/DeleteButton'
import {
  addComparison,
  loadComparisons,
  removeComparison,
} from '../services/lowdb'
import { Comparison } from '../types/Comparison'

const Home: NextPage = () => {
  const [comparisons, setComparisons] = useState<Comparison[]>([])

  useEffect(() => {
    setComparisons(loadComparisons())
  }, [])

  return (
    <div className="w-full h-full">
      <div className="text-right">
        <AppButton
          onClick={() => {
            addComparison()
            setComparisons([...loadComparisons()])
          }}
        >
          Create comparison
        </AppButton>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        {comparisons.map((comparison) => (
          <AppCard key={comparison.id}>
            <div className="text-right">
              <AppButton
                onClick={() => {
                  console.log('add product')
                }}
              >
                Add product
              </AppButton>
            </div>
            <div className="text-right">
              <DeleteButton
                onClick={() => {
                  removeComparison(comparison.id!)
                  setComparisons([...loadComparisons()])
                }}
              />
            </div>
          </AppCard>
        ))}
      </div>
    </div>
  )
}

export default Home
