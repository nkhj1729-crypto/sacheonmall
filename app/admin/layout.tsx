'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'

const NAV_ITEMS = [
  { icon: '📊', label: '대시보드', href: '/admin' },
  { icon: '📝', label: '블로그 게시물', href: '/admin/posts' },
  { icon: '📦', label: '제품 관리', href: '/admin/products' },
  { icon: '📬', label: '문의 관리', href: '/admin/inquiries' },
  { icon: '🌲', label: '체험 프로그램', href: '/admin/programs' },
]

const PAGE_TITLES: Record<string, string> = {
  '/admin': '대시보드',
  '/admin/posts': '블로그 게시물',
  '/admin/posts/new': '새 게시물 작성',
  '/admin/products': '제품 관리',
  '/admin/inquiries': '문의 관리',
  '/admin/programs': '체험 프로그램',
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    if (pathname === '/admin/login') {
      setChecked(true)
      return
    }
    const auth = localStorage.getItem('adminAuth')
    if (auth !== 'true') {
      router.replace('/admin/login')
    } else {
      setChecked(true)
    }
  }, [pathname, router])

  const handleLogout = () => {
    localStorage.removeItem('adminAuth')
    router.push('/admin/login')
  }

  if (!checked) return null

  if (pathname === '/admin/login') {
    return <>{children}</>
  }

  const pageTitle = PAGE_TITLES[pathname] ?? '관리자'

  return (
    <div className="min-h-screen bg-[#F8F9FA]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
      {/* Sidebar */}
      <aside
        className="fixed top-0 left-0 h-full w-[240px] flex flex-col z-40"
        style={{ backgroundColor: '#1A3020' }}
      >
        {/* Logo */}
        <div className="px-6 py-5 border-b border-[#2A5430]">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-lg">사천편백림</span>
            <span
              className="text-xs px-2 py-0.5 rounded-full font-medium"
              style={{ backgroundColor: '#C9A96E', color: '#1A3020' }}
            >
              관리자
            </span>
          </div>
          <p className="text-[#9CAD93] text-xs mt-1">Admin Dashboard</p>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === '/admin'
                ? pathname === '/admin'
                : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'text-white border-l-4 pl-2'
                    : 'text-[#9CAD93] hover:text-white hover:bg-[#2A5430]'
                }`}
                style={
                  isActive
                    ? { backgroundColor: '#2A5430', borderLeftColor: '#C9A96E' }
                    : {}
                }
              >
                <span className="text-base">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Logout */}
        <div className="px-3 pb-6 border-t border-[#2A5430] pt-4">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[#9CAD93] hover:text-white hover:bg-[#2A5430] transition-all"
          >
            <span className="text-base">🚪</span>
            <span>로그아웃</span>
          </button>
        </div>
      </aside>

      {/* Topbar */}
      <header
        className="fixed top-0 right-0 h-[60px] flex items-center justify-between px-8 bg-white border-b border-gray-200 z-30"
        style={{ left: '240px' }}
      >
        <h1 className="text-lg font-semibold text-gray-800">{pageTitle}</h1>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
              style={{ backgroundColor: '#2A5430' }}
            >
              관
            </div>
            <span className="text-sm font-medium text-gray-700">관리자</span>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main
        className="pt-[60px] min-h-screen"
        style={{ marginLeft: '240px' }}
      >
        <div className="p-8">{children}</div>
      </main>
    </div>
  )
}
