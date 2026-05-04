'use client'

import { useState } from 'react'
import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'

const inquiryTypes = [
  { value: '', label: '문의 유형을 선택해주세요' },
  { value: '입점 제안', label: '입점 제안' },
  { value: 'OEM/ODM', label: 'OEM/ODM' },
  { value: '유통 파트너십', label: '유통 파트너십' },
  { value: '기타', label: '기타' },
]

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: '전화',
    value: '055-852-6520',
    href: 'tel:055-852-6520',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
    ),
    label: 'FAX',
    value: '070-7966-1613',
    href: null,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: '이메일',
    value: 'ronabird@naver.com',
    href: 'mailto:ronabird@naver.com',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: '운영시간',
    value: '평일 09:00 ~ 18:00',
    href: null,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: '주소',
    value: '경남 사천시 축동면 내축로 6',
    href: null,
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    inquiryType: '',
    company: '',
    name: '',
    phone: '',
    email: '',
    message: '',
    privacyAgreed: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.inquiryType) newErrors.inquiryType = '문의 유형을 선택해주세요.'
    if (!formData.company.trim()) newErrors.company = '회사명을 입력해주세요.'
    if (!formData.name.trim()) newErrors.name = '담당자명을 입력해주세요.'
    if (!formData.phone.trim()) newErrors.phone = '연락처를 입력해주세요.'
    if (!formData.email.trim()) newErrors.email = '이메일을 입력해주세요.'
    if (!formData.message.trim()) newErrors.message = '문의 내용을 입력해주세요.'
    if (!formData.privacyAgreed) newErrors.privacyAgreed = '개인정보 수집에 동의해주세요.'
    return newErrors
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-72 md:h-80 flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-forest-950 via-forest-900 to-forest-800" />
        <div className="relative z-10 container-wide pb-12">
          <p className="section-label">CONTACT US</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">문의 / 오시는 길</h1>
          <p className="text-forest-200 mt-2 text-lg">사천편백림에 궁금한 점을 물어보세요</p>
        </div>
      </section>

      {/* ── CONTACT INFO ── */}
      <section className="section-padding bg-forest-900">
        <div className="container-wide">
          <SectionHeader
            label="연락처"
            title="언제든지 연락 주세요"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {contactInfo.map((info) => (
              <div key={info.label} className="glass-card p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-forest-600/40 flex items-center justify-center text-forest-300 flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs text-forest-400 uppercase tracking-wider mb-0.5">{info.label}</p>
                  {info.href ? (
                    <a href={info.href} className="text-white font-medium hover:text-forest-200 transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-white font-medium">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div className="h-72 rounded-2xl bg-forest-800/60 border border-forest-700/50 flex flex-col items-center justify-center gap-4">
            <svg className="w-16 h-16 text-forest-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <div className="text-center">
              <p className="text-forest-300 font-medium">경남 사천시 축동면 내축로 6</p>
              <p className="text-forest-500 text-sm mt-1">지도 서비스 연동 예정</p>
            </div>
            <a
              href="https://map.naver.com/v5/search/경남 사천시 축동면 내축로 6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-6 py-2.5"
            >
              네이버 지도로 보기
            </a>
          </div>
        </div>
      </section>

      {/* ── B2B CONTACT FORM ── */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: pitch copy */}
            <div>
              <p className="section-label text-forest-500">B2B 파트너십</p>
              <h2 className="text-3xl md:text-4xl font-bold text-forest-900 leading-tight mb-6">
                함께 성장할<br />파트너를 찾습니다
              </h2>
              <div className="space-y-4 text-forest-700 leading-relaxed">
                <p>
                  사천편백림은 편백 심재오일 기반 제품을 함께 유통하고 성장할
                  파트너 기업을 모집합니다.
                </p>
                <p>
                  국내 유일 특허기술, GMP 인증 시설, 46년 역사의 원료 경쟁력을 갖춘
                  사천편백림의 제품은 기존 화장품·생활용품 시장에서 차별화된 가치를 제공합니다.
                </p>
                <p>
                  입점 제안, OEM/ODM, 유통 파트너십 등 다양한 협력 방식으로
                  함께 자연 치유 시장을 선도해나가겠습니다.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { icon: '🏪', label: '입점 제안' },
                  { icon: '🧪', label: 'OEM/ODM' },
                  { icon: '🚚', label: '유통 파트너' },
                ].map((item) => (
                  <div key={item.label} className="text-center card-light p-4">
                    <span className="text-3xl block mb-2">{item.icon}</span>
                    <p className="text-sm font-semibold text-forest-800">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white rounded-2xl shadow-lg border border-forest-100 p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-forest-100 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-forest-900 mb-2">문의가 접수되었습니다</h3>
                  <p className="text-forest-600 text-sm mb-6">
                    영업일 기준 2일 내 담당자가 연락드리겠습니다.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({
                        inquiryType: '', company: '', name: '', phone: '',
                        email: '', message: '', privacyAgreed: false,
                      })
                    }}
                    className="btn-outline-forest text-sm px-6 py-2.5"
                  >
                    새 문의 작성
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Inquiry type */}
                  <div>
                    <label className="block text-sm font-semibold text-forest-800 mb-1.5">
                      문의 유형 <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-forest-50 focus:outline-none focus:ring-2 focus:ring-forest-400 transition-all ${
                        errors.inquiryType ? 'border-red-400' : 'border-forest-200'
                      }`}
                    >
                      {inquiryTypes.map((t) => (
                        <option key={t.value} value={t.value} disabled={t.value === ''}>
                          {t.label}
                        </option>
                      ))}
                    </select>
                    {errors.inquiryType && <p className="text-red-500 text-xs mt-1">{errors.inquiryType}</p>}
                  </div>

                  {/* Company + Name row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-forest-800 mb-1.5">
                        회사명 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="(주)사천편백"
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-forest-50 focus:outline-none focus:ring-2 focus:ring-forest-400 transition-all ${
                          errors.company ? 'border-red-400' : 'border-forest-200'
                        }`}
                      />
                      {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-forest-800 mb-1.5">
                        담당자명 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="홍길동"
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-forest-50 focus:outline-none focus:ring-2 focus:ring-forest-400 transition-all ${
                          errors.name ? 'border-red-400' : 'border-forest-200'
                        }`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                  </div>

                  {/* Phone + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-forest-800 mb-1.5">
                        연락처 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="010-0000-0000"
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-forest-50 focus:outline-none focus:ring-2 focus:ring-forest-400 transition-all ${
                          errors.phone ? 'border-red-400' : 'border-forest-200'
                        }`}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-forest-800 mb-1.5">
                        이메일 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@company.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-forest-50 focus:outline-none focus:ring-2 focus:ring-forest-400 transition-all ${
                          errors.email ? 'border-red-400' : 'border-forest-200'
                        }`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-forest-800 mb-1.5">
                      문의 내용 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="문의하실 내용을 자유롭게 작성해주세요."
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-forest-50 focus:outline-none focus:ring-2 focus:ring-forest-400 transition-all resize-none ${
                        errors.message ? 'border-red-400' : 'border-forest-200'
                      }`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  {/* Privacy checkbox */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        name="privacyAgreed"
                        checked={formData.privacyAgreed}
                        onChange={handleChange}
                        className="mt-0.5 w-4 h-4 rounded border-forest-300 text-forest-600 focus:ring-forest-400"
                      />
                      <span className="text-xs text-forest-600 leading-relaxed">
                        개인정보 수집·이용에 동의합니다. 수집된 정보는 문의 답변 목적으로만 사용되며,
                        답변 완료 후 즉시 파기됩니다.
                      </span>
                    </label>
                    {errors.privacyAgreed && <p className="text-red-500 text-xs mt-1">{errors.privacyAgreed}</p>}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-forest-600 hover:bg-forest-500 text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-forest-600/30"
                  >
                    문의하기
                  </button>

                  <p className="text-xs text-center text-forest-400">
                    문의 접수 후 영업일 기준 2일 내 담당자가 연락드립니다.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="py-12 bg-forest-900 text-center border-t border-forest-800">
        <div className="container-wide">
          <p className="text-forest-300 mb-4">직접 제품을 체험하고 싶으신가요?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/forest" className="btn-primary">숲 방문 안내</Link>
            <a
              href="https://smartstore.naver.com/schinoki?n_media=27758&n_query=%EC%82%AC%EC%B2%9C%ED%8E%B8%EB%B0%B1%EB%A6%BC&n_rank=1&n_ad_group=grp-a001-01-000000005174593&n_ad=nad-a001-01-000000476631712&n_keyword_id=nkw-a001-01-000006825472804&n_keyword=%EC%82%AC%EC%B2%9C%ED%8E%B8%EB%B0%B1%EB%A6%BC&n_campaign_type=1&n_ad_group_type=1&n_match=1&NaPm=ct%3Dmngrqaif%7Cci%3DER5d594cd6-2e2f-11f1-aee8-7ea2b89bdd8e%7Ctr%3Dsa%7Chk%3D28e19eec0f47a0fa90c772b8e4557a768e626e6a%7Cnacn%3D1OO4BwgIaPlW"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white"
            >
              스마트스토어 방문
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
