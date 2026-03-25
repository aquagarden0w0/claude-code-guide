type Props = { version: string }

export default function Header({ version }: Props) {
  return (
    <header className="sticky top-0 z-50 bg-bg-card border-b border-bg-border px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="text-base leading-none">✨</span>
        <span
          className="font-bold text-sm"
          style={{
            background: 'linear-gradient(120deg, #e08ef5 0%, #f48fb1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Claude Code Guide
        </span>
        <span className="text-text-muted text-xs">for 中高生 🌸</span>
      </div>
      <div className="flex items-center gap-4 text-xs">
        <a
          href="https://github.com/anthropics/claude-code"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-muted hover:text-accent-pink transition-colors"
        >
          GitHub
        </a>
        <span className="text-accent-purple">v{version}</span>
      </div>
    </header>
  )
}
