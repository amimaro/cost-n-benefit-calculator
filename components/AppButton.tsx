export type AppButtonPropsType = {
  children?: React.ReactNode
  onClick: () => void
}

export default function AppButton({ children, onClick }: AppButtonPropsType) {
  return (
    <button
      className="bg-slate-700 text-white rounded-xl px-10 py-2"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
