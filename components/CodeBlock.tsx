import { codeToHtml } from 'shiki'
import CodeBlockClient from './CodeBlockClient'

interface Props {
  lang: string
  code: string
}

export default async function CodeBlock({ lang, code }: Props) {
  const safeCode = code ?? ''
  const safeLang = lang ?? 'text'
  let html: string
  try {
    html = await codeToHtml(safeCode, {
      lang: safeLang,
      theme: 'tokyo-night',
    })
  } catch {
    // Unknown language fallback
    html = await codeToHtml(safeCode, { lang: 'text', theme: 'tokyo-night' })
  }

  return <CodeBlockClient lang={safeLang} code={safeCode} html={html} />
}
