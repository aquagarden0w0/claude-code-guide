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
    <div
      className="rounded-xl overflow-hidden my-4"
      style={{
        border: '1px solid #3e1465',
        boxShadow: '0 4px 24px rgba(12,5,24,0.5)',
      }}
    >
      <div
        className="px-4 py-2 flex items-center justify-between border-b"
        style={{
          background: 'linear-gradient(135deg, #1e0e38 0%, #180e2c 100%)',
          borderColor: '#3e1465',
        }}
      >
        <span className="text-xs font-bold" style={{ color: '#d4a0e8' }}>{lang}</span>
        <button
          onClick={handleCopy}
          aria-label={copied ? 'コピー済み！' : 'コードをコピー'}
          className="text-xs transition-colors cursor-pointer"
          style={{ color: copied ? '#f0a0c4' : '#8a78a8' }}
        >
          {copied ? '✓ コピー済み！' : '📋 コピー'}
        </button>
      </div>
      <div
        className="text-sm overflow-x-auto [&>pre]:p-4 [&>pre]:m-0 [&>pre]:bg-transparent!"
        style={{ background: '#0c0518' }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}
