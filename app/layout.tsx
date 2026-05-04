import type { Metadata } from 'next'
import '../styles/globals.css'
import ConditionalLayout from '@/components/layout/ConditionalLayout'

export const metadata: Metadata = {
  title: '사천편백림 | 편백 치유의 숲',
  description: '1979년부터 직접 심고 가꾼 12만㎡의 편백 치유의 숲. 국내 유일 편백 심재오일 특허 기술로 만든 아보리덤 브랜드. 두피, 피부, 구강 건강을 자연으로 케어합니다.',
  keywords: '사천편백림, 편백나무, 피톤치드, 편백오일, 심재오일, 아보리덤, 탈모샴푸, 편백방향제, 편백치약, 자연치유',
  openGraph: {
    title: '사천편백림 | 편백 치유의 숲',
    description: '1979년부터 직접 심고 가꾼 12만㎡의 편백 치유의 숲. 국내 유일 편백 심재오일 특허 기술.',
    type: 'website',
    locale: 'ko_KR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="font-pretendard antialiased">
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  )
}
