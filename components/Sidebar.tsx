'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { NAV_STRUCTURE } from '@/lib/nav'

function NavContent({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname()
  return (
    <>
      {NAV_STRUCTURE.map(section => (
        <div key={section.title} className="mb-6">
          <p className="text-text-muted text-[10px] uppercase tracking-widest mb-2">
            {section.title}
          </p>
          {section.items.map(item => {
            const href = `/docs/${item.slug}`
            const isActive = pathname === href
            return (
              <Link
                key={item.slug}
                href={href}
                onClick={onClose}
                className={`flex items-center gap-2 px-2 py-1.5 rounded text-xs mb-0.5 transition-colors ${
                  isActive
                    ? 'bg-bg-hover text-accent-purple border-l-2 border-accent-purple pl-3'
                    : 'text-text-primary hover:text-accent-purple hover:bg-bg-hover'
                }`}
              >
                <span>{item.emoji}</span>
                <span>{item.label}</span>
              </Link>
            )
          })}
        </div>
      ))}
    </>
  )
}

export default function Sidebar() {
  const [open, setOpen] = useState(false)
  return (
    <>
      {/* デスクトップ */}
      <nav className="hidden md:block w-[220px] shrink-0 bg-bg-secondary border-r border-bg-border px-4 py-6 overflow-y-auto">
        <NavContent />
      </nav>
      {/* モバイル: ハンバーガーボタン */}
      <button
        className="md:hidden fixed bottom-4 right-4 z-50 bg-accent-purple text-white w-12 h-12 rounded-full text-xl shadow-lg"
        onClick={() => setOpen(true)}
        aria-label="メニューを開く"
      >
        ☰
      </button>
      {/* モバイル: オーバーレイ */}
      {open && (
        <div className="md:hidden fixed inset-0 z-40 flex">
          <div className="w-[260px] bg-bg-secondary border-r border-bg-border px-4 py-6 overflow-y-auto">
            <NavContent onClose={() => setOpen(false)} />
          </div>
          <div
            className="flex-1 bg-black/60"
            role="button"
            tabIndex={0}
            aria-label="メニューを閉じる"
            onClick={() => setOpen(false)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') setOpen(false) }}
          />
        </div>
      )}
    </>
  )
}
