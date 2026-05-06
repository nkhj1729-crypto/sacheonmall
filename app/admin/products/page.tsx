'use client'

import { useState, useEffect } from 'react'
import {
  loadAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  type Product,
  type ProductCategory,
  type ProductBadge,
} from '@/lib/products'

const CATEGORIES: ProductCategory[] = ['편백수/오일', '생활용품', '구강/바디케어']
const BADGES: Array<ProductBadge> = [null, 'Best', '특허', 'New', '인기 1위', 'SALE']

const CATEGORY_COLORS: Record<ProductCategory, string> = {
  '편백수/오일': 'bg-teal-100 text-teal-700',
  '생활용품': 'bg-blue-100 text-blue-700',
  '구강/바디케어': 'bg-purple-100 text-purple-700',
}

const BADGE_COLORS: Record<string, string> = {
  'Best': 'bg-green-100 text-green-700',
  '특허': 'bg-yellow-100 text-yellow-700',
  'New': 'bg-teal-100 text-teal-700',
  '인기 1위': 'bg-amber-100 text-amber-700',
  'SALE': 'bg-red-100 text-red-700',
}

type FormState = Omit<Product, 'id'>

const EMPTY_FORM: FormState = {
  name: '',
  tagline: '',
  desc: '',
  category: '편백수/오일',
  image: '',
  badge: null,
  storeUrl: '',
  visible: true,
  order: 0,
}

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [form, setForm] = useState<FormState>(EMPTY_FORM)
  const [formError, setFormError] = useState('')
  const [saving, setSaving] = useState(false)
  const [toast, setToast] = useState('')

  useEffect(() => {
    fetchProducts()
  }, [])

  async function fetchProducts() {
    setLoading(true)
    const data = await loadAllProducts()
    setProducts(data)
    setLoading(false)
  }

  async function handleSeedProducts(force = false) {
    const msg = force
      ? '기존 제품을 모두 삭제하고 실제 제품 11개로 재설정하시겠습니까?'
      : '실제 제품 11개를 Firestore에 등록하시겠습니까?'
    if (!window.confirm(msg)) return
    setSaving(true)
    try {
      const url = force ? '/api/seed-products?force=true' : '/api/seed-products'
      const res = await fetch(url, { method: 'POST' })
      const json = await res.json()
      showToast(json.message)
      await fetchProducts()
    } catch {
      showToast('오류가 발생했습니다.')
    }
    setSaving(false)
  }

  function showToast(msg: string) {
    setToast(msg)
    setTimeout(() => setToast(''), 4000)
  }

  function openAddModal() {
    setEditingId(null)
    setForm({ ...EMPTY_FORM, order: products.length + 1 })
    setFormError('')
    setModalOpen(true)
  }

  function openEditModal(product: Product) {
    setEditingId(product.id)
    setForm({
      name: product.name,
      tagline: product.tagline,
      desc: product.desc,
      category: product.category,
      image: product.image,
      badge: product.badge,
      storeUrl: product.storeUrl,
      visible: product.visible,
      order: product.order,
    })
    setFormError('')
    setModalOpen(true)
  }

  function closeModal() {
    setModalOpen(false)
    setEditingId(null)
    setForm(EMPTY_FORM)
    setFormError('')
  }

  async function handleSave() {
    if (!form.name.trim()) { setFormError('제품명을 입력해주세요.'); return }
    setSaving(true)
    if (editingId !== null) {
      const ok = await updateProduct(editingId, form)
      if (ok) {
        setProducts((prev) => prev.map((p) => p.id === editingId ? { ...p, ...form } : p))
        showToast('수정되었습니다 ✓')
        closeModal()
      } else {
        setFormError('저장 중 오류가 발생했습니다.')
      }
    } else {
      const newProduct = await addProduct(form)
      if (newProduct) {
        setProducts((prev) => [...prev, newProduct].sort((a, b) => a.order - b.order))
        showToast('추가되었습니다 ✓')
        closeModal()
      } else {
        setFormError('저장 중 오류가 발생했습니다.')
      }
    }
    setSaving(false)
  }

  async function handleDelete(id: string) {
    if (!window.confirm('정말 삭제하시겠습니까?')) return
    const ok = await deleteProduct(id)
    if (ok) {
      setProducts((prev) => prev.filter((p) => p.id !== id))
      showToast('삭제되었습니다')
    }
  }

  async function handleToggleVisible(product: Product) {
    const ok = await updateProduct(product.id, { visible: !product.visible })
    if (ok) {
      setProducts((prev) =>
        prev.map((p) => p.id === product.id ? { ...p, visible: !p.visible } : p)
      )
      showToast(!product.visible ? '공개로 변경' : '비공개로 변경')
    }
  }

  async function handleMove(index: number, dir: 'up' | 'down') {
    const sorted = [...products].sort((a, b) => a.order - b.order)
    const target = dir === 'up' ? index - 1 : index + 1
    if (target < 0 || target >= sorted.length) return
    const curr = sorted[index]
    const swap = sorted[target]
    await Promise.all([
      updateProduct(curr.id, { order: swap.order }),
      updateProduct(swap.id, { order: curr.order }),
    ])
    setProducts((prev) =>
      prev.map((p) => {
        if (p.id === curr.id) return { ...p, order: swap.order }
        if (p.id === swap.id) return { ...p, order: curr.order }
        return p
      }).sort((a, b) => a.order - b.order)
    )
  }

  const sortedProducts = [...products].sort((a, b) => a.order - b.order)
  const showImagePreview = form.image.startsWith('http')

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">제품 관리</h1>
        <div className="flex gap-3">
          {products.length === 0 ? (
            <button
              onClick={() => handleSeedProducts(false)}
              disabled={saving}
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors disabled:opacity-60"
            >
              🌱 제품 등록
            </button>
          ) : (
            <button
              onClick={() => handleSeedProducts(true)}
              disabled={saving}
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors disabled:opacity-60"
            >
              🔄 데이터 재설정
            </button>
          )}
          <button
            onClick={openAddModal}
            className="flex items-center gap-2 bg-[#2A5430] hover:bg-[#1E3D22] text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
          >
            <span className="text-lg leading-none">+</span> 새 제품 추가
          </button>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-20 text-gray-400">불러오는 중...</div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="min-w-full bg-white text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap">순서</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">이미지</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">제품명</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap">카테고리</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">배지</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">공개</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">액션</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {sortedProducts.map((product, index) => (
                <tr key={product.id} className={`hover:bg-gray-50 transition-colors ${!product.visible ? 'opacity-50' : ''}`}>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex flex-col gap-0.5">
                      <button onClick={() => handleMove(index, 'up')} disabled={index === 0} className="text-gray-400 hover:text-gray-700 disabled:opacity-20 text-xs p-0.5">▲</button>
                      <span className="text-center text-gray-600 font-medium text-xs">{product.order}</span>
                      <button onClick={() => handleMove(index, 'down')} disabled={index === sortedProducts.length - 1} className="text-gray-400 hover:text-gray-700 disabled:opacity-20 text-xs p-0.5">▼</button>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={product.image || 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=200'}
                      alt={product.name}
                      className="w-[60px] h-[60px] object-cover rounded-lg border border-gray-200"
                    />
                  </td>
                  <td className="px-4 py-3">
                    <p className="font-semibold text-gray-900">{product.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5 italic">{product.tagline}</p>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${CATEGORY_COLORS[product.category]}`}>
                      {product.category}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {product.badge ? (
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${BADGE_COLORS[product.badge] ?? 'bg-gray-100 text-gray-600'}`}>
                        {product.badge}
                      </span>
                    ) : (
                      <span className="text-gray-300 text-xs">없음</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => handleToggleVisible(product)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${product.visible ? 'bg-green-500' : 'bg-gray-300'}`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${product.visible ? 'translate-x-6' : 'translate-x-1'}`} />
                    </button>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex gap-2">
                      <button onClick={() => openEditModal(product)} className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">수정</button>
                      <button onClick={() => handleDelete(product.id)} className="px-3 py-1.5 text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors">삭제</button>
                    </div>
                  </td>
                </tr>
              ))}
              {sortedProducts.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-4 py-12 text-center text-gray-400 text-sm">
                    등록된 제품이 없습니다. 새 제품을 추가해주세요.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 overflow-y-auto py-6"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}
        >
          <div className="relative z-10 w-full max-w-2xl mx-4 bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">{editingId !== null ? '제품 수정' : '제품 추가'}</h2>
              <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 text-2xl leading-none">×</button>
            </div>
            <div className="px-6 py-5 space-y-5">
              {formError && (
                <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-lg border border-red-100">{formError}</div>
              )}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">제품명 <span className="text-red-500">*</span></label>
                <input type="text" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} placeholder="예: 심재편백수" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#2A5430] transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">카테고리 <span className="text-red-500">*</span></label>
                <select value={form.category} onChange={(e) => setForm((f) => ({ ...f, category: e.target.value as ProductCategory }))} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#2A5430] transition-colors bg-white">
                  {CATEGORIES.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">배지</label>
                <select value={form.badge ?? ''} onChange={(e) => { const v = e.target.value; setForm((f) => ({ ...f, badge: v === '' ? null : (v as ProductBadge) })) }} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#2A5430] transition-colors bg-white">
                  <option value="">없음</option>
                  {BADGES.filter(Boolean).map((b) => <option key={b as string} value={b as string}>{b as string}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">태그라인</label>
                <input type="text" value={form.tagline} onChange={(e) => setForm((f) => ({ ...f, tagline: e.target.value }))} placeholder="예: 편백 속살에서 끌어낸 순수한 물" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#2A5430] transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">제품 설명</label>
                <textarea value={form.desc} onChange={(e) => setForm((f) => ({ ...f, desc: e.target.value }))} rows={4} placeholder="제품에 대한 자세한 설명을 입력해주세요." className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#2A5430] transition-colors resize-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">이미지 URL</label>
                <input type="text" value={form.image} onChange={(e) => setForm((f) => ({ ...f, image: e.target.value }))} placeholder="https://..." className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#2A5430] transition-colors" />
                {showImagePreview && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={form.image} alt="미리보기" className="mt-2 h-16 rounded-lg object-cover border border-gray-200" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }} />
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">스마트스토어 URL</label>
                <input type="text" value={form.storeUrl} onChange={(e) => setForm((f) => ({ ...f, storeUrl: e.target.value }))} placeholder="https://smartstore.naver.com/..." className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#2A5430] transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">순서</label>
                <input type="number" value={form.order} onChange={(e) => setForm((f) => ({ ...f, order: Number(e.target.value) }))} className="w-24 px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#2A5430] transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">공개 여부</label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="visible" checked={form.visible === true} onChange={() => setForm((f) => ({ ...f, visible: true }))} className="accent-[#2A5430]" />
                    <span className="text-sm text-gray-700">공개</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="visible" checked={form.visible === false} onChange={() => setForm((f) => ({ ...f, visible: false }))} className="accent-[#2A5430]" />
                    <span className="text-sm text-gray-700">비공개</span>
                  </label>
                </div>
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
        <div className="fixed bottom-6 right-6 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-xl text-sm z-50">
          {toast}
        </div>
      )}
    </div>
  )
}
