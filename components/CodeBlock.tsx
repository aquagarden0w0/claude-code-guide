'use client'

import { useState } from 'react'

type Props = {
  lang: string
  code: string
}

export default function CodeBlock({ lang, code }: Props) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="rounded-lg overflow-hidden border border-bg-border my-4">
      <div className="bg-bg-card px-4 py-2 flex items-center justify-between border-b border-bg-border">
        <span className="text-text-muted text-xs">{lang}</span>
        <button
          onClick={handleCopy}
          className="text-xs text-accent-purple hover:text-accent-pink transition-colors"
          aria-label={copied ? 'コピー済み！' : 'コピー'}
        >
          {copied ? 'コピー済み！' : '📋 コピー'}
        </button>
      </div>
      <pre className="bg-bg-primary px-5 py-4 overflow-x-auto text-sm text-text-code font-mono">
        <code>{code}</code>
      </pre>
    </div>
  )
}
