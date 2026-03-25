export type NavItem = {
  label: string
  slug: string
  emoji: string
}

export type NavSection = {
  title: string
  items: NavItem[]
}

export const NAV_STRUCTURE: NavSection[] = [
  {
    title: 'はじめに',
    items: [
      { emoji: '📖', label: 'Claude Codeとは？',   slug: 'getting-started/what-is-claude-code' },
      { emoji: '⚙️', label: 'インストール方法',      slug: 'getting-started/installation' },
      { emoji: '🚀', label: '最初の一歩',            slug: 'getting-started/first-steps' },
    ],
  },
  {
    title: '基本の使い方',
    items: [
      { emoji: '💬', label: 'AIへの話しかけ方',      slug: 'basic-usage/how-to-talk' },
      { emoji: '📁', label: 'ファイルを操作する',     slug: 'basic-usage/file-operations' },
      { emoji: '🐛', label: 'バグを直してもらう',     slug: 'basic-usage/fixing-bugs' },
      { emoji: '📝', label: 'よく使うコマンド集',     slug: 'basic-usage/commands-reference' },
    ],
  },
  {
    title: 'Skills',
    items: [
      { emoji: '✨', label: 'Skillsとは？',          slug: 'skills/what-are-skills' },
      { emoji: '📦', label: 'Skillsのインストール',   slug: 'skills/installing-skills' },
      { emoji: '🛠️', label: 'Skillsを自分で作る',    slug: 'skills/creating-skills' },
    ],
  },
  {
    title: 'Plugins',
    items: [
      { emoji: '🧩', label: 'Pluginsとは？',          slug: 'plugins/what-are-plugins' },
      { emoji: '📦', label: 'Pluginsのインストール',   slug: 'plugins/installing-plugins' },
      { emoji: '🛠️', label: 'Pluginsを自分で作る',    slug: 'plugins/creating-plugins' },
    ],
  },
  {
    title: 'もっと深く',
    items: [
      { emoji: '⚡', label: 'Tips & テクニック',           slug: 'advanced/tips-and-tricks' },
      { emoji: '📋', label: 'CLAUDE.md の使い方',          slug: 'advanced/claude-md' },
      { emoji: '⭐', label: 'おすすめプラグイン・スキル集', slug: 'advanced/recommended' },
      { emoji: '❓', label: 'よくある質問',                slug: 'advanced/faq' },
      { emoji: '🔗', label: 'おすすめリンク集',            slug: 'advanced/links' },
    ],
  },
]

const ALL_ITEMS: NavItem[] = NAV_STRUCTURE.flatMap(s => s.items)

export function getNavItem(slug: string): NavItem | null {
  return ALL_ITEMS.find(item => item.slug === slug) ?? null
}

export function getPrevNext(slug: string): { prev: NavItem | null; next: NavItem | null } {
  const index = ALL_ITEMS.findIndex(item => item.slug === slug)
  if (index === -1) return { prev: null, next: null }
  return {
    prev: index > 0 ? ALL_ITEMS[index - 1] : null,
    next: index < ALL_ITEMS.length - 1 ? ALL_ITEMS[index + 1] : null,
  }
}

export function getAllSlugs(): string[] {
  return ALL_ITEMS.map(item => item.slug)
}
