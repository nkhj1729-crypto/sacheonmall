import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

export const metadata: Metadata = {
  title: '편백 치유숲 | 사천편백림',
  description: '12만㎡, 46년의 시간이 만든 편백 치유의 숲. 무료 개방, 연중 방문 가능. 피톤치드 테라피, 쑥캐기 체험, 편백숲 산책 프로그램.',
}

const programs = [
  {
    icon: '🌿',
    title: '무공해 쑥캐기 체험',
    season: '봄 시즌 (3~5월)',
    desc: '편백림 내 자연 서식 쑥을 직접 채취하는 체험 프로그램입니다. 화학비료·농약 없이 자연 그대로 자란 쑥을 가져가실 수 있습니다. 가족 단위, 유치원·학교 단체 방문 환영합니다.',
    cta: '예약하기',
    ctaHref: '/contact',
    badge: '인기',
  },
  {
    icon: '🚶',
    title: '편백숲 산책 프로그램',
    season: '연중 상시',
    desc: '12만㎡ 편백림을 걸으며 자연 피톤치드를 마시는 힐링 산책 코스입니다. 별도 예약 없이 자유 방문 가능하며, 입장료는 무료입니다. 반려동물 동반 입장 가능합니다.',
    cta: '오시는 길 보기',
    ctaHref: '/contact',
    badge: '무료',
  },
  {
    icon: '🧘',
    title: '피톤치드 테라피',
    season: '시즌 운영',
    desc: '편백나무 피톤치드 고농도 구역에서 진행하는 특별 테라피 프로그램입니다. 호흡기 건강, 스트레스 해소, 면역력 강화에 도움이 됩니다. 사전 예약 필수입니다.',
    cta: '예약하기',
    ctaHref: '/contact',
    badge: '사전예약',
  },
]

export default function ForestPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=2000"
            alt="편백 치유의 숲"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-forest-900/65" />
        </div>
        <div className="relative z-10 text-center container-wide pt-20">
          <p className="section-label mb-4">SACHEON PYEONBAEK FOREST</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            편백 치유의 숲
          </h1>
          <p className="text-xl md:text-2xl text-forest-100 mb-8">
            12만㎡, 46년의 시간이 만든 숲
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              방문 예약하기
            </Link>
            <a href="#programs" className="btn-outline-white">
              체험 프로그램 보기
            </a>
          </div>

          {/* Stat badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {['12만㎡ 편백림', '46년 역사', '무료 입장', '연중 개방'].map((badge) => (
              <span
                key={badge}
                className="glass-card px-4 py-2 text-sm text-forest-200 font-medium"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="scroll-indicator w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* ── FOREST INTRO ── */}
      <section className="section-padding bg-forest-900">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label">편백 치유숲 소개</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                도시의 공기와는<br />다릅니다
              </h2>
              <div className="space-y-4 text-forest-200 leading-relaxed">
                <p>
                  편백나무(Chamaecyparis obtusa)는 피톤치드를 가장 많이 방출하는 수종 중 하나입니다.
                  특히 사천편백림의 편백나무들은 46년이라는 긴 세월 동안 자연 그대로 성장하여,
                  시중에서 판매되는 어떤 편백 제품보다 높은 농도의 피톤치드를 품고 있습니다.
                </p>
                <p>
                  피톤치드(phytoncide)는 나무가 스스로를 보호하기 위해 내뿜는 천연 항균물질입니다.
                  이 물질은 인체에 흡수되면 면역력 강화, 스트레스 호르몬 감소, 호흡기 건강 개선에
                  효과적이라는 것이 다수의 연구에서 확인되었습니다.
                </p>
                <p>
                  사천편백림은 이 소중한 자연을 지역 주민과 방문객 모두에게
                  무료로 개방하고 있습니다. 입장료 없이, 예약 없이, 언제든지 오세요.
                </p>
              </div>

              {/* Stat row */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { value: '12만㎡', label: '숲 면적' },
                  { value: '46년', label: '조성 기간' },
                  { value: '무료', label: '입장료' },
                  { value: '연중', label: '개방 기간' },
                ].map((stat) => (
                  <div key={stat.label} className="glass-card p-4">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-forest-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=2000"
                alt="편백나무 숲"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-card p-4">
                  <p className="text-white font-semibold text-sm">ULTRA A+ 등급 피톤치드</p>
                  <p className="text-forest-300 text-xs mt-1">국내 최고 수준의 피톤치드 농도</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOREST STATS ── */}
      <section className="py-16 bg-forest-800 border-y border-forest-700/50">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedCounter value="12만㎡" label="편백 치유숲 규모" />
            <AnimatedCounter value="46년" label="직접 조성 역사" />
            <AnimatedCounter value="무료" label="입장 및 개방" />
            <AnimatedCounter value="연중" label="방문 가능" />
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE PROGRAMS ── */}
      <section id="programs" className="section-padding bg-cream">
        <div className="container-wide">
          <SectionHeader
            label="체험 프로그램"
            title="숲에서 할 수 있는 것들"
            subtitle="사천편백림에서 자연이 주는 다양한 치유를 경험하세요."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div key={program.title} className="card-light overflow-hidden group">
                <div className="relative h-48 bg-gradient-to-br from-forest-200 to-forest-300 flex items-center justify-center">
                  <span className="text-7xl opacity-30 group-hover:scale-110 transition-transform duration-300">
                    {program.icon}
                  </span>
                  <span className="absolute top-4 right-4 bg-forest-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                    {program.badge}
                  </span>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-forest-500 bg-forest-50 px-3 py-1 rounded-full font-medium">
                      {program.season}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-forest-900 mb-3">{program.title}</h3>
                  <p className="text-forest-700 text-sm leading-relaxed mb-6">{program.desc}</p>
                  <Link
                    href={program.ctaHref}
                    className="btn-outline-forest text-sm px-6 py-2.5"
                  >
                    {program.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISIT INFO ── */}
      <section className="section-padding bg-forest-900">
        <div className="container-wide">
          <SectionHeader
            label="오시는 길"
            title="사천편백림 찾아오기"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map placeholder */}
            <div className="h-80 rounded-2xl bg-forest-800 border border-forest-600/30 flex flex-col items-center justify-center gap-4">
              <svg className="w-16 h-16 text-forest-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-forest-400 text-sm text-center">
                지도 서비스 연동 예정<br />
                <span className="text-forest-500 text-xs">경남 사천시 축동면 내축로 6</span>
              </p>
              <a
                href="https://map.naver.com/v5/search/경남 사천시 축동면 내축로 6"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm px-6 py-2"
              >
                네이버 지도로 보기
              </a>
            </div>

            {/* Info grid */}
            <div className="space-y-4">
              {[
                { icon: '📍', label: '주소', value: '경남 사천시 축동면 내축로 6' },
                { icon: '📞', label: '전화', value: '055-852-6520' },
                { icon: '🕐', label: '운영시간', value: '연중 24시간 (자유 방문 가능)' },
                { icon: '💰', label: '입장료', value: '무료' },
                { icon: '🚗', label: '주차', value: '무료 주차 가능' },
                { icon: '🐕', label: '반려동물', value: '동반 입장 가능 (목줄 착용 필수)' },
              ].map((info) => (
                <div key={info.label} className="glass-card p-4 flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0">{info.icon}</span>
                  <div>
                    <p className="text-xs text-forest-400 mb-0.5 uppercase tracking-wider">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
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
          <h2 className="text-3xl font-bold text-white mb-4">지금 바로 방문하세요</h2>
          <p className="text-forest-300 mb-8 max-w-lg mx-auto">
            예약 없이 언제든지 방문하실 수 있습니다. 편백향 가득한 숲이 기다립니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">체험 예약하기</Link>
            <Link href="/products" className="btn-outline-white">편백 제품 보기</Link>
          </div>
        </div>
      </section>
    </>
  )
}
