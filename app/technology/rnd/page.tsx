import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '연구개발 | 사천편백림',
  description: '편백 심재오일의 효능을 지속적으로 연구합니다. 두피·모발 케어, 피부 장벽 강화, 구강 항균, 실내 공기 정화 등 다양한 분야에서 임상 연구 진행 중.',
}

const researchAreas = [
  {
    icon: '💆',
    title: '두피·모발 케어',
    status: '완료',
    statusColor: 'bg-forest-500 text-white',
    desc: '편백 심재오일의 두피 항균·항염 효과 및 모발 윤기 개선 연구. 아보리덤 샴푸 라인의 임상 기반 데이터 확보 완료.',
  },
  {
    icon: '🛡️',
    title: '피부 장벽 강화',
    status: '진행중',
    statusColor: 'bg-gold/20 text-gold border border-gold/30',
    desc: '심재오일의 피부 보습 지속력 및 장벽 회복 효과 연구. 외부 연구기관과 공동 임상 데이터 수집 진행 중.',
  },
  {
    icon: '🦷',
    title: '구강 내 유해균 억제',
    status: '진행중',
    statusColor: 'bg-gold/20 text-gold border border-gold/30',
    desc: '편백 심재 추출물의 구강 세균(S. mutans 등) 억제 효과 연구. 아보리덤 치약 라인 효능 데이터 고도화.',
  },
  {
    icon: '🌬️',
    title: '실내 공기 정화',
    status: '진행중',
    statusColor: 'bg-gold/20 text-gold border border-gold/30',
    desc: '피톤치드 방출량과 실내 공기질 개선 효과의 상관관계 연구. 가정용 방향제·디퓨저 제품 라인 효능 근거 마련.',
  },
  {
    icon: '💊',
    title: '의료기기 등급 제품',
    status: '예정',
    statusColor: 'bg-forest-700 text-forest-300',
    desc: '2026년 하반기 의료기기 등급 제품 라인 임상 연구 착수 예정. 피부 질환 보조 제품 개발을 목표로 연구기관 협의 진행 중.',
  },
  {
    icon: '🧫',
    title: '항균·항염 활성 물질',
    status: '예정',
    statusColor: 'bg-forest-700 text-forest-300',
    desc: '심재오일 주요 성분(α-pinene, terpinen-4-ol 등)의 항균·항염 메커니즘 규명 연구. 기능성 화장품 원료 등재 추진.',
  },
]

const partners = [
  { name: '한국산림과학원', type: '연구 협력' },
  { name: '경남과학기술대학교', type: '임상 연구' },
  { name: '식품의약품안전처', type: '인증 기관' },
  { name: '특허청', type: '특허 출원' },
]

const stats = [
  { num: '1', label: '보유 특허', sub: '심재오일 추출 기술' },
  { num: '3+', label: '진행 임상', sub: '연구기관 공동 연구' },
  { num: '2026', label: '의료기기 목표', sub: '등급 제품 임상 착수' },
  { num: '4+', label: '연구 분야', sub: '두피·피부·구강·공기' },
]

export default function RndPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-80 md:h-96 flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-forest-950 via-forest-900 to-forest-800" />
          <div className="absolute top-10 right-20 w-60 h-60 rounded-full bg-forest-700/15 blur-3xl" />
          <div className="absolute bottom-8 left-16 w-40 h-40 rounded-full bg-sage/10 blur-2xl" />
        </div>
        <div className="relative z-10 container-wide pb-12">
          <p className="section-label">RESEARCH & DEVELOPMENT</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">연구개발</h1>
          <p className="text-forest-200 mt-2 text-lg">멈추지 않는 연구, 더 넓어지는 치유</p>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-12 bg-forest-800 border-b border-forest-700/50">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold mb-1">{s.num}</div>
                <div className="text-white font-semibold text-sm mb-0.5">{s.label}</div>
                <div className="text-forest-400 text-xs">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── R&D INTRO ── */}
      <section className="section-padding bg-forest-900">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-80 rounded-2xl overflow-hidden order-2 lg:order-1">
              <div className="w-full h-full bg-gradient-to-br from-forest-800 to-forest-900 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-8xl opacity-20">🧬</span>
                  <p className="text-forest-400 mt-4 text-sm">편백 심재오일 연구</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="section-label">연구 철학</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                자연의 효능을<br />과학으로 증명합니다
              </h2>
              <div className="space-y-4 text-forest-200 leading-relaxed">
                <p>
                  편백 심재오일의 효능은 지속적인 연구와 임상 데이터로 뒷받침됩니다.<br />
                  사천편백림은 외부 연구기관과의 협력을 통해 심재오일의 효능 범위를 확장하고 있습니다.
                </p>
                <p>
                  두피·모발 케어를 넘어 피부 장벽 강화, 구강 내 유해균 억제, 실내 공기 정화 등<br />
                  다양한 분야에서 편백 심재오일의 활용 가능성을 연구하고 있습니다.
                </p>
                <p>
                  2026년에는 의료기기 등급 제품 라인의 임상 연구를 착수합니다.<br />
                  더 높은 기준으로, 더 넓은 영역에서 자연의 치유를 전달하겠습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESEARCH AREAS ── */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="text-forest-500 text-xs uppercase tracking-widest font-semibold mb-2">RESEARCH AREAS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-forest-900">연구 분야</h2>
            <p className="text-forest-600 mt-3 text-sm">진행 현황별로 구분하여 보여드립니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area) => (
              <div key={area.title} className="card-light p-6 group hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{area.icon}</span>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${area.statusColor}`}>
                    {area.status}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-forest-900 mb-2">{area.title}</h3>
                <p className="text-forest-700 text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section className="py-16 bg-forest-900">
        <div className="container-wide">
          <div className="text-center mb-10">
            <p className="section-label">협력 기관</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
              신뢰할 수 있는 파트너와 함께합니다
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {partners.map((p) => (
              <div key={p.name} className="glass-card p-5 text-center">
                <div className="text-2xl mb-2">🏛️</div>
                <p className="text-white font-semibold text-sm">{p.name}</p>
                <p className="text-forest-400 text-xs mt-1">{p.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-forest-800 text-center">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-white mb-4">연구가 담긴 제품을 만나보세요</h2>
          <p className="text-forest-300 mb-8">임상 연구로 검증된 편백 심재오일 기반 아보리덤 라인입니다.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/products" className="btn-primary">제품 보러가기</Link>
            <Link href="/technology" className="btn-outline-white">기술력/인증 보기</Link>
          </div>
        </div>
      </section>
    </>
  )
}
