import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '창업 스토리 | 사천편백림',
  description: '1970년대 황무지에 심은 첫 편백나무 한 그루. 40년의 시간이 지나 12만㎡의 치유숲이 되고, 아보리덤 브랜드로 이어진 사천편백림의 이야기.',
}

const storyItems = [
  {
    decade: '1970년대',
    title: '황무지에 심은 첫 번째 편백',
    desc: '경남 사천의 메마른 땅에 씨앗 하나를 심었습니다. 아무도 주목하지 않던 그 시절, 선친은 나무를 심는 것이 미래를 심는 것이라 믿었습니다. 한 그루, 두 그루, 세 그루 — 그렇게 12만㎡의 숲이 시작되었습니다.',
    side: 'left',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=1200',
    imageAlt: '묘목을 심는 손',
  },
  {
    decade: '1990~2000년대',
    title: '숲이 되어가는 시간',
    desc: '20년의 시간이 흘러 씨앗은 큰 나무가 되었습니다. 편백나무가 숲을 이루자 피톤치드 향기가 사천을 가득 채웠습니다. 지역 주민들이 찾아오기 시작했고, 숲은 치유의 공간이 되었습니다.',
    side: 'right',
    image: 'https://images.unsplash.com/photo-1476231682828-37e571bc172f?auto=format&fit=crop&q=80&w=1200',
    imageAlt: '울창하게 자란 편백 숲',
  },
  {
    decade: '2010년대',
    title: '숲의 가치를 담는 법',
    desc: '단순히 숲을 개방하는 것에서 한 걸음 더 나아갔습니다. 편백 심재에서 최고 품질의 피톤치드를 추출하는 특허 기술을 개발하여, 숲이 주는 치유를 제품에 담기 시작했습니다.',
    side: 'left',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=1200',
    imageAlt: '편백 심재오일 추출 특허 기술',
  },
  {
    decade: '현재',
    title: '나무에서 제품까지, 한 지붕 아래',
    desc: '씨앗에서 완제품까지. 사천편백림은 편백나무를 직접 심고, 기르고, 수확하고, 추출하고, 제품을 만들어 여러분께 전달합니다. 이 과정 어디에도 타협은 없습니다.',
    side: 'right',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&q=80&w=1200',
    imageAlt: '아보리덤 천연 스킨케어 제품',
  },
]

export default function StoryPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-80 md:h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=2000"
            alt="창업 스토리"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-forest-900/75" />
        </div>
        <div className="relative z-10 container-wide text-center pt-20">
          <p className="section-label">FOUNDING STORY</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">창업 스토리</h1>
          <p className="text-forest-200 mt-2 text-lg">한 알의 씨앗에서 12만㎡의 숲으로</p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-16 bg-forest-900">
        <div className="container-wide max-w-3xl mx-auto text-center">
          <p className="section-label">숲이 되기까지</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
            한 알의 씨앗에서<br />12만㎡의 숲으로
          </h2>
          <p className="text-forest-200 leading-relaxed">
            그리고 당신의 손 안으로.<br />
            1970년대 아무도 주목하지 않던 사천의 황무지에서 시작된 이야기입니다.
          </p>
        </div>
      </section>

      {/* ── STORY ITEMS ── */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="space-y-20">
            {storyItems.map((item) => (
              <div
                key={item.decade}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}
              >
                <div className={item.side === 'right' ? 'lg:order-2' : ''}>
                  <div className="h-72 rounded-2xl relative overflow-hidden shadow-lg">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-forest-900/25" />
                    <div className="absolute bottom-4 left-4 bg-forest-900/70 text-white text-sm px-3 py-1.5 rounded-lg backdrop-blur-sm">
                      {item.decade}
                    </div>
                  </div>
                </div>
                <div className={item.side === 'right' ? 'lg:order-1' : ''}>
                  <p className="text-xs uppercase tracking-widest text-forest-500 mb-2 font-semibold">{item.decade}</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-forest-900 mb-4">{item.title}</h3>
                  <p className="text-forest-700 leading-relaxed text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-forest-900 text-center">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-white mb-4">그 숲을 직접 걸어보세요</h2>
          <p className="text-forest-300 mb-8">이야기가 시작된 그 공간에서 자연의 치유를 경험하세요.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/forest" className="btn-primary">편백 치유숲 안내</Link>
            <Link href="/about" className="btn-outline-white">기업소개로 돌아가기</Link>
          </div>
        </div>
      </section>
    </>
  )
}
