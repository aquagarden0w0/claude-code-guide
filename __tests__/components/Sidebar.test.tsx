import { render, screen } from '@testing-library/react'
import Sidebar from '@/components/Sidebar'

jest.mock('next/navigation', () => ({
  usePathname: () => '/docs/getting-started/what-is-claude-code',
}))

describe('Sidebar', () => {
  it('全セクションタイトルを表示する', () => {
    render(<Sidebar />)
    expect(screen.getByText('はじめに')).toBeInTheDocument()
    expect(screen.getByText('Skills')).toBeInTheDocument()
    expect(screen.getByText('もっと深く')).toBeInTheDocument()
  })

  it('現在のページをハイライトする', () => {
    render(<Sidebar />)
    const active = screen.getByText('Claude Codeとは？').closest('a')
    expect(active).toHaveClass('border-l-2')
  })
})
