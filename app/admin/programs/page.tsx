'use client'

import { useState } from 'react'

type ProgramStatus = '운영중' | '준비중' | '종료'

interface Program {
  id: number
  name: string
  period: string
  description: string
  status: ProgramStatus
  reservationUrl: string
}

const INITIAL_PROGRAMS: Program[] = [
  { id: 1, name: '무공해 쑥캐기 체험', period: '봄 시즌 (3~5월)', description: '편백림 인근 청정 구역에서 직접 쑥을 캐는 체험.', status: '운영중', reservationUrl: '' },
  { id: 2, name: '편백숲 산책 프로그램', period: '연중 상시', description: '가이드 없이도 즐길 수 있는 자유 산책로.', status: '운영중', reservationUrl: '' },
  { id: 3, name: '피톤치드 테라피', period: '시즌 운영', description: '편백나무 사이에서 명상·호흡·스트레칭을 결합한 테라피.', status: '준비중', reservationUrl: '' },
]

const STATUS_STYLES: Record<ProgramStatus, string> = {
  운영중: 'bg-green-100 text-green-700',
  준비중: 'bg-gray-100 text-gray-600',
  종료: 'bg-gray-200 text-gray-500',
}

const STATUS_DOT: Record<ProgramStatus, string> = {
  운영중: 'bg-green-500',
  준비중: 'bg-yellow-500',
  종료: 'bg-gray-400',
}

let nextId = 4

export default function ProgramsPage() {
  const [programs, setPrograms] = useState<Program[]>(INITIAL_PROGRAMS)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editForm, setEditForm] = useState<Partial<Program>>({})
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null)
  const [addingNew, setAddingNew] = useState(false)
  const [newForm, setNewForm] = useState<Omit<Program, 'id'>>({
    name: '',
    period: '',
    description: '',
    status: '준비중',
    reservationUrl: '',
  })
  const [toast, setToast] = useState('')

  const showToast = (msg: string) => {
    setToast(msg)
    setTimeout(() => setToast(''), 3000)
  }

  const startEdit = (program: Program) => {
    setEditingId(program.id)
    setEditForm({ ...program })
  }

  const saveEdit = (id: number) => {
    setPrograms((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...editForm } as Program : p))
    )
    setEditingId(null)
    setEditForm({})
    showToast('프로그램이 수정되었습니다')
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditForm({})
  }

  const handleDelete = (id: number) => {
    setPrograms((prev) => prev.filter((p) => p.id !== id))
    setDeleteConfirm(null)
    showToast('프로그램이 삭제되었습니다')
  }

  const handleAddNew = () => {
    if (!newForm.name.trim()) {
      showToast('프로그램 이름을 입력해주세요')
      return
    }
    const newProgram: Program = { id: nextId++, ...newForm }
    setPrograms((prev) => [...prev, newProgram])
    setAddingNew(false)
    setNewForm({ name: '', period: '', description: '', status: '준비중', reservationUrl: '' })
    showToast('새 프로그램이 추가되었습니다')
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">총 {programs.length}개 프로그램</p>
        <button
          onClick={() => setAddingNew(true)}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-semibold transition-all hover:opacity-90"
          style={{ backgroundColor: '#2A5430' }}
        >
          <span>+</span> 프로그램 추가
        </button>
      </div>

      {/* Add New Form */}
      {addingNew && (
        <div className="bg-white rounded-xl shadow-sm border-2 p-6 space-y-4" style={{ borderColor: '#2A5430' }}>
          <h3 className="font-semibold text-gray-800 flex items-center gap-2">
            <span>🌲</span> 새 프로그램 추가
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">프로그램 이름 *</label>
              <input
                type="text"
                value={newForm.name}
                onChange={(e) => setNewForm((f) => ({ ...f, name: e.target.value }))}
                placeholder="예: 편백나무 체험 투어"
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#2A5430]"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">운영 기간</label>
              <input
                type="text"
                value={newForm.period}
                onChange={(e) => setNewForm((f) => ({ ...f, period: e.target.value }))}
                placeholder="예: 여름 시즌 (6~8월)"
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#2A5430]"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">프로그램 설명</label>
            <textarea
              value={newForm.description}
              onChange={(e) => setNewForm((f) => ({ ...f, description: e.target.value }))}
              placeholder="프로그램 내용을 간략히 설명해주세요"
              rows={3}
              className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#2A5430] resize-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">운영 상태</label>
              <select
                value={newForm.status}
                onChange={(e) => setNewForm((f) => ({ ...f, status: e.target.value as ProgramStatus }))}
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#2A5430] bg-white"
              >
                <option value="운영중">운영중</option>
                <option value="준비중">준비중</option>
                <option value="종료">종료</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">예약 링크 (네이버 카페 등)</label>
              <input
                type="text"
                value={newForm.reservationUrl}
                onChange={(e) => setNewForm((f) => ({ ...f, reservationUrl: e.target.value }))}
                placeholder="https://cafe.naver.com/..."
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#2A5430]"
              />
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <button
              onClick={handleAddNew}
              className="px-6 py-2.5 rounded-xl text-white text-sm font-semibold hover:opacity-90 transition-all"
              style={{ backgroundColor: '#2A5430' }}
            >
              추가하기
            </button>
            <button
              onClick={() => {
                setAddingNew(false)
                setNewForm({ name: '', period: '', description: '', status: '준비중', reservationUrl: '' })
              }}
              className="px-6 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
            >
              취소
            </button>
          </div>
        </div>
      )}

      {/* Programs List */}
      <div className="space-y-4">
        {programs.map((program) => {
          const isEditing = editingId === program.id
          return (
            <div
              key={program.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              {/* Card Header */}
              <div
                className="px-6 py-4 flex items-center justify-between"
                style={{ backgroundColor: '#F8F9FA' }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🌲</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editForm.name ?? ''}
                      onChange={(e) => setEditForm((f) => ({ ...f, name: e.target.value }))}
                      className="text-base font-bold text-gray-900 px-3 py-1.5 rounded-lg border border-[#2A5430] focus:outline-none"
                    />
                  ) : (
                    <h3 className="font-bold text-gray-900">{program.name}</h3>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  {isEditing ? (
                    <select
                      value={editForm.status ?? program.status}
                      onChange={(e) => setEditForm((f) => ({ ...f, status: e.target.value as ProgramStatus }))}
                      className={`text-xs px-3 py-1 rounded-full font-medium border-0 focus:outline-none cursor-pointer ${STATUS_STYLES[editForm.status as ProgramStatus ?? program.status]}`}
                    >
                      <option value="운영중">운영중</option>
                      <option value="준비중">준비중</option>
                      <option value="종료">종료</option>
                    </select>
                  ) : (
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${STATUS_STYLES[program.status]}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${STATUS_DOT[program.status]}`} />
                      {program.status}
                    </span>
                  )}
                  <div className="flex gap-2">
                    {isEditing ? (
                      <>
                        <button
                          onClick={() => saveEdit(program.id)}
                          className="text-xs px-4 py-1.5 rounded-lg text-white font-medium hover:opacity-90 transition-all"
                          style={{ backgroundColor: '#2A5430' }}
                        >
                          저장
                        </button>
                        <button
                          onClick={cancelEdit}
                          className="text-xs px-4 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
                        >
                          취소
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => startEdit(program)}
                          className="text-xs px-4 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-white transition-colors font-medium"
                        >
                          수정
                        </button>
                        <button
                          onClick={() => setDeleteConfirm(program.id)}
                          className="text-xs px-4 py-1.5 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 transition-colors font-medium"
                        >
                          삭제
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="px-6 py-5 space-y-4">
                {/* Period */}
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-sm">📅</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editForm.period ?? ''}
                      onChange={(e) => setEditForm((f) => ({ ...f, period: e.target.value }))}
                      placeholder="운영 기간"
                      className="text-sm px-3 py-1.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#2A5430] flex-1"
                    />
                  ) : (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#F0F4F0] text-[#2A5430]">
                      {program.period}
                    </span>
                  )}
                </div>

                {/* Description */}
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">프로그램 설명</label>
                  {isEditing ? (
                    <textarea
                      value={editForm.description ?? ''}
                      onChange={(e) => setEditForm((f) => ({ ...f, description: e.target.value }))}
                      rows={3}
                      className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#2A5430] resize-none"
                    />
                  ) : (
                    <p className="text-sm text-gray-600 leading-relaxed">{program.description}</p>
                  )}
                </div>

                {/* Reservation URL */}
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">
                    예약 링크 (네이버 카페 등)
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={isEditing ? (editForm.reservationUrl ?? '') : program.reservationUrl}
                      onChange={(e) =>
                        isEditing && setEditForm((f) => ({ ...f, reservationUrl: e.target.value }))
                      }
                      readOnly={!isEditing}
                      placeholder="https://cafe.naver.com/..."
                      className={`flex-1 px-3 py-2.5 rounded-xl border text-sm transition-colors ${
                        isEditing
                          ? 'border-[#2A5430] focus:outline-none bg-white'
                          : 'border-gray-200 bg-gray-50 text-gray-500 cursor-default'
                      }`}
                    />
                    {program.reservationUrl && !isEditing && (
                      <a
                        href={program.reservationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl text-white text-xs font-medium hover:opacity-90 transition-all"
                        style={{ backgroundColor: '#2A5430' }}
                      >
                        링크 열기
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {programs.length === 0 && (
        <div className="bg-white rounded-xl py-16 text-center text-gray-400 border border-gray-100">
          <p className="text-4xl mb-3">🌱</p>
          <p className="text-sm">등록된 프로그램이 없습니다</p>
          <button
            onClick={() => setAddingNew(true)}
            className="mt-4 text-sm font-medium hover:underline"
            style={{ color: '#2A5430' }}
          >
            첫 프로그램 추가하기 →
          </button>
        </div>
      )}

      {/* Delete Confirm Dialog */}
      {deleteConfirm !== null && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-sm w-full mx-4">
            <h3 className="font-bold text-gray-900 text-lg mb-2">프로그램 삭제</h3>
            <p className="text-sm text-gray-600 mb-6">
              이 프로그램을 삭제하시겠습니까? 삭제된 데이터는 복구할 수 없습니다.
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

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-xl text-sm z-50">
          {toast}
        </div>
      )}
    </div>
  )
}
