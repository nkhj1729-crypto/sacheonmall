import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '오시는 길 | 사천편백림',
  description: '경남 사천시 축동면 내축로 6. 무료 입장, 무료 주차, 반려동물 동반 가능. 연중 24시간 개방.',
}

const infoItems = [
  { icon: '📍', label: '주소',     value: '경남 사천시 축동면 내축로 6' },
  { icon: '📞', label: '전화',     value: '055-852-6520' },
  { icon: '🕐', label: '운영시간', value: '연중 24시간 (자유 방문 가능)' },
  { icon: '💰', label: '입장료',   value: '무료' },
  { icon: '🚗', label: '주차',     value: '무료 주차 가능' },
  { icon: '🐕', label: '반려동물', value: '동반 입장 가능 (목줄 착용 필수)' },
]

const routeItems = [
  {
    icon: '🚗',
    title: '자가용',
    desc: '남해고속도로 사천IC 하차 → 사천 방면 국도 이용 → 축동면 방향 → 내축로 진입 (약 15분)',
  },
  {
    icon: '🚌',
    title: '대중교통',
    desc: '사천시외버스터미널 → 축동면행 농어촌버스 승차 → 내축 정류장 하차 (약 30분)',
  },
  {
    icon: '✈️',
    title: '비행기',
    desc: '사천공항 도착 → 택시 또는 렌터카 이용 → 사천편백림 (약 20분)',
  },
  {
    icon: '🚆',
    title: '기차',
    desc: '진주역 하차 → 사천 방면 버스 또는 택시 이용 → 사천편백림 (약 40분)',
  },
]

export default function DirectionsPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-80 md:h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-forest-950 via-forest-900 to-forest-800" />
          <div className="absolute top-10 right-24 w-56 h-56 rounded-full bg-forest-700/15 blur-3xl" />
          <div className="absolute bottom-6 left-12 w-36 h-36 rounded-full bg-sage/10 blur-2xl" />
        </div>
        <div className="relative z-10 container-wide text-center pt-20">
          <p className="section-label">DIRECTIONS</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">오시는 길</h1>
          <p className="text-forest-200 mt-2 text-lg">경남 사천시 축동면 — 편백림이 기다립니다</p>
        </div>
      </section>

      {/* ── QUICK INFO ── */}
      <section className="py-10 bg-forest-800 border-b border-forest-700/50">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: '🕐', label: '24시간', sub: '연중 개방' },
              { icon: '💰', label: '무료', sub: '입장료 없음' },
              { icon: '🚗', label: '무료', sub: '주차 가능' },
              { icon: '🐕', label: '동반', sub: '반려동물 OK' },
              { icon: '📞', label: '055-852-6520', sub: '문의전화' },
              { icon: '📍', label: '사천시 축동면', sub: '내축로 6' },
            ].map((item) => (
              <div key={item.label} className="glass-card p-4 text-center">
                <div className="text-2xl mb-1">{item.icon}</div>
                <div className="text-white font-semibold text-sm">{item.label}</div>
                <div className="text-forest-400 text-xs mt-0.5">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAP + INFO ── */}
      <section className="section-padding bg-forest-900">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="section-label">찾아오기</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">사천편백림 위치</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 지도 영역 */}
            <div className="space-y-4">
              <div className="h-80 rounded-2xl bg-forest-800 border border-forest-600/30 flex flex-col items-center justify-center gap-4 overflow-hidden relative">
                <svg className="w-20 h-20 text-forest-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-center">
                  <p className="text-white font-semibold text-sm mb-1">경남 사천시 축동면 내축로 6</p>
                  <p className="text-forest-400 text-xs">사천편백림</p>
                </div>
              </div>

              {/* 지도 버튼 */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://map.naver.com/v5/search/경남 사천시 축동면 내축로 6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#03C75A] hover:bg-[#02a84c] text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-200 text-sm"
                >
                  <span>🗺</span> 네이버 지도
                </a>
                <a
                  href="https://map.kakao.com/?q=경남 사천시 축동면 내축로 6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#FEE500] hover:bg-[#f0d800] text-[#3C1E1E] font-semibold py-3 px-4 rounded-xl transition-colors duration-200 text-sm"
                >
                  <span>🗺</span> 카카오맵
                </a>
              </div>
            </div>

            {/* 상세 정보 */}
            <div className="space-y-3">
              {infoItems.map((info) => (
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

      {/* ── 교통편 안내 ── */}
      <section className="section-padding bg-forest-800">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="section-label">교통편 안내</p>
            <h2 className="text-3xl font-bold text-white mt-2">어디서든 오실 수 있습니다</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {routeItems.map((route) => (
              <div key={route.title} className="glass-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{route.icon}</span>
                  <h3 className="text-white font-bold text-lg">{route.title}</h3>
                </div>
                <p className="text-forest-300 text-sm leading-relaxed">{route.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 주변 안내 ── */}
      <section className="py-14 bg-forest-900 border-t border-forest-700/50">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center">
            <p className="section-label">방문 안내</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-6">
              예약 없이 언제든지 오세요
            </h2>
            <p className="text-forest-300 leading-relaxed mb-8">
              자유 방문은 별도 예약 없이 365일 24시간 가능합니다.<br />
              체험 프로그램(쑥캐기, 피톤치드 테라피)은 사전 예약이 필요합니다.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">체험 예약하기</Link>
              <Link href="/forest" className="btn-outline-white">편백 치유숲 소개</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
