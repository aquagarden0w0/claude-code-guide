'use client'

import { useState, useRef, useEffect } from 'react'

interface Props {
  lang: string
  code: string
  html: string
}

export default function CodeBlockClient({ lang, code, html }: Props) {
  const [copied, setCopied] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      timerRef.current = setTimeout(() => setCopied(false), 2000)
    } catch (e) {
      if (e instanceof DOMException) return
      throw e
    }
  }

  return (
    <div className="rounded-lg overflow-hidden border border-bg-border my-4">
      <div className="bg-bg-card px-3 py-1.5 flex items-center justify-between border-b border-bg-border">
        <span className="text-text-muted text-xs">{lang}</span>
        <button
          onClick={handleCopy}
          aria-label={copied ? 'コピー済み！' : 'コードをコピー'}
          className="text-xs text-accent-purple hover:text-accent-pink transition-colors cursor-pointer"
        >
          {copied ? '✓ コピー済み！' : '📋 コピー'}
        </button>
      </div>
      <div
        className="text-sm overflow-x-auto [&>pre]:p-4 [&>pre]:m-0 [&>pre]:bg-transparent!"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}
