import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '연혁 | 사천편백림',
  description: '1979년 편백나무 한 그루에서 시작된 사천편백림의 46년 발자취. 심재오일 특허, GMP 인증, 아보리덤 브랜드 론칭까지.',
}

const timelineItems = [
  {
    year: '1979',
    title: '편백림 조성 시작',
    desc: '선친 박상호 창업주가 경남 사천 황무지에 첫 편백 씨앗을 심기 시작.\n12만㎡ 규모의 편백 치유숲 조성의 첫 걸음.',
    icon: '🌱',
    highlight: false,
  },
  {
    year: '1990s',
    title: '편백림 성장기',
    desc: '20년에 걸쳐 자란 편백나무들이 본격적인 숲을 이루기 시작.\n지역 주민과 방문객을 위한 무료 개방 시작.',
    icon: '🌲',
    highlight: false,
  },
  {
    year: '2010s',
    title: '심재오일 특허 취득',
    desc: '국내 유일 편백 심재(心材) 오일 추출 특허 취득.\n기존 잎사귀 추출 방식을 넘어선 새로운 피톤치드 기술 개발.',
    icon: '🔬',
    highlight: true,
  },
  {
    year: '2015',
    title: '농림부 6차산업 인증',
    desc: '농림축산식품부로부터 6차산업 인증 획득.\n1차(생산) + 2차(제조) + 3차(체험/판매)를 아우르는 종합 사업 체계 구축.',
    icon: '🌾',
    highlight: false,
  },
  {
    year: '2018',
    title: 'GMP 인증 취득',
    desc: 'Good Manufacturing Practice 인증 취득.\n크린룸·무균룸 시설 완비로 의약품 수준의 제조 환경 확보.',
    icon: '🏭',
    highlight: true,
  },
  {
    year: '2020',
    title: '아보리덤 브랜드 론칭',
    desc: '편백 심재오일 기반 프리미엄 뷰티 브랜드 아보리덤(ABORYDERM) 공식 출시.\n탈모 케어 샴푸를 시작으로 라인업 확장.',
    icon: '✨',
    highlight: true,
  },
  {
    year: '2026',
    title: '공식 웹사이트 오픈',
    desc: '사천편백림 공식 웹사이트 및 온라인 채널 전면 개편.\n더 많은 고객에게 자연 치유의 가치를 전달.',
    icon: '🌐',
    highlight: false,
  },
]

const milestones = [
  { num: '46+', label: '년 역사', desc: '1979년부터 이어온 편백 재배' },
  { num: '12만', label: '㎡ 숲', desc: '직접 조성한 편백 치유숲 규모' },
  { num: '1', label: '특허 보유', desc: '국내 유일 심재오일 추출 기술' },
  { num: '4+', label: '인증 획득', desc: 'GMP · 6차산업 · 편백 특허 등' },
]

export default function HistoryPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-80 md:h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-forest-950 via-forest-900 to-forest-800" />
          {/* 장식 원형 */}
          <div className="absolute top-12 right-20 w-48 h-48 rounded-full bg-forest-700/20 blur-3xl" />
          <div className="absolute bottom-8 left-16 w-32 h-32 rounded-full bg-sage/10 blur-2xl" />
        </div>
        <div className="relative z-10 container-wide text-center pt-20">
          <p className="section-label">HISTORY</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">연혁</h1>
          <p className="text-forest-200 mt-2 text-lg">1979년 한 알의 씨앗에서 시작된 46년의 발자취</p>
        </div>
      </section>

      {/* ── MILESTONES ── */}
      <section className="py-12 bg-forest-800 border-b border-forest-700/50">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {milestones.map((m) => (
              <div key={m.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold mb-1">
                  {m.num}
                </div>
                <div className="text-white font-semibold text-sm mb-1">{m.label}</div>
                <div className="text-forest-400 text-xs">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="section-padding bg-forest-900">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="section-label">TIMELINE</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">사천편백림의 발자취</h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* 세로 선 */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-forest-600 via-forest-500 to-forest-700 md:-translate-x-0.5" />

            <div className="space-y-12">
              {timelineItems.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* 도트 */}
                  <div className={`absolute left-8 md:left-1/2 w-5 h-5 rounded-full border-2 -translate-x-2 mt-1 z-10 flex items-center justify-center ${
                    item.highlight
                      ? 'bg-gold border-gold/50 shadow-lg shadow-gold/30'
                      : 'bg-forest-500 border-forest-400'
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${item.highlight ? 'bg-forest-900' : 'bg-white'}`} />
                  </div>

                  {/* 카드 */}
                  <div
                    className={`ml-16 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                      i % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10 md:text-left md:ml-[calc(50%+2.5rem)]'
                    }`}
                  >
                    <div className={`p-5 rounded-xl border transition-all duration-200 ${
                      item.highlight
                        ? 'bg-forest-800/80 border-gold/30 shadow-lg shadow-gold/5'
                        : 'bg-forest-800/40 border-forest-700/50'
                    }`}>
                      <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                        <span className="text-lg">{item.icon}</span>
                        <span className={`font-bold text-sm ${item.highlight ? 'text-gold' : 'text-forest-400'}`}>
                          {item.year}
                        </span>
                        {item.highlight && (
                          <span className="text-xs bg-gold/20 text-gold px-2 py-0.5 rounded-full border border-gold/30">
                            주요 성과
                          </span>
                        )}
                      </div>
                      <h4 className="text-white font-semibold text-base mb-2">{item.title}</h4>
                      <p className="text-forest-300 text-sm leading-relaxed whitespace-pre-line">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FUTURE ── */}
      <section className="section-padding bg-forest-800">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center">
            <p className="section-label">NEXT CHAPTER</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
              다음 발자취를 향해
            </h2>
            <p className="text-forest-200 leading-relaxed mb-4">
              46년의 역사가 증명하듯, 사천편백림은 멈추지 않습니다.<br />
              심재오일 기반 의료기기 등급 제품 임상 연구를 비롯하여<br />
              더 넓은 분야에서 편백 자연 치유의 가능성을 열어갑니다.
            </p>
            <p className="text-forest-400 text-sm mb-12">
              2026년 이후에도 계속될 새로운 이야기를 기대해 주세요.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/technology" className="btn-primary">기술력/인증 보기</Link>
              <Link href="/about" className="btn-outline-white">기업소개로 돌아가기</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
