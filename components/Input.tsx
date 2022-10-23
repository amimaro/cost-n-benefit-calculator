export type AppInputPropsType = {
  type?: string
  label?: string
  value: any
  onChange: (e: any) => void
}

export default function Input({
  label,
  value,
  onChange,
  type = 'text',
}: AppInputPropsType) {
  return (
    <div className="flex flex-col">
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        value={value}
        type={type}
        onChange={onChange}
        className="bg-slate-100 px-2 py-1 rounded-md w-full"
      />
    </div>
  )
}
