import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getDocBySlug } from '@/lib/mdx'
import { getAllSlugs } from '@/lib/nav'
import Breadcrumb from '@/components/Breadcrumb'
import PrevNextNav from '@/components/PrevNextNav'
import TerminalDemo from '@/components/TerminalDemo'
import CodeBlock from '@/components/CodeBlock'

const components = { TerminalDemo, CodeBlock }

type Props = { params: Promise<{ slug: string[] }> }

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>
}): Promise<Metadata> {
  const { slug: slugParts } = await params
  const slug = slugParts.join('/')
  try {
    const doc = await getDocBySlug(slug)
    return {
      title: `${doc.title} | Claude Code Guide`,
      description: doc.description,
    }
  } catch {
    return { title: 'Claude Code Guide' }
  }
}

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({
    slug: slug.split('/'),
  }))
}

export default async function DocPage({ params }: Props) {
  const { slug: slugParts } = await params
  const slug = slugParts.join('/')
  try {
    const doc = await getDocBySlug(slug)
    return (
      <article className="max-w-3xl mx-auto px-8 py-10">
        <Breadcrumb slug={slug} />
        <h1 className="text-2xl font-bold text-white mb-1">{doc.title}</h1>
        <p className="text-text-muted text-sm mb-8">{doc.description}</p>
        <div className="prose">
          <MDXRemote source={doc.content} components={components} options={{ blockJS: false }} />
        </div>
        <PrevNextNav slug={slug} />
      </article>
    )
  } catch {
    notFound()
  }
}
