import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: '기업소개 | 사천편백림',
  description: '1979년부터 시작된 사천편백림의 46년 역사. 편백 치유숲을 직접 조성하고, 심재오일 특허기술로 자연의 치유를 전달합니다.',
}

const timelineItems = [
  {
    year: '1979',
    title: '편백림 조성 시작',
    desc: '선친 박상호 창업주가 경남 사천 황무지에 첫 편백 씨앗을 심기 시작. 12만㎡ 규모의 편백 치유숲 조성의 첫 걸음.',
  },
  {
    year: '1990s',
    title: '편백림 성장기',
    desc: '20년에 걸쳐 자란 편백나무들이 본격적인 숲을 이루기 시작. 지역 주민과 방문객을 위한 무료 개방 시작.',
  },
  {
    year: '2010s',
    title: '심재오일 특허 취득',
    desc: '국내 유일 편백 심재(心材) 오일 추출 특허 취득. 기존 잎사귀 추출 방식을 넘어선 새로운 피톤치드 기술 개발.',
  },
  {
    year: '2015',
    title: '농림부 6차산업 인증',
    desc: '농림축산식품부로부터 6차산업 인증 획득. 1차(생산) + 2차(제조) + 3차(체험/판매)를 아우르는 종합 사업 체계 구축.',
  },
  {
    year: '2018',
    title: 'GMP 인증 취득',
    desc: 'Good Manufacturing Practice 인증 취득. 크린룸·무균룸 시설 완비로 의약품 수준의 제조 환경 확보.',
  },
  {
    year: '2020',
    title: '아보리덤 브랜드 론칭',
    desc: '편백 심재오일 기반 프리미엄 뷰티 브랜드 아보리덤(ABORYDERM) 공식 출시. 탈모 케어 샴푸를 시작으로 라인업 확장.',
  },
  {
    year: '2026',
    title: '공식 웹사이트 오픈',
    desc: '사천편백림 공식 웹사이트 및 온라인 채널 전면 개편. 더 많은 고객에게 자연 치유의 가치를 전달.',
  },
]

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

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-80 md:h-96 flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=2000"
            alt="기업소개"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-forest-900/75" />
        </div>
        <div className="relative z-10 container-wide pb-12">
          <p className="section-label">ABOUT US</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">기업소개</h1>
          <p className="text-forest-200 mt-2 text-lg">자연에서 시작된 46년의 이야기</p>
        </div>
      </section>

      {/* ── CEO MESSAGE ── */}
      <section className="section-padding bg-forest-900">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label">대표 메시지</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                아버지의 숲을 이어,<br />
                더 많은 사람에게<br />
                자연의 치유를 전합니다.
              </h2>
              <div className="space-y-4 text-forest-200 leading-relaxed">
                <p>
                  어릴 적, 아버지 손을 잡고 숲을 걸을 때면 온 몸이 개운해지는 느낌을 받았습니다.
                  그때는 몰랐지만, 그것이 피톤치드의 힘이었습니다.
                </p>
                <p>
                  아버지가 1979년에 심은 편백나무들은 이제 12만㎡의 울창한 숲이 되었습니다.
                  그 숲을 이어받아 저는 한 가지 질문을 했습니다.
                  &ldquo;이 자연의 힘을 더 많은 사람들이 누릴 수 있으면 어떨까?&rdquo;
                </p>
                <p>
                  그 질문의 답이 바로 사천편백림의 제품입니다. 숲에 오지 못하는 분들도,
                  도시에 사는 분들도, 매일의 삶에서 편백의 치유를 경험할 수 있도록.
                </p>
                <p>
                  우리는 원료를 사지 않습니다. 우리가 직접 키운 나무에서 원료를 얻고,
                  그 원료로 제품을 만듭니다. 이 단순하지만 지켜내기 어려운 원칙이
                  사천편백림의 가장 큰 강점이라고 믿습니다.
                </p>
                <p>
                  자연이 주는 치유를 가장 정직하게 전달하겠습니다.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-forest-700">
                <p className="text-white font-bold text-lg">박상호</p>
                <p className="text-forest-400 text-sm">사천편백림 대표이사</p>
              </div>
            </div>

            {/* CEO Photo placeholder */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-80 h-96 rounded-2xl bg-forest-800/60 border border-forest-600/30 flex flex-col items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-forest-600/40 flex items-center justify-center mb-4">
                  <svg className="w-12 h-12 text-forest-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <p className="text-forest-400 text-sm">대표이사 박상호</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDING STORY ── */}
      <section id="story" className="section-padding bg-cream">
        <div className="container-wide">
          <SectionHeader
            label="창업 스토리"
            title="숲이 되기까지"
            subtitle="한 알의 씨앗에서 12만㎡의 숲으로. 그리고 당신의 손 안으로."
            light
          />

          <div className="space-y-16">
            {storyItems.map((item, i) => (
              <div
                key={item.decade}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  item.side === 'right' ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={item.side === 'right' ? 'lg:order-2' : ''}>
                  <div className="h-64 rounded-2xl relative overflow-hidden shadow-lg">
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
                  <p className="text-xs uppercase tracking-widest text-forest-500 mb-2">{item.decade}</p>
                  <h3 className="text-2xl font-bold text-forest-900 mb-4">{item.title}</h3>
                  <p className="text-forest-700 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="section-padding bg-forest-900">
        <div className="container-wide">
          <SectionHeader
            label="연혁"
            title="사천편백림의 발자취"
          />

          <div className="relative max-w-3xl mx-auto">
            {/* vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-forest-700 md:-translate-x-0.5" />

            <div className="space-y-8">
              {timelineItems.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    i % 2 === 0
                      ? 'md:flex-row'
                      : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-forest-500 border-2 border-forest-700 -translate-x-1.5 mt-1.5 z-10" />

                  {/* Content */}
                  <div
                    className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                      i % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left md:ml-[calc(50%+2rem)]'
                    }`}
                  >
                    <span className="inline-block text-gold font-bold text-sm mb-1">{item.year}</span>
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-forest-300 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION / VISION ── */}
      <section className="section-padding bg-forest-50">
        <div className="container-wide">
          <SectionHeader
            label="미션과 비전"
            title="우리가 존재하는 이유"
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-light p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-forest-100 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-bold text-forest-900 mb-2 uppercase tracking-wide">미션</h3>
              <p className="text-forest-700 leading-relaxed font-medium">
                자연이 주는 치유를 가장 정직하게 전달한다.
              </p>
            </div>
            <div className="card-light p-8 text-center border-2 border-forest-300">
              <div className="w-16 h-16 rounded-full bg-forest-200 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-lg font-bold text-forest-900 mb-2 uppercase tracking-wide">비전</h3>
              <p className="text-forest-700 leading-relaxed font-medium">
                편백 심재오일 기반 건강·뷰티 분야의 선도 기업
              </p>
            </div>
            <div className="card-light p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-forest-100 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💚</span>
              </div>
              <h3 className="text-lg font-bold text-forest-900 mb-2 uppercase tracking-wide">핵심가치</h3>
              <p className="text-forest-700 leading-relaxed font-medium">
                정직한 원료 · 검증된 기술 · 지속 가능한 자연
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-forest-900 text-center">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-white mb-4">사천편백림의 숲을 경험하세요</h2>
          <p className="text-forest-300 mb-8">직접 방문하거나 제품으로 자연의 치유를 만나보세요.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/forest" className="btn-primary">편백 치유숲 안내</Link>
            <Link href="/products" className="btn-outline-white">제품 보기</Link>
          </div>
        </div>
      </section>
    </>
  )
}
