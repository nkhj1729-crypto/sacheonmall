import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '기술력/인증 | 사천편백림',
  description: '국내 유일 편백 심재오일 특허기술. GMP 인증, 농림부 6차산업 인증, 크린룸·무균룸 시설. 원료부터 완제품까지 한 공간에서 생산.',
}

const subPages = [
  {
    href: '/technology/patent',
    icon: '🔬',
    label: 'PATENT TECHNOLOGY',
    title: '특허기술',
    desc: '국내 유일 편백 심재오일 추출 특허. 잎보다 3~5배 높은 피톤치드 농도와 5단계 추출 프로세스를 확인하세요.',
    badge: '국내 유일',
    badgeColor: 'bg-gold/15 text-gold border border-gold/30',
    color: 'from-forest-700 to-forest-600',
  },
  {
    href: '/technology/certifications',
    icon: '🏆',
    label: 'CERTIFICATION',
    title: '인증 현황',
    desc: 'GMP 인증, 농림부 6차산업 인증, 심재오일 특허, 크린룸·무균룸 자체 보유. 말이 아닌 인증서로 품질을 증명합니다.',
    badge: '4개 인증',
    badgeColor: 'bg-forest-600/30 text-forest-200 border border-forest-500/30',
    color: 'from-forest-600 to-forest-500',
  },
  {
    href: '/technology/rnd',
    icon: '🧬',
    label: 'RESEARCH & DEVELOPMENT',
    title: '연구개발',
    desc: '두피·피부·구강·공기 정화 4개 분야에서 임상 연구 진행 중. 2026년 의료기기 등급 제품 임상 착수 예정.',
    badge: '진행중',
    badgeColor: 'bg-sage/20 text-sage border border-sage/30',
    color: 'from-forest-500 to-forest-400',
  },
]

const quickStats = [
  { num: '1',  label: '보유 특허',   sub: '심재오일 추출 기술' },
  { num: '4+', label: '인증 획득',   sub: 'GMP · 6차산업 등' },
  { num: '3+', label: '임상 연구',   sub: '외부기관 공동 진행' },
  { num: 'ULTRA A+', label: '피톤치드 등급', sub: '국내 최고 수준' },
]

export default function TechnologyPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-80 md:h-96 flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-forest-950 via-forest-900 to-forest-800" />
          <div className="absolute top-10 right-20 w-60 h-60 rounded-full bg-gold/5 blur-3xl" />
          <div className="absolute bottom-8 left-16 w-40 h-40 rounded-full bg-forest-600/20 blur-2xl" />
        </div>
        <div className="relative z-10 container-wide pb-12">
          <p className="section-label">TECHNOLOGY & CERTIFICATION</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">기술력 / 인증</h1>
          <p className="text-forest-200 mt-2 text-lg">국내 유일, 편백 심재오일 특허기술</p>
        </div>
      </section>

      {/* ── QUICK STATS ── */}
      <section className="py-12 bg-forest-800 border-b border-forest-700/50">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickStats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gold mb-1">{s.num}</div>
                <div className="text-white font-semibold text-sm mb-0.5">{s.label}</div>
                <div className="text-forest-400 text-xs">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="py-16 bg-forest-900">
        <div className="container-wide max-w-3xl mx-auto text-center">
          <p className="section-label">기술 철학</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
            원료에서 인증까지,<br />모든 것을 직접 증명합니다
          </h2>
          <p className="text-forest-200 leading-relaxed">
            사천편백림의 기술력은 편백 심재오일이라는 독보적인 원료에서 출발합니다.<br />
            국내 유일 특허 기술로 추출한 원료를, GMP 인증 시설에서 완제품으로 만들어<br />
            지속적인 연구개발로 효능의 범위를 넓혀갑니다.
          </p>
        </div>
      </section>

      {/* ── SUB PAGE CARDS ── */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="card-light overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block"
              >
                <div className={`h-1.5 bg-gradient-to-r ${page.color}`} />
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-forest-50 flex items-center justify-center text-3xl group-hover:bg-forest-100 transition-colors">
                      {page.icon}
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${page.badgeColor}`}>
                      {page.badge}
                    </span>
                  </div>
                  <p className="text-xs text-forest-500 uppercase tracking-wider mb-1">{page.label}</p>
                  <h3 className="text-xl font-bold text-forest-900 mb-3">{page.title}</h3>
                  <p className="text-forest-700 text-sm leading-relaxed mb-6">{page.desc}</p>
                  <div className="flex items-center text-forest-600 group-hover:text-forest-800 font-semibold text-sm transition-colors">
                    자세히 보기
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l4.5 4.75a.75.75 0 010 1.08l-4.5 4.75a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-forest-900 text-center">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-white mb-4">특허기술이 담긴 제품을 만나보세요</h2>
          <p className="text-forest-300 mb-8">심재오일 기반 아보리덤 라인으로 자연 치유를 경험하세요.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/products" className="btn-primary">제품 보러가기</Link>
            <Link href="/contact" className="btn-outline-white">B2B 파트너십 문의</Link>
          </div>
        </div>
      </section>
    </>
  )
}
