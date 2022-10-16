export enum Unit {
  Unit,
  Kilogram,
  Gram,
  Liter,
  Mililiter,
}

export type Product = {
  id?: string
  name: string
  unit: Unit
  price: number
}
