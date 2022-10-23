import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import AddProductModal from '../components/AddProductModal'
import AppButton from '../components/AppButton'
import AppCard from '../components/AppCard'
import DeleteButton from '../components/DeleteButton'
import {
  addComparison,
  loadComparisons,
  removeComparison,
} from '../services/lowdb'
import { Comparison } from '../types/Comparison'
import { Unit } from '../types/Product'

const Home: NextPage = () => {
  const [comparisons, setComparisons] = useState<Comparison[]>([])
  const [addProductModalOpen, setAddProductModalOpen] = useState(false)

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
            <AddProductModal
              title="Add product"
              isOpen={addProductModalOpen}
              close={() => {
                setAddProductModalOpen(false)
                setComparisons([...loadComparisons()])
              }}
              comparisonId={comparison.id!}
            />
            <div className="text-right">
              <AppButton onClick={() => setAddProductModalOpen(true)}>
                Add product
              </AppButton>
            </div>
            <div className="flex flex-wrap gap-4">
              {comparison.products.map((product) => (
                <AppCard key={product.id}>
                  <div className="min-w-[10rem]">
                    <p>Name: {product.name}</p>
                    <p>Quantity: {product.quantity} {Unit[product.unit]}</p>
                    <p>Price: ${product.price}</p>                    
                  </div>
                </AppCard>
              ))}
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
