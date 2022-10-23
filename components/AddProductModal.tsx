import { useState } from 'react'
import { addProduct } from '../services/lowdb'
import { Product, Unit } from '../types/Product'
import AppButton from './AppButton'
import AppDialog, { AppDialogPropsType } from './AppDialog'
import Input from './Input'

const DEFAULT_FORM = {
  name: '',
  quantity: 0,
  price: 0,
  unit: Unit.Unit,
}

export default function AddProductModal(props: AppDialogPropsType) {
  const [form, setForm] = useState<Product>(DEFAULT_FORM)

  const handleSendProduct = () => {
    addProduct(props.comparisonId, form)
    props.close()
    setForm(DEFAULT_FORM)
  }

  return (
    <AppDialog
      {...props}
      afterClose={() => {
        setForm(DEFAULT_FORM)
      }}
    >
      <div className="flex flex-col gap-4">
        <Input
          label="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <Input
          type="number"
          label="Quantity"
          value={form.quantity}
          onChange={(e) => setForm({ ...form, quantity: e.target.value })}
        />
        <Input
          type="number"
          label="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <AppButton onClick={handleSendProduct}>Send</AppButton>
      </div>
    </AppDialog>
  )
}
