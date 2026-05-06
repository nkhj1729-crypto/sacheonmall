'use client'

import { useState, useEffect } from 'react'
import { loadPublicNotices, type Notice } from '@/lib/notices'

export default function NoticePage() {
  const [notices,    setNotices]    = useState<Notice[]>([])
  const [loading,    setLoading]    = useState(true)
  const [expandedId, setExpandedId] = useState<string | null>(null)

  useEffect(() => {
    loadPublicNotices().then((data) => {
      setNotices(data)
      setLoading(false)
    })
  }, [])

  const sorted = [...notices].sort((a, b) => {
    if (a.pinned !== b.pinned) return a.pinned ? -1 : 1
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  })

  const isNew = (iso: string) => {
    const diff = Date.now() - new Date(iso).getTime()
    return diff < 1000 * 60 * 60 * 24 * 7   // 7일 이내
  }

  return (
    <>
      {/* HERO */}
      <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-forest-900" />
        <div className="relative z-10 container-wide text-center pt-20">
          <p className="section-label">CUSTOMER CENTER</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">공지사항</h1>
        </div>
      </section>

      {/* LIST */}
      <section className="section-padding bg-cream min-h-[60vh]">
        <div className="container-wide max-w-3xl">
          {loading ? (
            <div className="text-center py-20 text-gray-400">불러오는 중...</div>
          ) : sorted.length === 0 ? (
            <div className="text-center py-20 text-gray-400">등록된 공지사항이 없습니다.</div>
          ) : (
            <div className="divide-y divide-gray-200 bg-white rounded-2xl shadow-sm overflow-hidden">
              {sorted.map((n) => (
                <div key={n.id}>
                  {/* 목록 행 */}
                  <button
                    onClick={() => setExpandedId(expandedId === n.id ? null : n.id)}
                    className="w-full flex items-center justify-between px-6 py-5 hover:bg-forest-50 transition-colors duration-150 text-left"
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      {n.pinned && <span className="text-sm">📌</span>}
                      {isNew(n.createdAt) && (
                        <span className="text-xs font-bold text-forest-600 bg-forest-100 px-2 py-0.5 rounded-full flex-shrink-0">
                          NEW
                        </span>
                      )}
                      <p className="text-forest-900 font-medium text-sm md:text-base truncate">
                        {n.title}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 ml-4 flex-shrink-0">
                      <span className="text-xs text-gray-400">
                        {new Date(n.createdAt).toLocaleDateString('ko-KR')}
                      </span>
                      <span className={`text-gray-400 text-xs transition-transform duration-200 ${expandedId === n.id ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </div>
                  </button>

                  {/* 상세 내용 */}
                  {expandedId === n.id && (
                    <div className="px-6 pb-6 bg-forest-50/50 border-t border-forest-100">
                      <div className="pt-5 text-sm text-forest-800 leading-relaxed whitespace-pre-wrap">
                        {n.content}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
