import { nanoid } from 'nanoid'
import { LocalStorage } from '../node_modules/lowdb/lib/adapters/LocalStorage.js'
import { LowSync } from '../node_modules/lowdb/lib/LowSync.js'
import { Comparison } from '../types/Comparison.js'
import { Product } from '../types/Product.js'

type Data = {
  comparisons: Comparison[]
}

const adapter = new LocalStorage<Data>('db')
const db = new LowSync(adapter)

if (typeof window !== 'undefined') {
  db.read()
  db.data ||= { comparisons: [] }
  if (!db.data.comparisons) {
    db.data.comparisons = []
  }
  db.write()
}

export const loadComparisons = () => {
  return db.data?.comparisons || []
}

export const addComparison = () => {
  const id = nanoid()
  db.data!.comparisons.push({
    id,
    products: [],
  })
  db.write()
}

export const removeComparison = (comparisonId: string) => {
  db.read()
  db.data!.comparisons = db.data!.comparisons.filter(
    (comparison) => comparison.id !== comparisonId
  )
  db.write()
}

export const addProduct = (
  comparisonId: string,
  { name, unit, price, quantity }: Product
) => {
  const id = nanoid()
  const comparison = db.data!.comparisons.find(
    (comparison) => comparison.id === comparisonId
  )
  comparison?.products.push({
    id,
    name,
    unit,
    price,
    quantity,
  })
  db.write()
}

export const removeProduct = (comparisonId: string, productId: string) => {
  db.read()
  const comparison = db.data!.comparisons.find(
    (comparison) => comparison.id === comparisonId
  )
  const productIndex = comparison?.products.findIndex(
    (product) => product.id === productId
  )
  comparison?.products.splice(productIndex!, 1)
  db.write()
}

export const clearAllComparisons = () => {
  db.read()
  db.data!.comparisons = []
  db.write()
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  loadComparisons,
  addComparison,
  removeComparison,
  addProduct,
  removeProduct,
  clearAllComparisons,
}
