import Image from 'next/image'
import Link from 'next/link'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import SectionHeader from '@/components/ui/SectionHeader'

/* ─── Particle dots (server-rendered static positions) ─── */
const PARTICLES = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  size: 1 + (i % 3),
  left: ((i * 37 + 13) % 100),
  delay: (i * 0.4) % 12,
  duration: 8 + (i % 6),
}))

export default function HomePage() {
  return (
    <>
      {/* ── SECTION 1: HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* BG image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=2000"
            alt="편백 치유의 숲"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 forest-overlay" />
          <div className="absolute inset-0 bg-forest-900/30" />
        </div>

        {/* Particles */}
        <div className="particles-container">
          {PARTICLES.map((p) => (
            <div
              key={p.id}
              className="particle"
              style={{
                width: p.size,
                height: p.size,
                left: `${p.left}%`,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
                background: p.id % 3 === 0 ? 'rgba(201, 169, 110, 0.35)' : 'rgba(156, 173, 147, 0.4)',
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 container-wide w-full pt-24 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center min-h-[80vh]">
            {/* Left: main copy */}
            <div className="lg:col-span-7">
              <p className="section-label fade-up anim-delay-100 text-forest-300">
                LAT 35.035017 / LON 128.016147
              </p>
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-[1.2] mb-6 fade-up anim-delay-200">
                자연 그대로,<br />
                편백 치유의 숲<br />
                <span className="text-gradient-gold">사천편백림</span>
              </h1>
              <p className="text-lg md:text-xl text-forest-100 leading-relaxed mb-10 max-w-xl fade-up anim-delay-300">
                1979년, 선친이 씨앗 하나로 시작한 12만㎡의 숲.<br className="hidden sm:block" />
                그 숲에서 자란 편백이 지금 당신의 두피와 피부를 치유합니다.
              </p>
              <div className="flex flex-wrap gap-4 fade-up anim-delay-400">
                <Link href="/products" className="btn-primary">
                  제품 보러가기
                </Link>
                <Link href="/about" className="btn-outline-white">
                  기업 알아보기
                </Link>
              </div>
            </div>

            {/* Right: metrics sidebar */}
            <div className="lg:col-span-5 lg:pl-8">
              <div className="glass-card p-6 space-y-6 max-w-xs fade-up anim-delay-500">
                <div className="border-b border-forest-600/30 pb-6">
                  <p className="text-xs uppercase tracking-widest text-forest-300 mb-1">Establishment</p>
                  <p className="text-4xl font-bold text-white">1979</p>
                  <p className="text-sm text-forest-300">EST.</p>
                </div>
                <div className="border-b border-forest-600/30 pb-6">
                  <p className="text-xs uppercase tracking-widest text-forest-300 mb-1">Forest Scale</p>
                  <p className="text-4xl font-bold text-white">120,000</p>
                  <p className="text-sm text-forest-300">㎡ 편백림</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-forest-300 mb-1">Phytoncide Grade</p>
                  <p className="text-4xl font-bold text-gradient-gold">ULTRA A+</p>
                  <p className="text-sm text-forest-300">피톤치드 등급</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <p className="text-[10px] uppercase tracking-[0.3em] text-forest-300">Scroll to Heal</p>
          <div className="scroll-indicator w-5 h-8 rounded-full border-2 border-forest-300/50 flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 bg-sage rounded-full" />
          </div>
        </div>
      </section>

      {/* ── SECTION 2: BRAND INTRO ── */}
      <section className="section-padding bg-forest-900">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: quote */}
            <div>
              <div className="text-8xl font-bold text-forest-600/40 leading-none mb-4 select-none">&ldquo;</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight -mt-8">
                인간에게 최선의<br />치유는 자연이다
              </h2>
              <div className="mt-6 w-16 h-1 bg-gradient-to-r from-gold to-transparent rounded-full" />
            </div>

            {/* Right: body */}
            <div className="space-y-5">
              <p className="text-forest-100 leading-relaxed text-lg">
                사천편백림은 제품을 사기 위해 원료를 구하지 않습니다.<br />
                1979년부터 직접 심고 가꾼 편백나무에서 원료가 나오고,
                그 원료로 제품이 탄생합니다.
              </p>
              <p className="text-forest-200 leading-relaxed">
                나무를 키운 손으로 만든 제품.<br />
                그것이 사천편백림이 드릴 수 있는 가장 정직한 약속입니다.
              </p>
              <Link
                href="/about/story"
                className="inline-flex items-center gap-2 text-sage hover:text-white transition-colors duration-200 font-medium group"
              >
                창업 스토리 읽기
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: CORE VALUES ── */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <SectionHeader
            label="왜 사천편백림인가"
            title="왜 사천편백림인가"
            subtitle="45년의 시간이 쌓은 차이. 원료, 기술, 그리고 진정성."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="card-light p-8 group">
              <div className="w-14 h-14 rounded-2xl bg-forest-50 flex items-center justify-center text-3xl mb-6 group-hover:bg-forest-100 transition-colors">
                🌲
              </div>
              <h3 className="text-xl font-bold text-forest-900 mb-3">직접 심고, 직접 키운 숲</h3>
              <p className="text-forest-700 leading-relaxed text-sm mb-6">
                1979년부터 12만㎡ 규모로 조성한 편백림. 타사가 원료를 구매할 때, 우리는 나무를 기릅니다.
              </p>
              <Link
                href="/forest"
                className="inline-flex items-center gap-1 text-sm text-forest-500 hover:text-forest-700 font-semibold transition-colors group/link"
              >
                편백 치유숲 보기
                <span className="group-hover/link:translate-x-0.5 transition-transform">→</span>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="card-light p-8 group">
              <div className="w-14 h-14 rounded-2xl bg-forest-50 flex items-center justify-center text-3xl mb-6 group-hover:bg-forest-100 transition-colors">
                🔬
              </div>
              <h3 className="text-xl font-bold text-forest-900 mb-3">국내 유일, 심재오일 특허</h3>
              <p className="text-forest-700 leading-relaxed text-sm mb-6">
                편백 잎이 아닌 &lsquo;심재(心材)&rsquo;에서 추출한 오일. 더 깊고, 더 진하고, 더 오래가는 피톤치드입니다.
              </p>
              <Link
                href="/technology"
                className="inline-flex items-center gap-1 text-sm text-forest-500 hover:text-forest-700 font-semibold transition-colors group/link"
              >
                특허기술 알아보기
                <span className="group-hover/link:translate-x-0.5 transition-transform">→</span>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="card-light p-8 group">
              <div className="w-14 h-14 rounded-2xl bg-forest-50 flex items-center justify-center text-3xl mb-6 group-hover:bg-forest-100 transition-colors">
                ✅
              </div>
              <h3 className="text-xl font-bold text-forest-900 mb-3">믿을 수 있는 제조 기준</h3>
              <p className="text-forest-700 leading-relaxed text-sm mb-6">
                GMP 인증·크린룸·무균룸을 갖춘 시설에서 원료부터 완제품까지 한 공간에서 생산합니다.
              </p>
              <Link
                href="/technology"
                className="inline-flex items-center gap-1 text-sm text-forest-500 hover:text-forest-700 font-semibold transition-colors group/link"
              >
                기술력/인증 보기
                <span className="group-hover/link:translate-x-0.5 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: PRODUCT HIGHLIGHT ── */}
      <section className="section-padding bg-forest-800">
        <div className="container-wide">
          <SectionHeader
            label="아보리덤 브랜드"
            title="편백 치유숲에서 탄생한 아보리덤"
            subtitle={`탈모 고민, 민감한 두피, 찝찝한 화학 성분 걱정.\n아보리덤이 편백 심재오일 하나로 해결합니다.`}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Product card 1 */}
            <div className="card-dark overflow-hidden group">
              <div className="relative h-56 overflow-hidden bg-forest-900">
                <img
                  src="/products/shampoo.png"
                  alt="아보리덤 편백그대로 샴푸"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 to-transparent" />
                <span className="absolute top-4 left-4 bg-forest-500/80 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                  인기 1위
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">아보리덤 편백그대로 샴푸</h3>
                <p className="text-forest-300 text-sm leading-relaxed mb-4">
                  화학 샴푸는 이제 그만. 두피가 숨 쉽니다.
                </p>
                <Link
                  href="/products"
                  className="text-sage text-sm font-medium hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  자세히 보기 →
                </Link>
              </div>
            </div>

            {/* Product card 2 */}
            <div className="card-dark overflow-hidden group">
              <div className="relative h-56 overflow-hidden bg-forest-900">
                <img
                  src="/products/diffuser.png"
                  alt="편백 방향제"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">편백 방향제</h3>
                <p className="text-forest-300 text-sm leading-relaxed mb-4">
                  화학 향이 아닌, 진짜 숲의 냄새
                </p>
                <Link
                  href="/products"
                  className="text-sage text-sm font-medium hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  자세히 보기 →
                </Link>
              </div>
            </div>

            {/* Product card 3 */}
            <div className="card-dark overflow-hidden group">
              <div className="relative h-56 overflow-hidden bg-forest-900">
                <img
                  src="/products/toothpaste.png"
                  alt="아보리덤 치약"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">아보리덤 치약</h3>
                <p className="text-forest-300 text-sm leading-relaxed mb-4">
                  잇몸까지 자연이 지킵니다
                </p>
                <Link
                  href="/products"
                  className="text-sage text-sm font-medium hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  자세히 보기 →
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/products" className="btn-primary">
              전체 제품 보기
            </Link>
            <a
              href="https://smartstore.naver.com/schinoki?n_media=27758&n_query=%EC%82%AC%EC%B2%9C%ED%8E%B8%EB%B0%B1%EB%A6%BC&n_rank=1&n_ad_group=grp-a001-01-000000005174593&n_ad=nad-a001-01-000000476631712&n_keyword_id=nkw-a001-01-000006825472804&n_keyword=%EC%82%AC%EC%B2%9C%ED%8E%B8%EB%B0%B1%EB%A6%BC&n_campaign_type=1&n_ad_group_type=1&n_match=1&NaPm=ct%3Dmngrqaif%7Cci%3DER5d594cd6-2e2f-11f1-aee8-7ea2b89bdd8e%7Ctr%3Dsa%7Chk%3D28e19eec0f47a0fa90c772b8e4557a768e626e6a%7Cnacn%3D1OO4BwgIaPlW"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white"
            >
              스마트스토어에서 구매하기
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: FOREST STATS ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=2000"
            alt="편백 숲"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-forest-900/80" />
        </div>
        <div className="relative z-10 container-wide">
          <p className="text-center section-label mb-12">사천편백림 규모</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedCounter value="12만㎡" label="편백 치유숲 규모" />
            <AnimatedCounter value="46년" label="직접 조성 역사" />
            <AnimatedCounter value="무료" label="입장 및 개방" />
            <AnimatedCounter value="연중" label="방문 가능" />
          </div>
        </div>
      </section>

      {/* ── SECTION 6: BLOG TEASER ── */}
      <section className="section-padding bg-forest-50">
        <div className="container-wide">
          <SectionHeader
            label="사천편백림 이야기"
            title="사천편백림 이야기"
            subtitle="숲에서 벌어지는 일들, 제품 이야기, 피톤치드 정보를 블로그에서 솔직하게 전합니다."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {[
              {
                tag: '편백 이야기',
                title: '편백나무 심재가 잎보다 피톤치드가 강한 이유',
                date: '2026.03.15',
                excerpt: '나무 속 깊은 곳, 심재에 농축된 천연 피톤치드의 비밀을 알아봅니다.',
              },
              {
                tag: '제품 이야기',
                title: '아보리덤 탈모 샴푸 3개월 사용 후기 모음',
                date: '2026.02.28',
                excerpt: '실제 사용자들의 경험담을 정리했습니다. 화학 성분 없이도 두피가 달라집니다.',
              },
              {
                tag: '숲 체험',
                title: '봄 쑥캐기 체험 프로그램 신청 안내 (2026년)',
                date: '2026.02.10',
                excerpt: '사천편백림에서 진행하는 무공해 쑥캐기 체험. 3월부터 5월까지 운영됩니다.',
              },
            ].map((post) => (
              <article key={post.title} className="card-light overflow-hidden group cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-forest-100 to-forest-200 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl opacity-20">🌲</span>
                  </div>
                  <span className="absolute top-4 left-4 bg-forest-500 text-white text-xs px-3 py-1 rounded-full">
                    {post.tag}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-forest-400 mb-2">{post.date}</p>
                  <h3 className="font-bold text-forest-900 mb-2 leading-snug group-hover:text-forest-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-forest-600 leading-relaxed">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://blog.naver.com/ronabird"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-forest-600 hover:text-forest-800 font-semibold transition-colors group"
            >
              블로그 더 보기
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: CTA BANNER ── */}
      <section className="py-20 bg-forest-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-900 to-forest-950" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-forest-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold/5 rounded-full blur-2xl" />
        <div className="relative z-10 container-wide text-center">
          <p className="section-label">자연이 주는 치유</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            지금 사천편백림을<br className="sm:hidden" /> 경험하세요
          </h2>
          <p className="text-forest-200 text-lg mb-10 max-w-xl mx-auto">
            숲에 직접 방문하거나, 온라인으로 제품을 만나보세요.
            사천편백림의 자연이 당신 곁으로 찾아갑니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/forest" className="btn-primary">
              숲 방문 안내
            </Link>
            <Link href="/contact" className="btn-outline-white">
              B2B 문의하기
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
