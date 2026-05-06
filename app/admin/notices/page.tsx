'use client'

import { useState, useEffect } from 'react'
import {
  loadNotices, addNotice, updateNotice, deleteNotice,
  type Notice,
} from '@/lib/notices'

type FormState = Omit<Notice, 'id'>

const EMPTY: FormState = {
  title: '',
  content: '',
  pinned: false,
  visible: true,
  createdAt: new Date().toISOString(),
}

export default function AdminNoticesPage() {
  const [notices,    setNotices]    = useState<Notice[]>([])
  const [loading,    setLoading]    = useState(true)
  const [modalOpen,  setModalOpen]  = useState(false)
  const [editingId,  setEditingId]  = useState<string | null>(null)
  const [form,       setForm]       = useState<FormState>(EMPTY)
  const [saving,     setSaving]     = useState(false)
  const [formError,  setFormError]  = useState('')
  const [toast,      setToast]      = useState('')

  useEffect(() => { fetch() }, [])

  async function fetch() {
    setLoading(true)
    setNotices(await loadNotices())
    setLoading(false)
  }

  function showToast(msg: string) {
    setToast(msg)
    setTimeout(() => setToast(''), 3000)
  }

  function openAdd() {
    setEditingId(null)
    setForm({ ...EMPTY, createdAt: new Date().toISOString() })
    setFormError('')
    setModalOpen(true)
  }

  function openEdit(n: Notice) {
    setEditingId(n.id)
    setForm({ title: n.title, content: n.content, pinned: n.pinned, visible: n.visible, createdAt: n.createdAt })
    setFormError('')
    setModalOpen(true)
  }

  function closeModal() {
    setModalOpen(false)
    setEditingId(null)
    setForm(EMPTY)
    setFormError('')
  }

  async function handleSave() {
    if (!form.title.trim()) { setFormError('제목을 입력해주세요.'); return }
    if (!form.content.trim()) { setFormError('내용을 입력해주세요.'); return }
    setSaving(true)
    if (editingId) {
      const ok = await updateNotice(editingId, form)
      if (ok) {
        setNotices((prev) => prev.map((n) => n.id === editingId ? { ...n, ...form } : n))
        showToast('수정되었습니다 ✓')
        closeModal()
      } else { setFormError('저장 중 오류가 발생했습니다.') }
    } else {
      const created = await addNotice(form)
      if (created) {
        setNotices((prev) => [created, ...prev])
        showToast('등록되었습니다 ✓')
        closeModal()
      } else { setFormError('저장 중 오류가 발생했습니다.') }
    }
    setSaving(false)
  }

  async function handleDelete(id: string) {
    if (!window.confirm('삭제하시겠습니까?')) return
    const ok = await deleteNotice(id)
    if (ok) { setNotices((prev) => prev.filter((n) => n.id !== id)); showToast('삭제되었습니다') }
  }

  async function handleToggle(n: Notice, field: 'visible' | 'pinned') {
    const ok = await updateNotice(n.id, { [field]: !n[field] })
    if (ok) {
      setNotices((prev) => prev.map((x) => x.id === n.id ? { ...x, [field]: !n[field] } : x))
    }
  }

  const sorted = [...notices].sort((a, b) => {
    if (a.pinned !== b.pinned) return a.pinned ? -1 : 1
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">공지사항 관리</h1>
        <button
          onClick={openAdd}
          className="flex items-center gap-2 bg-[#2A5430] hover:bg-[#1E3D22] text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
        >
          <span className="text-lg leading-none">+</span> 공지 작성
        </button>
      </div>

      {loading ? (
        <div className="text-center py-20 text-gray-400">불러오는 중...</div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="min-w-full bg-white text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">고정</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">제목</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">작성일</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">공개</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">액션</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {sorted.map((n) => (
                <tr key={n.id} className={`hover:bg-gray-50 transition-colors ${!n.visible ? 'opacity-50' : ''}`}>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => handleToggle(n, 'pinned')}
                      title={n.pinned ? '고정 해제' : '상단 고정'}
                      className={`text-lg transition-colors ${n.pinned ? 'text-amber-400' : 'text-gray-300 hover:text-amber-300'}`}
                    >
                      📌
                    </button>
                  </td>
                  <td className="px-4 py-3">
                    <p className="font-medium text-gray-900 truncate max-w-xs">{n.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">{n.content}</p>
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-400 whitespace-nowrap">
                    {new Date(n.createdAt).toLocaleDateString('ko-KR')}
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => handleToggle(n, 'visible')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${n.visible ? 'bg-green-500' : 'bg-gray-300'}`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${n.visible ? 'translate-x-6' : 'translate-x-1'}`} />
                    </button>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex gap-2">
                      <button onClick={() => openEdit(n)} className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">수정</button>
                      <button onClick={() => handleDelete(n.id)} className="px-3 py-1.5 text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors">삭제</button>
                    </div>
                  </td>
                </tr>
              ))}
              {sorted.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-12 text-center text-gray-400 text-sm">
                    등록된 공지사항이 없습니다.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 overflow-y-auto py-6"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}
        >
          <div className="relative z-10 w-full max-w-2xl mx-4 bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">{editingId ? '공지 수정' : '공지 작성'}</h2>
              <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 text-2xl leading-none">×</button>
            </div>
            <div className="px-6 py-5 space-y-5">
              {formError && <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-lg border border-red-100">{formError}</div>}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">제목 <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                  placeholder="공지사항 제목"
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#2A5430] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">내용 <span className="text-red-500">*</span></label>
                <textarea
                  value={form.content}
                  onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))}
                  rows={10}
                  placeholder="공지 내용을 입력해주세요."
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#2A5430] transition-colors resize-none"
                />
              </div>
              <div className="flex gap-8">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={form.pinned} onChange={(e) => setForm((f) => ({ ...f, pinned: e.target.checked }))} className="accent-[#2A5430] w-4 h-4" />
                  <span className="text-sm text-gray-700">📌 상단 고정</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={form.visible} onChange={(e) => setForm((f) => ({ ...f, visible: e.target.checked }))} className="accent-[#2A5430] w-4 h-4" />
                  <span className="text-sm text-gray-700">공개</span>
                </label>
              </div>
            </div>
            <div className="flex justify-end gap-3 px-6 py-4 border-t border-gray-100">
              <button onClick={closeModal} className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">취소</button>
              <button onClick={handleSave} disabled={saving} className="px-6 py-2.5 text-sm font-semibold text-white bg-[#2A5430] hover:bg-[#1E3D22] rounded-lg transition-colors disabled:opacity-60">
                {saving ? '저장 중...' : '저장하기'}
              </button>
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
