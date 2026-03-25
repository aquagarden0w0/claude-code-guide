import Link from 'next/link'
import TerminalDemo from '@/components/TerminalDemo'
import { Button } from '@/components/ui/button'

const HERO_STEPS = [
  { type: 'command' as const, text: 'claude "hello.py を作って"' },
  { type: 'response' as const, text: '✓ ファイルを作成しました: hello.py', color: 'var(--color-accent-purple)' },
  { type: 'command' as const, text: 'claude "このコードにコメントを追加して"' },
  { type: 'response' as const, text: '✓ 3行のコメントを追加しました', color: 'var(--color-accent-pink)' },
]

const FEATURES = [
  {
    icon: '🤖',
    title: 'AIと一緒にコードを書ける',
    desc: '日本語で話しかけるだけでコードの生成・修正・説明をしてくれる',
  },
  {
    icon: '⚡',
    title: 'Skillsで自動化',
    desc: '/commit や /review など、よく使う作業を1コマンドで自動実行',
  },
  {
    icon: '🌏',
    title: '日本語で操作できる',
    desc: '英語が苦手でも大丈夫。普通の日本語で指示するだけでOK',
  },
]

export default function HomePage() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-16">
      {/* ヒーロー */}
      <div className="mb-4">
        <span className="text-xs bg-bg-hover text-accent-purple px-3 py-1 rounded-full border border-bg-border">
          中高生向け完全ガイド
        </span>
      </div>
      <h1 className="text-4xl font-black text-white leading-tight mb-4">
        Claude Codeで<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-pink">
          AIとペアプロ
        </span>
        しよう
      </h1>
      <p className="text-text-secondary text-lg mb-8">
        インストールからSkillsの自作まで、すべてわかる入門ガイド
      </p>

      <TerminalDemo steps={HERO_STEPS} />

      <div className="flex gap-4 mb-16">
        <Button asChild className="bg-accent-purple hover:bg-accent-purple-dim text-white">
          <Link href="/docs/getting-started/installation">
            まずはインストールしよう →
          </Link>
        </Button>
        <Button asChild variant="outline" className="border-bg-border text-text-secondary">
          <Link href="/docs/skills/what-are-skills">
            Skillsを見る
          </Link>
        </Button>
      </div>

      {/* 特徴カード */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {FEATURES.map(f => (
          <div key={f.title} className="bg-bg-card border border-bg-border rounded-xl p-5">
            <div className="text-2xl mb-3">{f.icon}</div>
            <h3 className="font-bold text-white text-sm mb-2">{f.title}</h3>
            <p className="text-text-muted text-xs leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
