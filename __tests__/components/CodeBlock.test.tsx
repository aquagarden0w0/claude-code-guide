import { render, screen, fireEvent } from '@testing-library/react'
import CodeBlockClient from '../../components/CodeBlockClient'

describe('CodeBlockClient', () => {
  it('言語ラベルを表示する', () => {
    render(<CodeBlockClient lang="bash" code="npm install" html="<pre><code>npm install</code></pre>" />)
    expect(screen.getByText('bash')).toBeInTheDocument()
  })

  it('コピーボタンが存在する', () => {
    render(<CodeBlockClient lang="bash" code="npm install" html="<pre><code>npm install</code></pre>" />)
    expect(screen.getByRole('button', { name: /コピー/ })).toBeInTheDocument()
  })

  it('コピー後に「コピー済み！」と表示される', async () => {
    Object.assign(navigator, {
      clipboard: { writeText: jest.fn().mockResolvedValue(undefined) },
    })
    render(<CodeBlockClient lang="bash" code="npm install" html="<pre><code>npm install</code></pre>" />)
    fireEvent.click(screen.getByRole('button', { name: /コピー/ }))
    expect(await screen.findByText('✓ コピー済み！')).toBeInTheDocument()
  })
})
