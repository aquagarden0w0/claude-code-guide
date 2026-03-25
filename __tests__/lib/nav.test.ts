import { NAV_STRUCTURE, getNavItem, getPrevNext, getAllSlugs } from '@/lib/nav'

describe('NAV_STRUCTURE', () => {
  it('4つのセクションが存在する', () => {
    expect(NAV_STRUCTURE).toHaveLength(4)
  })

  it('合計13ページが存在する', () => {
    const total = NAV_STRUCTURE.flatMap(s => s.items).length
    expect(total).toBe(13)
  })
})

describe('getNavItem', () => {
  it('slug から NavItem を返す', () => {
    const item = getNavItem('getting-started/what-is-claude-code')
    expect(item).not.toBeNull()
    expect(item?.label).toBe('Claude Codeとは？')
  })

  it('存在しない slug で null を返す', () => {
    expect(getNavItem('nonexistent/page')).toBeNull()
  })
})

describe('getPrevNext', () => {
  it('最初のページの prev は null', () => {
    const { prev } = getPrevNext('getting-started/what-is-claude-code')
    expect(prev).toBeNull()
  })

  it('最後のページの next は null', () => {
    const { next } = getPrevNext('advanced/links')
    expect(next).toBeNull()
  })

  it('中間ページは prev と next を持つ', () => {
    const { prev, next } = getPrevNext('getting-started/installation')
    expect(prev).not.toBeNull()
    expect(next).not.toBeNull()
  })
})

describe('getAllSlugs', () => {
  it('13個の slug を返す', () => {
    expect(getAllSlugs()).toHaveLength(13)
  })
})
