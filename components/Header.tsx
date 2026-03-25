type Props = { version: string }

export default function Header({ version }: Props) {
  return (
    <header className="sticky top-0 z-50 bg-bg-card border-b border-bg-border px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-accent-purple shadow-[0_0_8px_#ce93d8]" />
        <span className="font-bold text-white text-sm">Claude Code Guide</span>
        <span className="text-text-muted text-xs">for 中高生</span>
      </div>
      <div className="flex items-center gap-4 text-xs">
        <a
          href="https://github.com/anthropics/claude-code"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-muted hover:text-accent-purple transition-colors"
        >
          GitHub
        </a>
        <span className="text-accent-purple">v{version}</span>
      </div>
    </header>
  )
}
