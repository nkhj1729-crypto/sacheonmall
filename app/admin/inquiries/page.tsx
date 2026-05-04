'use client'

import React, { useState } from 'react'

type InquiryStatus = '미확인' | '확인' | '답변완료'

interface Inquiry {
  id: number
  type: string
  company: string
  name: string
  phone: string
  email: string
  date: string
  status: InquiryStatus
  content: string
}

const INITIAL_INQUIRIES: Inquiry[] = [
  { id: 1, type: '입점 제안', company: '(주)그린라이프', name: '김민준', phone: '010-1234-5678', email: 'kim@greenlife.co.kr', date: '2026.03.28', status: '미확인', content: '안녕하세요. 저희는 친환경 제품 전문 유통사입니다. 아보리덤 제품 라인 전체를 취급하고 싶습니다. 단가 및 공급 조건에 대해 상담을 요청드립니다.' },
  { id: 2, type: 'OEM/ODM', company: '나눔코스메틱', name: '이서연', phone: '010-9876-5432', email: 'lee@nanum.com', date: '2026.03.25', status: '확인', content: '편백 심재오일을 활용한 OEM 제품 제조 가능 여부를 문의드립니다. 당사 브랜드로 출시를 검토 중이며, MOQ 및 제조 단가를 알고 싶습니다.' },
  { id: 3, type: '유통 파트너십', company: '자연愛마트', name: '박준혁', phone: '010-5555-7777', email: 'park@jayon.kr', date: '2026.03.20', status: '답변완료', content: '저희 자연愛마트에서 사천편백림 제품을 취급하고 싶습니다. 오프라인 매장 20개점을 운영 중이며, 건강기능식품 및 뷰티 카테고리를 강화하려 합니다.' },
  { id: 4, type: '입점 제안', company: '헬스나라', name: '최유진', phone: '010-3333-4444', email: 'choi@healthnara.com', date: '2026.03.18', status: '미확인', content: '건강기능식품 전문몰 헬스나라입니다. 구강케어 제품 입점 제안드립니다. 월 방문자 50만명 이상의 건강 전문 커머스에서 아보리덤 치약 및 구강케어 라인을 함께 소개하고 싶습니다.' },
  { id: 5, type: '기타', company: '', name: '정다은', phone: '010-2222-8888', email: 'jung@gmail.com', date: '2026.03.15', status: '답변완료', content: '아보리덤 샴푸 제품의 성분 문의드립니다. 황산염(SLS) 완전 무첨가인지 확인 부탁드립니다. 아이 두피에도 사용 가능한지 알고 싶습니다.' },
  { id: 6, type: 'OEM/ODM', company: '비욘드뷰티', name: '강태양', phone: '010-7777-1111', email: 'kang@beyond.co.kr', date: '2026.03.10', status: '확인', content: '당사 브랜드로 편백 스킨케어 라인 ODM 제조를 희망합니다. 세럼, 크림, 토너 3종 패키지로 기획 중이며 월 5,000개 수량으로 시작하고 싶습니다.' },
]

const TYPE_COLORS: Record<string, string> = {
  '입점 제안': 'bg-blue-100 text-blue-700',
  'OEM/ODM': 'bg-purple-100 text-purple-700',
  '유통 파트너십': 'bg-orange-100 text-orange-700',
  '기타': 'bg-gray-100 text-gray-600',
}

const STATUS_STYLES: Record<InquiryStatus, string> = {
  미확인: 'bg-red-100 text-red-700',
  확인: 'bg-yellow-100 text-yellow-700',
  답변완료: 'bg-blue-100 text-blue-700',
}

type Tab = '전체' | InquiryStatus

const TABS: Tab[] = ['전체', '미확인', '확인', '답변완료']

export default function InquiriesPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>(INITIAL_INQUIRIES)
  const [activeTab, setActiveTab] = useState<Tab>('전체')
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [selected, setSelected] = useState<number[]>([])
  const [deleteConfirm, setDeleteConfirm] = useState(false)

  const filtered = activeTab === '전체'
    ? inquiries
    : inquiries.filter((i) => i.status === activeTab)

  const toggleSelect = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  const toggleAll = () => {
    if (selected.length === filtered.length) setSelected([])
    else setSelected(filtered.map((i) => i.id))
  }

  const handleStatusChange = (id: number, status: InquiryStatus) => {
    setInquiries((prev) =>
      prev.map((i) => (i.id === id ? { ...i, status } : i))
    )
  }

  const handleBulkDelete = () => {
    setInquiries((prev) => prev.filter((i) => !selected.includes(i.id)))
    setSelected([])
    setDeleteConfirm(false)
  }

  const tabCounts: Record<Tab, number> = {
    전체: inquiries.length,
    미확인: inquiries.filter((i) => i.status === '미확인').length,
    확인: inquiries.filter((i) => i.status === '확인').length,
    답변완료: inquiries.filter((i) => i.status === '답변완료').length,
  }

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex border-b border-gray-100">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab)
                setSelected([])
              }}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-all border-b-2 ${
                activeTab === tab
                  ? 'border-[#2A5430] text-[#2A5430]'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
              <span
                className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold ${
                  activeTab === tab
                    ? 'bg-[#2A5430] text-white'
                    : 'bg-gray-100 text-gray-500'
                }`}
              >
                {tabCounts[tab]}
              </span>
            </button>
          ))}
        </div>

        {/* Bulk actions */}
        {selected.length > 0 && (
          <div className="px-4 py-2 bg-blue-50 border-b border-blue-100 flex items-center justify-between">
            <span className="text-sm text-blue-700 font-medium">{selected.length}개 선택됨</span>
            <button
              onClick={() => setDeleteConfirm(true)}
              className="text-xs px-3 py-1.5 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition-colors"
            >
              선택 삭제
            </button>
          </div>
        )}

        {/* Table */}
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 text-left w-10">
                <input
                  type="checkbox"
                  checked={selected.length === filtered.length && filtered.length > 0}
                  onChange={toggleAll}
                  className="rounded border-gray-300"
                />
              </th>
              <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-3">문의유형</th>
              <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-3">회사명/이름</th>
              <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-3">연락처</th>
              <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-3">이메일</th>
              <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-3">접수일</th>
              <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-3">상태</th>
              <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-3">액션</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filtered.map((inq) => (
              <React.Fragment key={inq.id}>
                <tr
                  className={`hover:bg-gray-50 transition-colors cursor-pointer ${
                    expandedId === inq.id ? 'bg-blue-50/30' : ''
                  }`}
                  onClick={() => setExpandedId(expandedId === inq.id ? null : inq.id)}
                >
                  <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                    <input
                      type="checkbox"
                      checked={selected.includes(inq.id)}
                      onChange={() => toggleSelect(inq.id)}
                      className="rounded border-gray-300"
                    />
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${TYPE_COLORS[inq.type] ?? 'bg-gray-100 text-gray-600'}`}>
                      {inq.type}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-sm font-medium text-gray-800">{inq.company || inq.name}</p>
                    {inq.company && <p className="text-xs text-gray-500">{inq.name}</p>}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600 whitespace-nowrap">{inq.phone}</td>
                  <td className="px-4 py-3 text-sm text-gray-500 text-xs">{inq.email}</td>
                  <td className="px-4 py-3 text-xs text-gray-400 whitespace-nowrap">{inq.date}</td>
                  <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                    <select
                      value={inq.status}
                      onChange={(e) => handleStatusChange(inq.id, e.target.value as InquiryStatus)}
                      className={`text-xs px-2 py-1 rounded-full font-medium border-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#2A5430] ${STATUS_STYLES[inq.status]}`}
                    >
                      <option value="미확인">미확인</option>
                      <option value="확인">확인</option>
                      <option value="답변완료">답변완료</option>
                    </select>
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setExpandedId(expandedId === inq.id ? null : inq.id)
                      }}
                      className="text-xs px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors font-medium"
                    >
                      {expandedId === inq.id ? '접기 ▲' : '상세 ▼'}
                    </button>
                  </td>
                </tr>

                {/* Expanded Detail Row */}
                {expandedId === inq.id && (
                  <tr key={`detail-${inq.id}`} className="bg-blue-50/20">
                    <td colSpan={8} className="px-8 py-5">
                      <div className="bg-white rounded-xl p-5 border border-blue-100 shadow-sm">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-semibold text-gray-800 text-sm mb-0.5">
                              {inq.company ? `${inq.company} · ${inq.name}` : inq.name}
                            </h4>
                            <p className="text-xs text-gray-400">{inq.email} · {inq.phone} · 접수일: {inq.date}</p>
                          </div>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${TYPE_COLORS[inq.type] ?? 'bg-gray-100 text-gray-600'}`}>
                            {inq.type}
                          </span>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-4">
                          <p className="text-sm text-gray-700 leading-relaxed">{inq.content}</p>
                        </div>
                        <div className="mt-4 flex items-center gap-3">
                          <span className="text-xs text-gray-500 font-medium">상태 변경:</span>
                          {(['미확인', '확인', '답변완료'] as InquiryStatus[]).map((s) => (
                            <button
                              key={s}
                              onClick={() => handleStatusChange(inq.id, s)}
                              className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all ${
                                inq.status === s
                                  ? STATUS_STYLES[s] + ' ring-2 ring-offset-1 ring-current'
                                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                              }`}
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <div className="py-16 text-center text-gray-400">
            <p className="text-4xl mb-3">📭</p>
            <p className="text-sm">해당 탭에 문의가 없습니다</p>
          </div>
        )}
      </div>

      {/* Bulk Delete Confirm */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-sm w-full mx-4">
            <h3 className="font-bold text-gray-900 text-lg mb-2">선택 항목 삭제</h3>
            <p className="text-sm text-gray-600 mb-6">
              선택한 {selected.length}개의 문의를 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteConfirm(false)}
                className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                취소
              </button>
              <button
                onClick={handleBulkDelete}
                className="flex-1 py-2.5 rounded-xl bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-colors"
              >
                삭제하기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
