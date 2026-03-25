'use client'

import { useEffect, useState } from 'react'

type Step =
  | { type: 'command'; text: string }
  | { type: 'response'; text: string; color?: string }

type Props = {
  steps: Step[]
  loop?: boolean
}

export default function TerminalDemo({ steps = [], loop = true }: Props) {
  // Start at 1 so the first command is visible immediately (no blank initial state)
  const [visible, setVisible] = useState<number>(steps.length > 0 ? 1 : 0)

  useEffect(() => {
    if (steps.length === 0) return
    if (visible >= steps.length) {
      if (loop) {
        // Reset to 1 (not 0) to skip the blank-then-type period on loop restart
        const t = setTimeout(() => setVisible(1), 2000)
        return () => clearTimeout(t)
      }
      return
    }
    const delay = steps[visible].type === 'command' ? 900 : 400
    const t = setTimeout(() => setVisible(v => v + 1), delay)
    return () => clearTimeout(t)
  }, [visible, steps, loop])

  return (
    <div
      className="rounded-xl overflow-hidden my-6"
      style={{
        border: '1px solid #3e1465',
        boxShadow: '0 0 0 1px rgba(212,160,232,0.08), 0 8px 32px rgba(12,5,24,0.6)',
      }}
    >
      {/* ウィンドウヘッダー */}
      <div
        className="px-4 py-2 flex items-center gap-2 border-b"
        style={{
          background: 'linear-gradient(135deg, #1e0e38 0%, #180e2c 100%)',
          borderColor: '#3e1465',
        }}
      >
        <span className="w-3 h-3 rounded-full bg-[#ff6b7a]" style={{ boxShadow: '0 0 4px #ff6b7a88' }} />
        <span className="w-3 h-3 rounded-full bg-[#ffc55a]" style={{ boxShadow: '0 0 4px #ffc55a88' }} />
        <span className="w-3 h-3 rounded-full bg-[#5af078]" style={{ boxShadow: '0 0 4px #5af07888' }} />
        <span className="text-xs ml-2" style={{ color: '#8a78a8' }}>✦ terminal</span>
      </div>
      {/* コンテンツ */}
      <div
        className="px-5 py-4 font-mono text-sm min-h-[120px]"
        style={{ background: '#0c0518', lineHeight: '1.6' }}
      >
        {steps.slice(0, visible).map((step, i) => (
          <div
            key={i}
            className="fade-in"
            style={{
              marginBottom: '0.25rem',
              color: step.type === 'command'
                ? '#d4a0e8'
                : (step.color ?? '#f0a0c4'),
              lineHeight: '1.6',
            }}
          >
            {step.type === 'command' && (
              <span style={{ color: '#8a78a8', marginRight: '0.5rem' }}>$</span>
            )}
            {step.text}
          </div>
        ))}
        {visible < steps.length && steps[visible].type === 'command' && (
          <div style={{ color: '#d4a0e8', lineHeight: '1.6', marginBottom: '0.25rem' }}>
            <span style={{ color: '#8a78a8', marginRight: '0.5rem' }}>$</span>
            <span className="typing-line">{steps[visible].text}</span>
          </div>
        )}
      </div>
    </div>
  )
}
