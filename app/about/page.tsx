import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: '기업소개 | 사천편백림',
  description: '1979년부터 시작된 사천편백림의 46년 역사. 편백 치유숲을 직접 조성하고, 심재오일 특허기술로 자연의 치유를 전달합니다.',
}

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
                  어릴 적, 아버지 손을 잡고 숲을 걸을 때면 온 몸이 개운해지는 느낌을 받았습니다.<br />
                  그때는 몰랐지만, 그것이 피톤치드의 힘이었습니다.
                </p>
                <p>
                  아버지가 1979년에 심은 편백나무들은 이제 12만㎡의 울창한 숲이 되었습니다.<br />
                  그 숲을 이어받아 저는 한 가지 질문을 했습니다.<br />
                  &ldquo;이 자연의 힘을 더 많은 사람들이 누릴 수 있으면 어떨까?&rdquo;
                </p>
                <p>
                  그 질문의 답이 바로 사천편백림의 제품입니다.<br />
                  숲에 오지 못하는 분들도, 도시에 사는 분들도, 매일의 삶에서 편백의 치유를 경험할 수 있도록.
                </p>
                <p>
                  우리는 원료를 사지 않습니다.<br />
                  우리가 직접 키운 나무에서 원료를 얻고, 그 원료로 제품을 만듭니다.<br />
                  이 단순하지만 지켜내기 어려운 원칙이 사천편백림의 가장 큰 강점이라고 믿습니다.
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

            {/* CEO Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-80 h-96 rounded-2xl overflow-hidden shadow-2xl shadow-forest-950/50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://img.hankyung.com/photo/202212/AA.32115355.1.jpg"
                  alt="박상호 사천편백림 대표이사"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white font-bold text-base">박상호</p>
                  <p className="text-forest-300 text-xs mt-0.5">사천편백림 대표이사</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STORY LINK ── */}
      <section className="py-16 bg-cream border-y border-forest-100">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-3xl mx-auto">
            <div>
              <p className="text-forest-500 text-xs uppercase tracking-widest font-semibold mb-2">창업 스토리</p>
              <h2 className="text-2xl md:text-3xl font-bold text-forest-900 mb-2">
                한 알의 씨앗에서 12만㎡의 숲으로
              </h2>
              <p className="text-forest-600 text-sm leading-relaxed">
                1970년대 황무지에서 시작된 이야기.<br />
                씨앗이 숲이 되고, 숲이 제품이 되기까지의 여정을 담았습니다.
              </p>
            </div>
            <Link
              href="/about/story"
              className="flex-shrink-0 flex items-center gap-2 bg-forest-700 hover:bg-forest-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-forest-700/30 group"
            >
              스토리 보기
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l4.5 4.75a.75.75 0 010 1.08l-4.5 4.75a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── HISTORY LINK ── */}
      <section className="py-16 bg-forest-900 border-y border-forest-700/50">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-3xl mx-auto">
            <div>
              <p className="section-label">연혁</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                1979년부터 이어온 46년의 발자취
              </h2>
              <p className="text-forest-300 text-sm leading-relaxed">
                편백나무 한 그루에서 시작하여 심재오일 특허, GMP 인증,<br />
                아보리덤 브랜드 론칭까지 — 사천편백림의 모든 역사를 확인하세요.
              </p>
            </div>
            <Link
              href="/about/history"
              className="flex-shrink-0 flex items-center gap-2 bg-forest-700 hover:bg-forest-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-forest-700/30 group"
            >
              연혁 보기
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l4.5 4.75a.75.75 0 010 1.08l-4.5 4.75a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </Link>
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
