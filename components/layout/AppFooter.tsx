import dynamic from 'next/dynamic'

const AppGithubButtons = dynamic<any>(
  () => import('../GithubButtons').then((mod) => mod.GithubButtons),
  { ssr: false }
)

export default function AppFooter() {
  return (
    <div className="sticky top-[100vh]">
      <div className="flex justify-center py-1">
        <AppGithubButtons />
      </div>
    </div>
  )
}
