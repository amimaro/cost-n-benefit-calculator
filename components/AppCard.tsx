export type AppCardPropsType = {
  children?: React.ReactNode
}

export default function AppCard({ children }: AppCardPropsType) {
  return <div className="bg-white rounded-xl px-4 py-2">{children}</div>
}
