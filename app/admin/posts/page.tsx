'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Post {
  id: number
  title: string
  category: string
  date: string
  status: '공개' | '비공개'
  views: number
}

const INITIAL_POSTS: Post[] = [
  { id: 1, title: '편백나무 심재가 잎보다 피톤치드가 강한 이유', category: '제품정보', date: '2026.03.15', status: '공개', views: 342 },
  { id: 2, title: '아보리덤 탈모 샴푸 3개월 사용 후기 모음', category: '사용후기', date: '2026.02.28', status: '공개', views: 891 },
  { id: 3, title: '봄 쑥캐기 체험 프로그램 신청 안내 (2026년)', category: '숲체험', date: '2026.02.10', status: '공개', views: 456 },
  { id: 4, title: 'GMP 인증 시설 업그레이드 완료 안내', category: '회사소식', date: '2026.01.22', status: '공개', views: 189 },
  { id: 5, title: '피톤치드의 과학적 효능 - 연구 자료 정리', category: '피톤치드', date: '2026.01.10', status: '비공개', views: 67 },
  { id: 6, title: '편백 심재오일 특허 취득 과정 이야기', category: '회사소식', date: '2025.12.05', status: '공개', views: 234 },
  { id: 7, title: '아보리덤 편백 치약 출시 안내', category: '제품정보', date: '2025.11.20', status: '공개', views: 512 },
  { id: 8, title: '가을 편백숲 산책 포토 갤러리', category: '숲체험', date: '2025.10.15', status: '공개', views: 1203 },
]

const CATEGORY_COLORS: Record<string, string> = {
  제품정보: 'bg-blue-100 text-blue-700',
  사용후기: 'bg-purple-100 text-purple-700',
  숲체험: 'bg-green-100 text-green-700',
  회사소식: 'bg-orange-100 text-orange-700',
  피톤치드: 'bg-teal-100 text-teal-700',
}

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS)
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<number[]>([])
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null)

  const filtered = posts.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.category.includes(search)
  )

  const toggleSelect = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  const toggleAll = () => {
    if (selected.length === filtered.length) {
      setSelected([])
    } else {
      setSelected(filtered.map((p) => p.id))
    }
  }

  const toggleStatus = (id: number) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, status: p.status === '공개' ? '비공개' : '공개' } : p
      )
    )
  }

  const handleDelete = (id: number) => {
    setPosts((prev) => prev.filter((p) => p.id !== id))
    setSelected((prev) => prev.filter((x) => x !== id))
    setDeleteConfirm(null)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 mt-0.5">총 {posts.length}개의 게시물</p>
        </div>
        <Link
          href="/admin/posts/new"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-semibold transition-all hover:opacity-90"
          style={{ backgroundColor: '#2A5430' }}
        >
          <span>+</span> 새 게시물
        </Link>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          <input
            type="text"
            placeholder="제목 또는 카테고리로 검색..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#2A5430] transition-colors"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 text-left">
                <input
                  type="checkbox"
                  checked={selected.length === filtered.length && filtered.length > 0}
                  onChange={toggleAll}
                  className="rounded border-gray-300"
                />
              </th>
              <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-3">제목</th>
              <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-3">카테고리</th>
              <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-3">작성일</th>
              <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-3">상태</th>
              <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-3">조회수</th>
              <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-3">액션</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filtered.map((post) => (
              <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3">
                  <input
                    type="checkbox"
                    checked={selected.includes(post.id)}
                    onChange={() => toggleSelect(post.id)}
                    className="rounded border-gray-300"
                  />
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 font-medium max-w-[320px]">
                  <span className="line-clamp-1">{post.title}</span>
                </td>
                <td className="px-4 py-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${CATEGORY_COLORS[post.category] ?? 'bg-gray-100 text-gray-600'}`}>
                    {post.category}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-500 whitespace-nowrap">{post.date}</td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => toggleStatus(post.id)}
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-all hover:opacity-80 cursor-pointer ${
                      post.status === '공개'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                    title="클릭하여 상태 변경"
                  >
                    {post.status === '공개' ? '● ' : '○ '}{post.status}
                  </button>
                </td>
                <td className="px-4 py-3 text-sm text-gray-500">{post.views.toLocaleString()}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/admin/posts/new?id=${post.id}`}
                      className="text-xs px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors font-medium"
                    >
                      수정
                    </Link>
                    <button
                      onClick={() => setDeleteConfirm(post.id)}
                      className="text-xs px-3 py-1.5 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 transition-colors font-medium"
                    >
                      삭제
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <div className="py-16 text-center text-gray-400">
            <p className="text-4xl mb-3">📭</p>
            <p className="text-sm">검색 결과가 없습니다</p>
          </div>
        )}

        {/* Pagination */}
        <div className="px-4 py-3 border-t border-gray-100 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            {selected.length > 0 && `${selected.length}개 선택됨 · `}
            총 {filtered.length}개
          </p>
          <div className="flex items-center gap-1">
            <button className="px-3 py-1.5 text-xs rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40" disabled>
              이전
            </button>
            <button
              className="px-3 py-1.5 text-xs rounded-lg text-white font-medium"
              style={{ backgroundColor: '#2A5430' }}
            >
              1
            </button>
            <button className="px-3 py-1.5 text-xs rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-1.5 text-xs rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50">
              다음
            </button>
          </div>
        </div>
      </div>

      {/* Delete Confirm Dialog */}
      {deleteConfirm !== null && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-sm w-full mx-4">
            <h3 className="font-bold text-gray-900 text-lg mb-2">게시물 삭제</h3>
            <p className="text-sm text-gray-600 mb-6">
              이 게시물을 삭제하시겠습니까? 삭제된 게시물은 복구할 수 없습니다.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                취소
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm)}
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
