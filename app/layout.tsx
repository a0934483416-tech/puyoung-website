import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PUYOUNG SCIENCE — AI / IoT Solutions',
  description: '以 AI / IoT 驅動的企業級數位方案',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  )
}
