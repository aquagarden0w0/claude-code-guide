import Link from 'next/link'
import { getPrevNext } from '@/lib/nav'

type Props = { slug: string }

export default function PrevNextNav({ slug }: Props) {
  const { prev, next } = getPrevNext(slug)

  return (
    <div className="flex justify-between mt-10 pt-6 border-t border-bg-border">
      {prev ? (
        <Link
          href={`/docs/${prev.slug}`}
          className="text-xs text-text-muted hover:text-accent-purple transition-colors"
        >
          ← {prev.label}
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={`/docs/${next.slug}`}
          className="text-xs text-accent-purple hover:text-accent-pink transition-colors"
        >
          {next.label} →
        </Link>
      ) : (
        <span />
      )}
    </div>
  )
}
