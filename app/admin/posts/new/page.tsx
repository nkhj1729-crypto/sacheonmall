'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const CATEGORIES = ['제품정보', '사용후기', '숲체험', '회사소식', '피톤치드']

export default function NewPostPage() {
  const router = useRouter()
  const [form, setForm] = useState({
    title: '',
    category: '제품정보',
    status: '공개' as '공개' | '비공개',
    imageUrl: '',
    content: '',
    tags: '',
  })
  const [toast, setToast] = useState('')
  const [saving, setSaving] = useState(false)

  const showToast = (msg: string) => {
    setToast(msg)
    setTimeout(() => setToast(''), 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = (publish: boolean) => {
    if (!form.title.trim()) {
      showToast('제목을 입력해주세요')
      return
    }
    setSaving(true)
    setTimeout(() => {
      setSaving(false)
      if (publish) {
        showToast('게시물이 등록되었습니다')
        setTimeout(() => router.push('/admin/posts'), 1500)
      } else {
        showToast('임시저장 되었습니다')
      }
    }, 600)
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Form Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-8 py-6 border-b border-gray-100">
          <h2 className="font-semibold text-gray-800">게시물 정보</h2>
        </div>

        <div className="px-8 py-6 space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              제목 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="게시물 제목을 입력하세요"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#2A5430] transition-colors"
            />
          </div>

          {/* Category + Status row */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">카테고리</label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#2A5430] transition-colors bg-white"
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">공개 상태</label>
              <div className="flex items-center gap-6 mt-3">
                {(['공개', '비공개'] as const).map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="status"
                      value={opt}
                      checked={form.status === opt}
                      onChange={handleChange}
                      className="accent-[#2A5430]"
                    />
                    <span className="text-sm text-gray-700">{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Image URL + Preview */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">대표 이미지 URL</label>
            <input
              type="text"
              name="imageUrl"
              value={form.imageUrl}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#2A5430] transition-colors"
            />
            {form.imageUrl && (
              <div className="mt-3 rounded-xl overflow-hidden border border-gray-200 max-h-48">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={form.imageUrl}
                  alt="미리보기"
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="200" viewBox="0 0 800 200"><rect width="800" height="200" fill="%23f3f4f6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239ca3af" font-size="16">이미지를 불러올 수 없습니다</text></svg>'
                  }}
                />
              </div>
            )}
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">내용</label>
            <textarea
              name="content"
              value={form.content}
              onChange={handleChange}
              placeholder="게시물 내용을 입력하세요..."
              rows={16}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#2A5430] transition-colors resize-none leading-relaxed"
              style={{ minHeight: '400px' }}
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              태그
              <span className="text-xs text-gray-400 ml-2">쉼표(,)로 구분</span>
            </label>
            <input
              type="text"
              name="tags"
              value={form.tags}
              onChange={handleChange}
              placeholder="편백나무, 피톤치드, 아보리덤"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#2A5430] transition-colors"
            />
            {form.tags && (
              <div className="flex flex-wrap gap-2 mt-2">
                {form.tags.split(',').map((tag) => tag.trim()).filter(Boolean).map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#F0F4F0] text-[#2A5430]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 px-8 py-4 flex items-center justify-between">
        <Link
          href="/admin/posts"
          className="px-5 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
        >
          취소
        </Link>
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleSave(false)}
            disabled={saving}
            className="px-5 py-2.5 rounded-xl border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50"
          >
            임시저장
          </button>
          <button
            onClick={() => handleSave(true)}
            disabled={saving}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-white text-sm font-semibold transition-all hover:opacity-90 disabled:opacity-50"
            style={{ backgroundColor: '#2A5430' }}
          >
            {saving ? (
              <>
                <span className="animate-spin text-base">⏳</span>
                처리 중...
              </>
            ) : (
              <>
                <span>🚀</span>
                게시하기
              </>
            )}
          </button>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-xl text-sm z-50 flex items-center gap-2">
          <span>✅</span>
          {toast}
        </div>
      )}
    </div>
  )
}
