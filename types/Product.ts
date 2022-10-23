export enum Unit {
  Un,
  Kg,
  g,
  L,
  mL,
}

export type Product = {
  id?: string
  name: string
  unit: Unit
  price: number
  quantity: number
}
