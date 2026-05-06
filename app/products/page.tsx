'use client'

import { useState } from 'react'
import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'
import { FALLBACK_PRODUCTS } from '@/lib/product-fallback'
import type { ProductBadge } from '@/lib/products'

const categories = ['전체', '편백수/오일', '생활용품', '구강/바디케어'] as const
type Category = typeof categories[number]

function getBadgeStyle(badge: ProductBadge): { className: string; style?: React.CSSProperties } {
  switch (badge) {
    case 'Best':    return { className: 'bg-forest-500 text-white' }
    case '특허':    return { className: 'text-forest-900', style: { backgroundColor: '#C9A96E' } }
    case 'New':     return { className: 'bg-forest-400 text-white' }
    case '인기 1위': return { className: 'bg-amber-500 text-white' }
    case 'SALE':    return { className: 'bg-red-500 text-white' }
    default:        return { className: '' }
  }
}

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('전체')

  const filtered = activeCategory === '전체'
    ? FALLBACK_PRODUCTS
    : FALLBACK_PRODUCTS.filter((p) => p.category === activeCategory)

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-80 md:h-96 flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=2000"
            alt="제품소개"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-forest-900/80" />
        </div>
        <div className="relative z-10 container-wide pb-12">
          <p className="section-label">ABORYDERM PRODUCTS</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">제품 소개</h1>
          <p className="text-forest-200 mt-2 text-lg">편백 치유숲에서 탄생한 아보리덤</p>
        </div>
      </section>

      {/* ── BRAND INTRO ── */}
      <section className="py-16 bg-forest-900">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              아보리덤은 편백나무 심재오일로 만든<br />자연 치유 뷰티 브랜드입니다
            </h2>
            <p className="text-forest-200 leading-relaxed">
              라틴어 <em className="text-sage">arbor(나무)</em>와 <em className="text-sage">derm(피부)</em>의 결합.
              나무가 피부를 치유한다는 철학이 이름에 담겨 있습니다.<br />
              1979년부터 직접 키운 편백나무에서 추출한 심재오일만을 핵심 원료로 사용합니다.
            </p>
          </div>
        </div>
      </section>

      {/* ── CATEGORY TABS + PRODUCT GRID ── */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <SectionHeader
            label="전체 제품"
            title="아보리덤 라인업"
            light
          />

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-forest-600 text-white shadow-md shadow-forest-600/30'
                    : 'bg-white text-forest-700 hover:bg-forest-100 border border-forest-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((product) => {
              const badgeStyle = product.badge ? getBadgeStyle(product.badge) : null
              return (
                <div key={product.id} className="card-light overflow-hidden group">
                  <div className="relative h-56 overflow-hidden bg-forest-50">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-900/30 to-transparent" />
                    {product.badge && badgeStyle && (
                      <span
                        className={`absolute top-4 left-4 text-xs px-3 py-1 rounded-full font-semibold ${badgeStyle.className}`}
                        style={badgeStyle.style}
                      >
                        {product.badge}
                      </span>
                    )}
                    <span className="absolute bottom-4 right-4 text-xs bg-white/90 text-forest-700 px-2.5 py-1 rounded-full font-medium">
                      {product.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-forest-900 text-lg mb-1">{product.name}</h3>
                    <p className="text-forest-500 text-sm font-medium mb-3 italic">&ldquo;{product.tagline}&rdquo;</p>
                    <p className="text-forest-700 text-sm leading-relaxed mb-6">{product.desc}</p>
                    <a
                      href={product.storeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full block text-center bg-forest-500 hover:bg-forest-400 text-white text-sm font-semibold py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-forest-500/25"
                    >
                      스마트스토어에서 구매하기
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── GIFT SET SECTION ── */}
      <section className="section-padding bg-forest-800">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label">선물 세트</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                자연을<br />선물하세요
              </h2>
              <div className="space-y-4 text-forest-200 leading-relaxed">
                <p>
                  소중한 분께 가장 의미 있는 선물을 드리세요.<br />
                  사천편백림의 편백 선물 세트는 화려한 포장보다 진짜 자연의 가치를 담았습니다.
                </p>
                <p>
                  건강을 생각하는 마음, 자연을 생각하는 마음을<br />
                  정성껏 포장된 아보리덤 선물 세트에 담아 전하세요.
                </p>
                <p className="text-forest-300 text-sm">
                  ✓ 맞춤 구성 가능 &nbsp;|&nbsp; ✓ 기업 대량 구매 할인 &nbsp;|&nbsp; ✓ 무료 메시지 카드
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://smartstore.naver.com/schinoki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  선물세트 구경하기
                </a>
                <Link href="/contact" className="btn-outline-white">
                  대량 구매 문의
                </Link>
              </div>
            </div>

            <div className="relative h-80 rounded-2xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/products/gift-set.png"
                alt="편백 바디케어 선물세트"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── QUALITY PROMISE ── */}
      <section className="py-16 bg-forest-900 border-t border-forest-800">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { icon: '🌲', title: '자연 원료', desc: '직접 키운 편백나무에서만 추출' },
              { icon: '🔬', title: '검증된 기술', desc: '국내 유일 심재오일 특허' },
              { icon: '🏭', title: 'GMP 생산', desc: '크린룸·무균룸 완비 시설' },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center">
                <span className="text-4xl mb-4">{item.icon}</span>
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-forest-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
