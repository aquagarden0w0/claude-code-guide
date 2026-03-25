import { getDocBySlug, getAllDocs } from '@/lib/mdx'

describe('getDocBySlug', () => {
  it('存在しない slug でエラーを投げる', async () => {
    await expect(getDocBySlug('nonexistent/page')).rejects.toThrow()
  })
})

describe('getAllDocs', () => {
  it('配列を返す（空でもよい）', async () => {
    const docs = await getAllDocs()
    expect(Array.isArray(docs)).toBe(true)
  })
})
