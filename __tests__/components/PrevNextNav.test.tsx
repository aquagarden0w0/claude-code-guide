import { render, screen } from '@testing-library/react'
import PrevNextNav from '@/components/PrevNextNav'

describe('PrevNextNav', () => {
  it('最初のページは次へリンクのみ', () => {
    render(<PrevNextNav slug="getting-started/what-is-claude-code" />)
    expect(screen.queryByText(/←/)).not.toBeInTheDocument()
    expect(screen.getByText(/→/)).toBeInTheDocument()
  })

  it('中間ページは両方のリンクを持つ', () => {
    render(<PrevNextNav slug="getting-started/installation" />)
    expect(screen.getByText(/←/)).toBeInTheDocument()
    expect(screen.getByText(/→/)).toBeInTheDocument()
  })
})
