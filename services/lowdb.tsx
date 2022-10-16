import { nanoid } from 'nanoid'
import { LocalStorage } from '../node_modules/lowdb/lib/adapters/LocalStorage.js'
import { LowSync } from '../node_modules/lowdb/lib/LowSync.js'
import { Product } from '../types/Product.js'

type Data = {
  products: Product[]
}

const adapter = new LocalStorage<Data>('db')
const db = new LowSync(adapter)

if (typeof window !== 'undefined') {
  db.read()
  db.data ||= { products: [] }
  db.write()
}

export const loadProducts = () => {
  return db.data?.products || []
}

export const addProduct = ({ name, unit, price }: Product) => {
  const id = nanoid()
  db.data!.products.push({
    id,
    name,
    unit,
    price,
  })
  db.write()
}

export const removeProduct = (id: string) => {
  db.read()
  db.data!.products = db.data!.products.filter((product) => product.id !== id)
  db.write()
}

export const clearAllProducts = () => {
  db.read()
  db.data!.products = []
  db.write()
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  loadProducts,
  addProduct,
  removeProduct,
  clearAllProducts,
}
