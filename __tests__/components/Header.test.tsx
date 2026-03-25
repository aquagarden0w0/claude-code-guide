import { render, screen } from '@testing-library/react'
import Header from '@/components/Header'

describe('Header', () => {
  it('サイト名を表示する', () => {
    render(<Header version="1.0.0" />)
    expect(screen.getByText('Claude Code Guide')).toBeInTheDocument()
  })

  it('バージョンを表示する', () => {
    render(<Header version="1.2.3" />)
    expect(screen.getByText('v1.2.3')).toBeInTheDocument()
  })
})
