import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'content', 'docs')

export type DocMeta = {
  title: string
  description: string
  slug: string
}

export type Doc = DocMeta & {
  content: string
}

export async function getDocBySlug(slug: string): Promise<Doc> {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) {
    throw new Error(`Doc not found: ${slug}`)
  }
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  return {
    title: data.title ?? '',
    description: data.description ?? '',
    slug,
    content,
  }
}

export async function getAllDocs(): Promise<DocMeta[]> {
  if (!fs.existsSync(CONTENT_DIR)) return []
  const results: DocMeta[] = []
  function walk(dir: string, prefix: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name)
      const rel = prefix ? `${prefix}/${entry.name}` : entry.name
      if (entry.isDirectory()) {
        walk(full, rel)
      } else if (entry.name.endsWith('.mdx')) {
        const slug = rel.replace(/\.mdx$/, '')
        const raw = fs.readFileSync(full, 'utf8')
        const { data } = matter(raw)
        results.push({ title: data.title ?? '', description: data.description ?? '', slug })
      }
    }
  }
  walk(CONTENT_DIR, '')
  return results
}
