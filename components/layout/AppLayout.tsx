import AppFooter from './AppFooter'
import AppHeader from './AppHeader'

type AppLayoutType = {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutType) {
  return (
    <div className="w-full h-full bg-slate-100">
      <AppHeader />
      <div className="px-2">{children}</div>
      <AppFooter />
    </div>
  )
}
