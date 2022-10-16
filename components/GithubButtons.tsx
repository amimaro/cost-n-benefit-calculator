import GitHubButton from 'react-github-btn'

export const GithubButtons: React.FC = () => {
  return (
    <div className="flex justify-center gap-4 pb-2">
      <GitHubButton
        href="https://github.com/amimaro/cost-n-benefit-calculator"
        data-show-count="true"
        aria-label="Star amimaro/cost-n-benefit-calculator on GitHub"
      >
        Star
      </GitHubButton>
      <GitHubButton
        href="https://github.com/amimaro/cost-n-benefit-calculator/fork"
        aria-label="Fork amimaro/cost-n-benefit-calculator on GitHub"
      >
        Fork
      </GitHubButton>
      <GitHubButton
        href="https://github.com/amimaro/cost-n-benefit-calculator"
        aria-label="Project source code"
      >
        Source
      </GitHubButton>
    </div>
  )
}
