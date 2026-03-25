'use client'

import { useEffect, useState } from 'react'

type Step =
  | { type: 'command'; text: string }
  | { type: 'response'; text: string; color?: string }

type Props = {
  steps: Step[]
  loop?: boolean
}

export default function TerminalDemo({ steps, loop = true }: Props) {
  const [visible, setVisible] = useState<number>(0)

  useEffect(() => {
    if (visible >= steps.length) {
      if (loop) {
        const t = setTimeout(() => setVisible(0), 2000)
        return () => clearTimeout(t)
      }
      return
    }
    const delay = steps[visible].type === 'command' ? 900 : 400
    const t = setTimeout(() => setVisible(v => v + 1), delay)
    return () => clearTimeout(t)
  }, [visible, steps, loop])

  return (
    <div className="rounded-lg overflow-hidden border border-bg-border my-6">
      {/* ウィンドウヘッダー */}
      <div className="bg-bg-card px-4 py-2 flex items-center gap-2 border-b border-bg-border">
        <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        <span className="text-text-muted text-xs ml-2">terminal</span>
      </div>
      {/* コンテンツ */}
      <div className="bg-bg-primary px-5 py-4 font-mono text-sm min-h-[120px]">
        {steps.slice(0, visible).map((step, i) => (
          <div
            key={i}
            className={`mb-1 fade-in ${
              step.type === 'command' ? 'text-accent-purple' : ''
            }`}
            style={{ color: step.type === 'response' ? (step.color ?? 'var(--color-accent-purple)') : undefined }}
          >
            {step.type === 'command' && (
              <span className="text-text-muted mr-2">$</span>
            )}
            {step.text}
          </div>
        ))}
        {visible < steps.length && steps[visible].type === 'command' && (
          <div className="text-accent-purple">
            <span className="text-text-muted mr-2">$</span>
            <span className="typing-line inline-block">{steps[visible].text}</span>
          </div>
        )}
      </div>
    </div>
  )
}
