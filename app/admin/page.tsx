'use client'

import Link from 'next/link'

const STAT_CARDS = [
  {
    label: '총 게시물',
    value: 12,
    change: '↑2 이번 달',
    changeColor: 'text-green-600',
    icon: '📝',
  },
  {
    label: '미확인 문의',
    value: 3,
    change: '신규',
    changeColor: 'text-red-500',
    icon: '📬',
  },
  {
    label: '등록 제품',
    value: 9,
    change: '전체 표시 중',
    changeColor: 'text-blue-500',
    icon: '📦',
  },
  {
    label: '체험 프로그램',
    value: 3,
    change: '2개 운영 중',
    changeColor: 'text-green-600',
    icon: '🌲',
  },
]

const RECENT_INQUIRIES = [
  { id: 1, company: '(주)그린라이프', type: '입점 제안', date: '2026.03.28', status: '미확인' },
  { id: 2, company: '나눔코스메틱', type: 'OEM/ODM', date: '2026.03.25', status: '확인' },
  { id: 3, company: '자연愛마트', type: '유통 파트너십', date: '2026.03.20', status: '답변완료' },
  { id: 4, company: '헬스나라', type: '입점 제안', date: '2026.03.18', status: '미확인' },
  { id: 5, company: '정다은 (개인)', type: '기타', date: '2026.03.15', status: '답변완료' },
]

const RECENT_POSTS = [
  { id: 1, title: '편백나무 심재가 잎보다 피톤치드가 강한 이유', date: '2026.03.15', status: '공개' },
  { id: 2, title: '아보리덤 탈모 샴푸 3개월 사용 후기 모음', date: '2026.02.28', status: '공개' },
  { id: 3, title: '봄 쑥캐기 체험 프로그램 신청 안내 (2026년)', date: '2026.02.10', status: '공개' },
  { id: 4, title: 'GMP 인증 시설 업그레이드 완료 안내', date: '2026.01.22', status: '공개' },
  { id: 5, title: '피톤치드의 과학적 효능 - 연구 자료 정리', date: '2026.01.10', status: '비공개' },
]

function InquiryStatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    미확인: 'bg-red-100 text-red-700',
    확인: 'bg-yellow-100 text-yellow-700',
    답변완료: 'bg-blue-100 text-blue-700',
  }
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[status] ?? 'bg-gray-100 text-gray-600'}`}>
      {status}
    </span>
  )
}

function PostStatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
        status === '공개' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
      }`}
    >
      {status}
    </span>
  )
}

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Stat Cards */}
      <div className="grid grid-cols-4 gap-6">
        {STAT_CARDS.map((card) => (
          <div key={card.label} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm text-gray-500">{card.label}</p>
              <span className="text-2xl">{card.icon}</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">{card.value}</p>
            <p className={`text-xs mt-1 font-medium ${card.changeColor}`}>{card.change}</p>
          </div>
        ))}
      </div>

      {/* Two-column section */}
      <div className="grid grid-cols-2 gap-6">
        {/* Recent Inquiries */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-semibold text-gray-800 text-sm">최근 문의</h2>
            <Link
              href="/admin/inquiries"
              className="text-xs font-medium hover:underline"
              style={{ color: '#2A5430' }}
            >
              전체 보기 →
            </Link>
          </div>
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-3">회사/이름</th>
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-3">유형</th>
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-3">날짜</th>
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-3">상태</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {RECENT_INQUIRIES.map((inq) => (
                <tr key={inq.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-sm text-gray-700 font-medium">{inq.company}</td>
                  <td className="px-4 py-3 text-sm text-gray-500">{inq.type}</td>
                  <td className="px-4 py-3 text-xs text-gray-400">{inq.date}</td>
                  <td className="px-4 py-3">
                    <InquiryStatusBadge status={inq.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Recent Posts */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-semibold text-gray-800 text-sm">최근 게시물</h2>
            <Link
              href="/admin/posts"
              className="text-xs font-medium hover:underline"
              style={{ color: '#2A5430' }}
            >
              전체 보기 →
            </Link>
          </div>
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-3">제목</th>
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-3">날짜</th>
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-3">상태</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {RECENT_POSTS.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-sm text-gray-700 max-w-[240px] truncate font-medium">
                    {post.title}
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-400 whitespace-nowrap">{post.date}</td>
                  <td className="px-4 py-3">
                    <PostStatusBadge status={post.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="font-semibold text-gray-800 text-sm mb-4">빠른 작업</h2>
        <div className="flex gap-4">
          <Link
            href="/admin/posts/new"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-semibold transition-all hover:opacity-90"
            style={{ backgroundColor: '#2A5430' }}
          >
            <span>📝</span>
            새 게시물 작성
          </Link>
          <Link
            href="/admin/inquiries"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border-2 transition-all hover:bg-gray-50"
            style={{ borderColor: '#2A5430', color: '#2A5430' }}
          >
            <span>📬</span>
            문의 확인하기
          </Link>
        </div>
      </div>
    </div>
  )
}
