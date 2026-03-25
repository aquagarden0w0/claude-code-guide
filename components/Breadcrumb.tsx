import { NAV_STRUCTURE } from '@/lib/nav'

type Props = { slug: string }

export default function Breadcrumb({ slug }: Props) {
  const section = NAV_STRUCTURE.find(s => s.items.some(i => i.slug === slug))
  const item = section?.items.find(i => i.slug === slug)
  if (!section || !item) return null

  return (
    <nav className="text-xs text-text-muted mb-4">
      <span>{section.title}</span>
      <span className="mx-2 text-accent-border-active">›</span>
      <span className="text-text-secondary">{item.label}</span>
    </nav>
  )
}
