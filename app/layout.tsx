import type { Metadata } from 'next'
import Script from 'next/script'  // ✅ 新增這行
import './globals.css'

export const metadata: Metadata = {
  title: 'PUYOUNG SCIENCE — AI / IoT Solutions',
  description: '以 AI / IoT 驅動的企業級數位方案',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <head>
        {/* ✅ Google Analytics 追蹤代碼 */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TNC7ZMXHOT"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TNC7ZMXHOT');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
