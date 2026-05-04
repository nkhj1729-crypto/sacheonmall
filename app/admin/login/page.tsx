'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    setTimeout(() => {
      if (password === 'sacheon2026') {
        localStorage.setItem('adminAuth', 'true')
        router.push('/admin')
      } else {
        setError('비밀번호가 올바르지 않습니다')
        setLoading(false)
      }
    }, 400)
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundColor: '#0F2016',
        fontFamily: 'Pretendard, sans-serif',
        backgroundImage: `radial-gradient(ellipse at 20% 50%, rgba(42, 84, 48, 0.3) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 20%, rgba(26, 48, 32, 0.4) 0%, transparent 50%)`,
      }}
    >
      {/* Decorative circles */}
      <div
        className="absolute top-20 left-20 w-64 h-64 rounded-full opacity-10"
        style={{ backgroundColor: '#2A5430' }}
      />
      <div
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full opacity-5"
        style={{ backgroundColor: '#C9A96E' }}
      />

      <div className="relative z-10 w-full max-w-md px-6">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div
            className="px-8 py-8 text-center"
            style={{ backgroundColor: '#1A3020' }}
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-2xl">🌲</span>
              <span className="text-white text-xl font-bold">사천편백림</span>
            </div>
            <h1 className="text-white text-lg font-semibold">관리자 로그인</h1>
            <p className="text-[#9CAD93] text-sm mt-1">Admin Dashboard</p>
          </div>

          {/* Form */}
          <div className="px-8 py-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Username (fixed) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  아이디
                </label>
                <input
                  type="text"
                  value="admin"
                  disabled
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-400 text-sm cursor-not-allowed"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  비밀번호
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value)
                      setError('')
                    }}
                    placeholder="비밀번호를 입력하세요"
                    className={`w-full px-4 py-3 rounded-xl border text-sm pr-12 outline-none transition-all ${
                      error
                        ? 'border-red-400 bg-red-50 focus:border-red-500'
                        : 'border-gray-200 bg-white focus:border-[#2A5430]'
                    }`}
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors text-sm"
                  >
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </div>
                {error && (
                  <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                    <span>⚠️</span>
                    {error}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading || !password}
                className="w-full py-3 rounded-xl text-white text-sm font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: '#2A5430' }}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-spin">⏳</span>
                    로그인 중...
                  </span>
                ) : (
                  '로그인'
                )}
              </button>
            </form>

            <p className="text-center text-xs text-gray-400 mt-6">
              사천편백림 내부 관리 시스템입니다
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
