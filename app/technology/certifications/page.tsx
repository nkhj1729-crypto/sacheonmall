import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '인증 현황 | 사천편백림',
  description: 'GMP 인증, 농림부 6차산업 인증, 편백 심재오일 특허, 크린룸·무균룸 자체 보유. 말이 아닌 인증서로 품질을 보장합니다.',
}

const certifications = [
  {
    title: 'GMP 인증',
    org: '식품의약품안전처',
    desc: 'Good Manufacturing Practice. 의약품 수준의 제조 환경 기준을 충족하는 시설에서 생산합니다. 크린룸·무균룸을 완비하여 위생적이고 안전한 제품을 보장합니다.',
    icon: '🏭',
    color: 'from-forest-700 to-forest-600',
    detail: '화장품·의료기기 등급 제품 생산 가능한 제조 환경을 공식 인증받았습니다.',
  },
  {
    title: '농림부 6차산업 인증',
    org: '농림축산식품부',
    desc: '1차(편백 생산) + 2차(제품 제조) + 3차(체험·판매)를 모두 아우르는 종합 농업 비즈니스 인증. 농림축산식품부가 검증한 신뢰할 수 있는 농업 기업입니다.',
    icon: '🌾',
    color: 'from-forest-600 to-forest-500',
    detail: '씨앗부터 완제품까지 모든 과정을 한 울타리 안에서 수행하는 유일한 편백 기업입니다.',
  },
  {
    title: '편백 심재오일 특허',
    org: '특허청 (국내 유일)',
    desc: '편백나무 심재에서 오일을 추출하는 독자적인 기술에 대한 특허권을 보유하고 있습니다. 국내에서 유일하게 심재오일을 상업적으로 생산하는 기업입니다.',
    icon: '🔬',
    color: 'from-gold/80 to-gold/50',
    detail: '국내 최초·유일의 편백 심재오일 추출 특허. 모든 아보리덤 제품의 기술적 근거입니다.',
  },
  {
    title: '크린룸·무균룸',
    org: '자체 시설 보유',
    desc: '화장품 및 의료기기 등급 제품 생산을 위한 크린룸과 무균룸을 자체 보유하고 있습니다. 외부 오염원 없이 순수한 편백 성분을 담아냅니다.',
    icon: '🧪',
    color: 'from-forest-500 to-forest-400',
    detail: '외주 없이 자체 시설에서 전 제품을 생산합니다. 원료 품질이 완제품까지 그대로 이어집니다.',
  },
]

const trustStats = [
  { num: '4+', label: '인증 · 특허', sub: '공식 기관 검증' },
  { num: 'GMP', label: '제조 환경', sub: '의약품 수준 시설' },
  { num: '1', label: '국내 유일 특허', sub: '심재오일 추출 기술' },
  { num: '6차', label: '농림부 인증', sub: '1·2·3차 산업 통합' },
]

export default function CertificationsPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-80 md:h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-forest-950 via-forest-900 to-forest-800" />
          <div className="absolute top-10 right-20 w-56 h-56 rounded-full bg-forest-600/15 blur-3xl" />
          <div className="absolute bottom-8 left-16 w-40 h-40 rounded-full bg-sage/10 blur-2xl" />
        </div>
        <div className="relative z-10 container-wide text-center pt-20">
          <p className="section-label">CERTIFICATION</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">인증 현황</h1>
          <p className="text-forest-200 mt-2 text-lg">말이 아닌 인증서로 품질을 보장합니다</p>
        </div>
      </section>

      {/* ── TRUST STATS ── */}
      <section className="py-12 bg-forest-800 border-b border-forest-700/50">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustStats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold mb-1">{s.num}</div>
                <div className="text-white font-semibold text-sm mb-0.5">{s.label}</div>
                <div className="text-forest-400 text-xs">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-16 bg-forest-900">
        <div className="container-wide max-w-3xl mx-auto text-center">
          <p className="section-label">신뢰의 근거</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
            믿음을 숫자로 증명합니다
          </h2>
          <p className="text-forest-200 leading-relaxed">
            사천편백림의 품질은 우리의 말이 아닌, 공신력 있는 기관의 인증으로 증명됩니다.<br />
            GMP 인증부터 농림부 6차산업 인증까지 — 철저한 검증을 통과한 제품만을 선보입니다.
          </p>
        </div>
      </section>

      {/* ── CERTIFICATION CARDS ── */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert) => (
              <div key={cert.title} className="card-light overflow-hidden group">
                <div className={`h-1.5 bg-gradient-to-r ${cert.color}`} />
                <div className="p-8">
                  <div className="flex items-start gap-5 mb-5">
                    <div className="w-14 h-14 rounded-xl bg-forest-50 flex items-center justify-center text-3xl flex-shrink-0 group-hover:bg-forest-100 transition-colors">
                      {cert.icon}
                    </div>
                    <div>
                      <p className="text-xs text-forest-500 uppercase tracking-wider mb-1">{cert.org}</p>
                      <h3 className="text-xl font-bold text-forest-900">{cert.title}</h3>
                    </div>
                  </div>
                  <p className="text-forest-700 text-sm leading-relaxed mb-4">{cert.desc}</p>
                  <div className="bg-forest-50 rounded-lg p-3 border-l-4 border-forest-400">
                    <p className="text-forest-600 text-xs leading-relaxed">{cert.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 인증의 의미 ── */}
      <section className="section-padding bg-forest-900">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="section-label">왜 중요한가</p>
            <h2 className="text-3xl font-bold text-white mt-2">인증이 보장하는 것들</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: '🧼',
                title: '위생·안전',
                desc: 'GMP 인증 시설에서 생산된 제품은 의약품 수준의 위생 관리를 거칩니다. 유해균·이물질 없이 순수한 성분만 담겨 있습니다.',
              },
              {
                icon: '🌿',
                title: '원료 신뢰성',
                desc: '농림부 6차산업 인증은 원료부터 완제품까지 전 과정이 동일 기업 내에서 이루어짐을 보증합니다. 원료 교체나 희석이 불가능합니다.',
              },
              {
                icon: '🔒',
                title: '기술 독점성',
                desc: '특허권은 편백 심재오일 추출 기술의 독창성을 공식 인정합니다. 시중 어느 제품도 동일한 방식으로 생산할 수 없습니다.',
              },
            ].map((item) => (
              <div key={item.title} className="glass-card p-6 text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
                <p className="text-forest-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-forest-800 text-center">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-white mb-4">검증된 제품을 직접 경험하세요</h2>
          <p className="text-forest-300 mb-8">4개 인증이 뒷받침하는 아보리덤 라인을 만나보세요.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/products" className="btn-primary">제품 보러가기</Link>
            <Link href="/technology/patent" className="btn-outline-white">특허기술 보기</Link>
          </div>
        </div>
      </section>
    </>
  )
}
