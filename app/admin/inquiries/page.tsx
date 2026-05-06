'use client'

import React, { useState, useEffect } from 'react'
import {
  loadInquiries, updateInquiryStatus, deleteInquiry, deleteInquiries,
  type Inquiry, type InquiryStatus,
} from '@/lib/inquiries'

const TYPE_COLORS: Record<string, string> = {
  '입점 제안':    'bg-blue-100 text-blue-700',
  'OEM/ODM':     'bg-purple-100 text-purple-700',
  '유통 파트너십': 'bg-orange-100 text-orange-700',
  '기타':         'bg-gray-100 text-gray-600',
}

const STATUS_STYLES: Record<InquiryStatus, string> = {
  미확인:   'bg-red-100 text-red-700',
  확인:     'bg-yellow-100 text-yellow-700',
  답변완료: 'bg-blue-100 text-blue-700',
}

type Tab = '전체' | InquiryStatus
const TABS: Tab[] = ['전체', '미확인', '확인', '답변완료']

export default function InquiriesPage() {
  const [inquiries,      setInquiries]      = useState<Inquiry[]>([])
  const [loading,        setLoading]        = useState(true)
  const [activeTab,      setActiveTab]      = useState<Tab>('전체')
  const [expandedId,     setExpandedId]     = useState<string | null>(null)
  const [selected,       setSelected]       = useState<string[]>([])
  const [deleteConfirm,  setDeleteConfirm]  = useState(false)
  const [toast,          setToast]          = useState('')

  useEffect(() => { fetch() }, [])

  async function fetch() {
    setLoading(true)
    setInquiries(await loadInquiries())
    setLoading(false)
  }

  function showToast(msg: string) {
    setToast(msg)
    setTimeout(() => setToast(''), 3000)
  }

  const filtered = activeTab === '전체'
    ? inquiries
    : inquiries.filter((i) => i.status === activeTab)

  const toggleSelect = (id: string) =>
    setSelected((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id])

  const toggleAll = () =>
    setSelected(selected.length === filtered.length ? [] : filtered.map((i) => i.id))

  async function handleStatusChange(id: string, status: InquiryStatus) {
    const ok = await updateInquiryStatus(id, status)
    if (ok) {
      setInquiries((prev) => prev.map((i) => i.id === id ? { ...i, status } : i))
    }
  }

  async function handleSingleDelete(id: string) {
    if (!window.confirm('이 문의를 삭제하시겠습니까?')) return
    const ok = await deleteInquiry(id)
    if (ok) { setInquiries((prev) => prev.filter((i) => i.id !== id)); showToast('삭제되었습니다') }
  }

  async function handleBulkDelete() {
    const ok = await deleteInquiries(selected)
    if (ok) {
      setInquiries((prev) => prev.filter((i) => !selected.includes(i.id)))
      setSelected([])
      setDeleteConfirm(false)
      showToast('삭제되었습니다')
    }
  }

  const tabCounts: Record<Tab, number> = {
    전체:     inquiries.length,
    미확인:   inquiries.filter((i) => i.status === '미확인').length,
    확인:     inquiries.filter((i) => i.status === '확인').length,
    답변완료: inquiries.filter((i) => i.status === '답변완료').length,
  }

  function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">문의하기 관리</h1>
        <button onClick={fetch} className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
          🔄 새로고침
        </button>
      </div>

      {loading ? (
        <div className="text-center py-20 text-gray-400">불러오는 중...</div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-gray-100">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setSelected([]) }}
                className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-all border-b-2 ${
                  activeTab === tab
                    ? 'border-[#2A5430] text-[#2A5430]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
                <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold ${activeTab === tab ? 'bg-[#2A5430] text-white' : 'bg-gray-100 text-gray-500'}`}>
                  {tabCounts[tab]}
                </span>
              </button>
            ))}
          </div>

          {/* Bulk action bar */}
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
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left w-10">
                    <input type="checkbox" checked={selected.length === filtered.length && filtered.length > 0} onChange={toggleAll} className="rounded border-gray-300" />
                  </th>
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase px-4 py-3">문의유형</th>
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase px-4 py-3">회사/이름</th>
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase px-4 py-3">연락처</th>
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase px-4 py-3">이메일</th>
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase px-4 py-3">접수일</th>
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase px-4 py-3">상태</th>
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase px-4 py-3">액션</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filtered.map((inq) => (
                  <React.Fragment key={inq.id}>
                    <tr
                      className={`hover:bg-gray-50 transition-colors cursor-pointer ${expandedId === inq.id ? 'bg-blue-50/30' : ''}`}
                      onClick={() => setExpandedId(expandedId === inq.id ? null : inq.id)}
                    >
                      <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                        <input type="checkbox" checked={selected.includes(inq.id)} onChange={() => toggleSelect(inq.id)} className="rounded border-gray-300" />
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${TYPE_COLORS[inq.inquiryType] ?? 'bg-gray-100 text-gray-600'}`}>
                          {inq.inquiryType}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-sm font-medium text-gray-800">{inq.company || inq.name}</p>
                        {inq.company && <p className="text-xs text-gray-500">{inq.name}</p>}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600 whitespace-nowrap">{inq.phone}</td>
                      <td className="px-4 py-3 text-xs text-gray-500">{inq.email}</td>
                      <td className="px-4 py-3 text-xs text-gray-400 whitespace-nowrap">{formatDate(inq.createdAt)}</td>
                      <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                        <select
                          value={inq.status}
                          onChange={(e) => handleStatusChange(inq.id, e.target.value as InquiryStatus)}
                          className={`text-xs px-2 py-1 rounded-full font-medium border-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2A5430] ${STATUS_STYLES[inq.status]}`}
                        >
                          <option value="미확인">미확인</option>
                          <option value="확인">확인</option>
                          <option value="답변완료">답변완료</option>
                        </select>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                        <div className="flex gap-2">
                          <button
                            onClick={() => setExpandedId(expandedId === inq.id ? null : inq.id)}
                            className="text-xs px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors font-medium"
                          >
                            {expandedId === inq.id ? '접기 ▲' : '상세 ▼'}
                          </button>
                          <button
                            onClick={() => handleSingleDelete(inq.id)}
                            className="text-xs px-2 py-1.5 rounded-lg text-red-500 hover:bg-red-50 transition-colors"
                          >
                            삭제
                          </button>
                        </div>
                      </td>
                    </tr>

                    {expandedId === inq.id && (
                      <tr key={`detail-${inq.id}`} className="bg-blue-50/20">
                        <td colSpan={8} className="px-8 py-5">
                          <div className="bg-white rounded-xl p-5 border border-blue-100 shadow-sm">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h4 className="font-semibold text-gray-800 text-sm mb-0.5">
                                  {inq.company ? `${inq.company} · ${inq.name}` : inq.name}
                                </h4>
                                <p className="text-xs text-gray-400">{inq.email} · {inq.phone} · {formatDate(inq.createdAt)}</p>
                              </div>
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${TYPE_COLORS[inq.inquiryType] ?? 'bg-gray-100 text-gray-600'}`}>
                                {inq.inquiryType}
                              </span>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-4">
                              <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">{inq.message}</p>
                            </div>
                            <div className="mt-4 flex items-center gap-3 flex-wrap">
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
          </div>

          {filtered.length === 0 && (
            <div className="py-16 text-center text-gray-400">
              <p className="text-4xl mb-3">📭</p>
              <p className="text-sm">문의가 없습니다</p>
            </div>
          )}
        </div>
      )}

      {/* Bulk Delete Confirm */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-sm w-full mx-4">
            <h3 className="font-bold text-gray-900 text-lg mb-2">선택 항목 삭제</h3>
            <p className="text-sm text-gray-600 mb-6">{selected.length}개의 문의를 삭제하시겠습니까? 되돌릴 수 없습니다.</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteConfirm(false)} className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">취소</button>
              <button onClick={handleBulkDelete} className="flex-1 py-2.5 rounded-xl bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-colors">삭제하기</button>
            </div>
          </div>
        </div>
      )}

      {toast && (
        <div className="fixed bottom-6 right-6 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-xl text-sm z-50">{toast}</div>
      )}
    </div>
  )
}
