import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import pkg from '../package.json'

export const metadata: Metadata = {
  title: 'Claude Code Guide',
  description: '中高生向け Claude Code 入門ガイド',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-bg-primary text-text-primary min-h-screen">
        <Header version={pkg.version} />
        <div className="flex min-h-[calc(100vh-49px)]">
          <Sidebar />
          <main className="flex-1 overflow-x-hidden">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
