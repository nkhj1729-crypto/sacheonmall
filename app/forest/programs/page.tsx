import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '체험 프로그램 | 사천편백림',
  description: '무공해 쑥캐기 체험(봄), 편백숲 산책(연중 무료), 피톤치드 테라피. 가족·단체 방문 환영. 사전 예약 문의.',
}

const programs = [
  {
    icon: '🌿',
    title: '무공해 쑥캐기 체험',
    season: '봄 시즌 (3~5월)',
    badge: '인기',
    badgeColor: 'bg-amber-500',
    desc: '편백림 내 자연 서식 쑥을 직접 채취하는 체험 프로그램입니다. 화학비료·농약 없이 자연 그대로 자란 쑥을 가져가실 수 있습니다. 가족 단위, 유치원·학교 단체 방문 환영합니다.',
    details: [
      '운영 기간: 매년 3월~5월 (쑥 생육 시기에 따라 변동)',
      '대상: 개인·가족·단체 (유치원, 초등학교 단체 환영)',
      '비용: 무료 (쑥 채취 바구니 제공)',
      '예약: 사전 예약 권장 (단체는 필수)',
    ],
    needsReservation: true,
  },
  {
    icon: '🚶',
    title: '편백숲 산책 프로그램',
    season: '연중 상시',
    badge: '무료',
    badgeColor: 'bg-forest-600',
    desc: '12만㎡ 편백림을 걸으며 자연 피톤치드를 마시는 힐링 산책 코스입니다. 별도 예약 없이 자유 방문 가능하며, 입장료는 무료입니다. 반려동물 동반 입장 가능합니다.',
    details: [
      '운영 기간: 연중 24시간 (365일 개방)',
      '입장료: 무료',
      '주차: 무료',
      '반려동물: 목줄 착용 시 동반 가능',
    ],
    needsReservation: false,
  },
  {
    icon: '🧘',
    title: '피톤치드 테라피',
    season: '시즌 운영',
    badge: '사전예약',
    badgeColor: 'bg-teal-600',
    desc: '편백나무 피톤치드 고농도 구역에서 진행하는 특별 테라피 프로그램입니다. 호흡기 건강, 스트레스 해소, 면역력 강화에 도움이 됩니다. 사전 예약 필수입니다.',
    details: [
      '운영 기간: 봄·가을 시즌 (일정 별도 공지)',
      '소요 시간: 약 1시간~1시간 30분',
      '대상: 성인 (만 14세 이상 권장)',
      '예약: 전화 예약 필수 (055-852-6520)',
    ],
    needsReservation: true,
  },
]

const notices = [
  { icon: '🌧️', text: '우천 시 일부 프로그램이 취소될 수 있습니다.' },
  { icon: '📞', text: '단체 방문(10인 이상)은 반드시 사전 전화 문의 바랍니다.' },
  { icon: '👟', text: '산책 시 미끄럼 방지 신발을 착용해 주세요.' },
  { icon: '🌿', text: '자연 보호를 위해 지정 구역 이외의 식물 채취는 금지됩니다.' },
]

export default function ProgramsPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-80 md:h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-forest-950 via-forest-900 to-forest-800" />
          <div className="absolute top-10 right-20 w-64 h-64 rounded-full bg-forest-600/15 blur-3xl" />
          <div className="absolute bottom-8 left-16 w-44 h-44 rounded-full bg-sage/10 blur-2xl" />
        </div>
        <div className="relative z-10 container-wide text-center pt-20">
          <p className="section-label">EXPERIENCE PROGRAMS</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">체험 프로그램</h1>
          <p className="text-forest-200 mt-2 text-lg">숲에서 할 수 있는 모든 것들</p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-14 bg-forest-900">
        <div className="container-wide max-w-3xl mx-auto text-center">
          <p className="section-label">자연 치유 체험</p>
          <h2 className="text-3xl font-bold text-white mt-2 mb-4">
            사천편백림에서 자연이 주는<br />다양한 치유를 경험하세요
          </h2>
          <p className="text-forest-300 text-sm leading-relaxed">
            편백 치유숲 자유 산책부터 피톤치드 테라피, 쑥캐기 체험까지.<br />
            모든 연령대가 함께 즐길 수 있는 프로그램을 운영하고 있습니다.
          </p>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="space-y-10">
            {programs.map((program, i) => (
              <div
                key={program.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                  i % 2 === 1 ? '' : ''
                }`}
              >
                {/* 이미지 영역 */}
                <div className={`relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-forest-200 to-forest-300 flex items-center justify-center ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <span className="text-9xl opacity-20">{program.icon}</span>
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <span className="text-6xl">{program.icon}</span>
                    <span className={`text-white text-xs font-bold px-4 py-1.5 rounded-full ${program.badgeColor}`}>
                      {program.badge}
                    </span>
                  </div>
                </div>

                {/* 내용 영역 */}
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-forest-500 bg-forest-100 px-3 py-1 rounded-full font-medium border border-forest-200">
                      {program.season}
                    </span>
                    {program.needsReservation && (
                      <span className="text-xs text-amber-700 bg-amber-50 px-3 py-1 rounded-full font-medium border border-amber-200">
                        예약 필요
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-forest-900 mb-3">{program.title}</h2>
                  <p className="text-forest-700 leading-relaxed mb-6">{program.desc}</p>

                  {/* 상세 안내 */}
                  <ul className="space-y-2 mb-6">
                    {program.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-sm text-forest-600">
                        <span className="text-forest-400 mt-0.5 flex-shrink-0">✓</span>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-forest-600 hover:bg-forest-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-forest-600/25 text-sm"
                  >
                    {program.needsReservation ? '예약 문의하기' : '오시는 길 보기'}
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l4.5 4.75a.75.75 0 010 1.08l-4.5 4.75a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 이용 안내 ── */}
      <section className="py-14 bg-forest-800">
        <div className="container-wide">
          <div className="text-center mb-10">
            <p className="section-label">이용 안내</p>
            <h2 className="text-2xl font-bold text-white mt-2">방문 전 확인하세요</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {notices.map((n) => (
              <div key={n.text} className="glass-card p-4 flex items-start gap-3">
                <span className="text-xl flex-shrink-0">{n.icon}</span>
                <p className="text-forest-200 text-sm leading-relaxed">{n.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-forest-900 text-center">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-white mb-4">지금 바로 방문하세요</h2>
          <p className="text-forest-300 mb-8">예약 없이 언제든지 방문하실 수 있습니다.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">예약 문의하기</Link>
            <Link href="/forest/directions" className="btn-outline-white">오시는 길</Link>
          </div>
        </div>
      </section>
    </>
  )
}
