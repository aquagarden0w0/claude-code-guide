import { render, screen, fireEvent } from '@testing-library/react'
import CodeBlock from '@/components/CodeBlock'

describe('CodeBlock', () => {
  it('言語ラベルを表示する', () => {
    render(<CodeBlock lang="bash" code="npm install" />)
    expect(screen.getByText('bash')).toBeInTheDocument()
  })

  it('コピーボタンが存在する', () => {
    render(<CodeBlock lang="bash" code="npm install" />)
    expect(screen.getByRole('button', { name: /コピー/ })).toBeInTheDocument()
  })

  it('コピー後に「コピー済み！」と表示される', async () => {
    Object.assign(navigator, {
      clipboard: { writeText: jest.fn().mockResolvedValue(undefined) },
    })
    render(<CodeBlock lang="bash" code="npm install" />)
    fireEvent.click(screen.getByRole('button', { name: /コピー/ }))
    expect(await screen.findByText('コピー済み！')).toBeInTheDocument()
  })
})
