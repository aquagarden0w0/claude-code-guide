import type { Metadata } from 'next'
import { M_PLUS_Rounded_1c } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import pkg from '../package.json'

const rounded = M_PLUS_Rounded_1c({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-rounded',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Claude Code Guide',
  description: '中高生向け Claude Code 入門ガイド',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={rounded.variable}>
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
