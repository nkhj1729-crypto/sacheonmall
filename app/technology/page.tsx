import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: '기술력/인증 | 사천편백림',
  description: '국내 유일 편백 심재오일 특허기술. GMP 인증, 농림부 6차산업 인증, 크린룸·무균룸 시설. 원료부터 완제품까지 한 공간에서 생산.',
}

const processSteps = [
  { step: 1, title: '당일 벌목', desc: '신선도를 유지하기 위해 당일 벌목한 편백나무만 사용합니다.' },
  { step: 2, title: '심재 분리', desc: '나무 속 핵심 부위인 심재(心材)만을 정밀하게 분리합니다.' },
  { step: 3, title: '전통 방식 추출', desc: '수증기 증류법으로 심재의 피톤치드를 최대한 보존하며 추출합니다.' },
  { step: 4, title: '품질 검사', desc: '피톤치드 농도, 순도, 미생물 검사 등 엄격한 품질 기준을 통과해야 합니다.' },
  { step: 5, title: '제품 적용', desc: 'GMP 인증 크린룸·무균룸에서 최종 제품으로 완성됩니다.' },
]

const certifications = [
  {
    title: 'GMP 인증',
    org: '식품의약품안전처',
    desc: 'Good Manufacturing Practice. 의약품 수준의 제조 환경 기준을 충족하는 시설에서 생산합니다. 크린룸·무균룸을 완비하여 위생적이고 안전한 제품을 보장합니다.',
    icon: '🏭',
    color: 'from-forest-700 to-forest-600',
  },
  {
    title: '농림부 6차산업 인증',
    org: '농림축산식품부',
    desc: '1차(편백 생산) + 2차(제품 제조) + 3차(체험·판매)를 모두 아우르는 종합 농업 비즈니스 인증. 농림축산식품부가 검증한 신뢰할 수 있는 농업 기업입니다.',
    icon: '🌾',
    color: 'from-forest-600 to-forest-500',
  },
  {
    title: '편백 심재오일 특허',
    org: '특허청 (국내 유일)',
    desc: '편백나무 심재에서 오일을 추출하는 독자적인 기술에 대한 특허권을 보유하고 있습니다. 국내에서 유일하게 심재오일을 상업적으로 생산하는 기업입니다.',
    icon: '🔬',
    color: 'from-gold/80 to-gold/50',
  },
  {
    title: '크린룸·무균룸',
    org: '자체 시설 보유',
    desc: '화장품 및 의료기기 등급 제품 생산을 위한 크린룸과 무균룸을 자체 보유하고 있습니다. 외부 오염원 없이 순수한 편백 성분을 담아냅니다.',
    icon: '🧪',
    color: 'from-forest-500 to-forest-400',
  },
]

export default function TechnologyPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-80 md:h-96 flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-forest-950 via-forest-900 to-forest-800" />
        </div>
        <div className="relative z-10 container-wide pb-12">
          <p className="section-label">TECHNOLOGY & CERTIFICATION</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">기술력 / 인증</h1>
          <p className="text-forest-200 mt-2 text-lg">국내 유일, 편백 심재오일 특허기술</p>
        </div>
      </section>

      {/* ── PATENT SECTION ── */}
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
                  피톤치드를 추출합니다. 잎은 수확하기 쉽고 생산 단가가 낮지만,
                  피톤치드 함량은 제한적입니다.
                </p>
                <p>
                  사천편백림은 다릅니다. 우리는 나무의 가장 핵심 부위인
                  <strong className="text-white"> 심재(心材, Heartwood)</strong>에서 오일을 추출합니다.
                  심재는 나무가 수십 년에 걸쳐 축적한 방어 물질의 집약체로,
                  잎보다 3~5배 이상 높은 피톤치드 농도를 자랑합니다.
                </p>
                <p>
                  이 기술을 상업적으로 구현한 것은 국내에서 사천편백림이 유일합니다.
                  특허청으로부터 편백 심재오일 추출 기술에 대한 특허권을 취득하였으며,
                  이 기술이 아보리덤 제품 라인 전체의 핵심 기반입니다.
                </p>
              </div>

              <div className="mt-8 p-5 glass-card">
                <p className="text-gold font-bold text-sm uppercase tracking-widest mb-2">핵심 차이점</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-forest-400 mb-1">일반 편백 제품</p>
                    <p className="text-forest-200">잎(葉) 추출 / 낮은 피톤치드 농도</p>
                  </div>
                  <div>
                    <p className="text-forest-400 mb-1">사천편백림</p>
                    <p className="text-white font-medium">심재(心材) 추출 / ULTRA A+ 등급</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual: Process diagram */}
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
          <p className="text-center section-label mb-8">추출 프로세스</p>
          <div className="flex flex-wrap justify-center gap-2">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-10">
            {processSteps.map((s) => (
              <div key={s.step} className="glass-card p-4 text-center">
                <p className="text-gold text-xs font-bold uppercase tracking-wider mb-2">STEP {s.step}</p>
                <p className="text-white font-semibold text-sm mb-2">{s.title}</p>
                <p className="text-forest-300 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <SectionHeader
            label="인증 현황"
            title="믿음을 숫자로 증명합니다"
            subtitle="말이 아닌 인증서로 품질을 보장합니다."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert) => (
              <div key={cert.title} className="card-light overflow-hidden group">
                <div className={`h-3 bg-gradient-to-r ${cert.color}`} />
                <div className="p-8">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-forest-50 flex items-center justify-center text-3xl flex-shrink-0 group-hover:bg-forest-100 transition-colors">
                      {cert.icon}
                    </div>
                    <div>
                      <p className="text-xs text-forest-500 uppercase tracking-wider mb-1">{cert.org}</p>
                      <h3 className="text-xl font-bold text-forest-900 mb-3">{cert.title}</h3>
                      <p className="text-forest-700 text-sm leading-relaxed">{cert.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── R&D ── */}
      <section className="section-padding bg-forest-900">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-80 rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-forest-800 to-forest-900 flex items-center justify-center">
                <span className="text-8xl opacity-20">🧬</span>
              </div>
            </div>
            <div>
              <p className="section-label">연구·개발</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                멈추지 않는 연구
              </h2>
              <div className="space-y-4 text-forest-200 leading-relaxed">
                <p>
                  편백 심재오일의 효능은 지속적인 연구와 임상 데이터로 뒷받침됩니다.
                  사천편백림은 외부 연구기관과의 협력을 통해 심재오일의 효능 범위를 확장하고 있습니다.
                </p>
                <p>
                  두피·모발 케어를 넘어 피부 장벽 강화, 구강 내 유해균 억제, 실내 공기 정화 등
                  다양한 분야에서 편백 심재오일의 활용 가능성을 연구하고 있습니다.
                </p>
                <p>
                  2026년에는 의료기기 등급 제품 라인의 임상 연구를 진행 중입니다.
                  더 높은 기준으로, 더 넓은 영역에서 자연의 치유를 전달하겠습니다.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { num: '1', label: '특허 보유' },
                  { num: '4+', label: '인증 획득' },
                  { num: '진행중', label: '임상 연구' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center glass-card p-4">
                    <div className="text-2xl font-bold text-gold">{stat.num}</div>
                    <div className="text-xs text-forest-300 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
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
            <Link href="/contact" className="btn-outline-white">B2B 파트너십 문의</Link>
          </div>
        </div>
      </section>
    </>
  )
}
