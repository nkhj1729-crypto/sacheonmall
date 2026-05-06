import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '특허기술 | 사천편백림',
  description: '국내 유일 편백 심재(心材) 오일 추출 특허기술. 잎보다 3~5배 높은 피톤치드 농도. 수증기 증류법 5단계 추출 프로세스.',
}

const processSteps = [
  {
    step: 1,
    title: '당일 벌목',
    desc: '신선도를 유지하기 위해 당일 벌목한 편백나무만 사용합니다.',
    icon: '🪓',
  },
  {
    step: 2,
    title: '심재 분리',
    desc: '나무 속 핵심 부위인 심재(心材)만을 정밀하게 분리합니다.',
    icon: '🌲',
  },
  {
    step: 3,
    title: '전통 방식 추출',
    desc: '수증기 증류법으로 심재의 피톤치드를 최대한 보존하며 추출합니다.',
    icon: '♨️',
  },
  {
    step: 4,
    title: '품질 검사',
    desc: '피톤치드 농도, 순도, 미생물 검사 등 엄격한 품질 기준을 통과해야 합니다.',
    icon: '🔍',
  },
  {
    step: 5,
    title: '제품 적용',
    desc: 'GMP 인증 크린룸·무균룸에서 최종 제품으로 완성됩니다.',
    icon: '✅',
  },
]

const compareItems = [
  {
    label: '원료 부위',
    general: '잎(葉)',
    ours: '심재(心材, Heartwood)',
    highlight: true,
  },
  {
    label: '피톤치드 농도',
    general: '낮음 (기준치)',
    ours: 'ULTRA A+ 등급 (3~5배)',
    highlight: true,
  },
  {
    label: '수확 난이도',
    general: '쉬움',
    ours: '고난도 (전문 기술 필요)',
    highlight: false,
  },
  {
    label: '특허 여부',
    general: '없음',
    ours: '특허 보유 (국내 유일)',
    highlight: true,
  },
  {
    label: '생산 단가',
    general: '저가',
    ours: '프리미엄',
    highlight: false,
  },
]

export default function PatentPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-80 md:h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-forest-950 via-forest-900 to-forest-800" />
          <div className="absolute top-10 right-20 w-60 h-60 rounded-full bg-gold/5 blur-3xl" />
          <div className="absolute bottom-8 left-16 w-40 h-40 rounded-full bg-forest-600/20 blur-2xl" />
        </div>
        <div className="relative z-10 container-wide text-center pt-20">
          <p className="section-label">PATENT TECHNOLOGY</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">특허기술</h1>
          <p className="text-forest-200 mt-2 text-lg">국내 유일 — 편백 심재오일 추출 기술</p>
        </div>
      </section>

      {/* ── PATENT INTRO ── */}
      <section className="section-padding bg-forest-900">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label">특허기술</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                잎이 아닌<br />심재(心材)에서<br />추출합니다
              </h2>
              <div className="space-y-4 text-forest-200 leading-relaxed">
                <p>
                  시중의 대부분의 편백 제품은 편백나무의 <strong className="text-white">잎(葉)</strong>에서
                  피톤치드를 추출합니다.<br />
                  잎은 수확하기 쉽고 생산 단가가 낮지만, 피톤치드 함량은 제한적입니다.
                </p>
                <p>
                  사천편백림은 다릅니다.<br />
                  우리는 나무의 가장 핵심 부위인 <strong className="text-white">심재(心材, Heartwood)</strong>에서
                  오일을 추출합니다.<br />
                  심재는 나무가 수십 년에 걸쳐 축적한 방어 물질의 집약체로,
                  잎보다 3~5배 이상 높은 피톤치드 농도를 자랑합니다.
                </p>
                <p>
                  이 기술을 상업적으로 구현한 것은 국내에서 사천편백림이 유일합니다.<br />
                  특허청으로부터 편백 심재오일 추출 기술에 대한 특허권을 취득하였으며,
                  이 기술이 아보리덤 제품 라인 전체의 핵심 기반입니다.
                </p>
              </div>

              {/* 특허 뱃지 */}
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { label: '국내 유일', icon: '🏆' },
                  { label: '특허 보유', icon: '📜' },
                  { label: 'ULTRA A+ 등급', icon: '⭐' },
                ].map((badge) => (
                  <div key={badge.label} className="flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold text-sm font-semibold px-4 py-2 rounded-full">
                    <span>{badge.icon}</span>
                    <span>{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-80 rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-forest-800 to-forest-900 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-8xl opacity-30">🔬</span>
                  <p className="text-forest-400 mt-4 text-sm">심재오일 추출 공정</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS FLOW ── */}
      <section className="py-16 bg-forest-800 border-y border-forest-700/50">
        <div className="container-wide">
          <div className="text-center mb-10">
            <p className="section-label">추출 프로세스</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">5단계 심재오일 추출</h2>
          </div>

          {/* 플로우 다이어그램 */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {processSteps.map((s, i) => (
              <div key={s.step} className="flex items-center gap-2">
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-forest-600/50 border border-forest-500/50 flex items-center justify-center mb-2 mx-auto">
                    <span className="text-white font-bold text-sm">{String(s.step).padStart(2, '0')}</span>
                  </div>
                  <p className="text-white text-xs font-semibold w-20 text-center">{s.title}</p>
                </div>
                {i < processSteps.length - 1 && (
                  <span className="text-forest-500 text-xl mb-6 mx-1">→</span>
                )}
              </div>
            ))}
          </div>

          {/* 단계별 상세 카드 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {processSteps.map((s) => (
              <div key={s.step} className="glass-card p-5 text-center">
                <div className="text-2xl mb-2">{s.icon}</div>
                <p className="text-gold text-xs font-bold uppercase tracking-wider mb-2">STEP {s.step}</p>
                <p className="text-white font-semibold text-sm mb-2">{s.title}</p>
                <p className="text-forest-300 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 비교표 ── */}
      <section className="section-padding bg-forest-900">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="section-label">비교 분석</p>
            <h2 className="text-3xl font-bold text-white mt-2">일반 편백 제품과의 차이</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* 헤더 */}
            <div className="grid grid-cols-3 gap-4 mb-3 text-center">
              <div />
              <div className="text-forest-400 text-sm font-semibold uppercase tracking-wider">일반 편백</div>
              <div className="text-gold text-sm font-semibold uppercase tracking-wider">사천편백림</div>
            </div>
            {/* 행 */}
            <div className="space-y-2">
              {compareItems.map((row) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-3 gap-4 items-center p-4 rounded-xl ${
                    row.highlight ? 'bg-forest-800/80 border border-forest-600/40' : 'bg-forest-800/30'
                  }`}
                >
                  <div className="text-forest-300 text-sm font-medium">{row.label}</div>
                  <div className="text-center text-forest-400 text-sm">{row.general}</div>
                  <div className={`text-center text-sm font-semibold ${row.highlight ? 'text-gold' : 'text-white'}`}>
                    {row.ours}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-forest-800 text-center">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-white mb-4">특허기술이 담긴 제품을 만나보세요</h2>
          <p className="text-forest-300 mb-8">심재오일 기반 아보리덤 라인으로 자연 치유를 경험하세요.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/products" className="btn-primary">제품 보러가기</Link>
            <Link href="/technology/certifications" className="btn-outline-white">인증 현황 보기</Link>
          </div>
        </div>
      </section>
    </>
  )
}
