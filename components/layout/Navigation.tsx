'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavChild = { label: string; href: string }
type NavItem  = { label: string; href: string; children?: NavChild[] }

const navItems: NavItem[] = [
  {
    label: '기업소개',
    href: '/about',
    children: [
      { label: '회사 소개',   href: '/about' },
      { label: '창업 스토리', href: '/about#story' },
    ],
  },
  {
    label: '편백 치유숲',
    href: '/forest',
    children: [
      { label: '숲 소개',      href: '/forest' },
      { label: '체험 프로그램', href: '/forest#programs' },
    ],
  },
  {
    label: '기술력/인증',
    href: '/technology',
    children: [
      { label: '특허 기술',  href: '/technology' },
      { label: '인증 현황',  href: '/technology#certifications' },
    ],
  },
  {
    label: '제품소개',
    href: '/products',
    children: [
      { label: '편백수/오일',   href: '/products' },
      { label: '생활용품',      href: '/products' },
      { label: '구강/바디케어', href: '/products' },
    ],
  },
  {
    label: '고객센터',
    href: '/contact',
    children: [
      { label: '공지사항', href: '/notice' },
      { label: '문의하기', href: '/contact' },
    ],
  },
]

export default function Navigation() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)
  const [openMobile,  setOpenMobile]  = useState<string | null>(null)
  const pathname = usePathname()
  const isHome   = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const navBg = isHome
    ? scrolled
      ? 'bg-forest-900/95 backdrop-blur-md shadow-lg shadow-forest-950/50'
      : 'bg-transparent'
    : 'bg-forest-900/95 backdrop-blur-md shadow-lg shadow-forest-950/50'

  const isActive = (item: NavItem) =>
    pathname === item.href ||
    item.children?.some((c) => pathname === c.href)

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${navBg}`}>
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-xl lg:text-2xl font-bold text-white tracking-tight group-hover:text-forest-200 transition-colors duration-200">
                사천편백림
              </span>
              <span className="hidden sm:block text-xs text-forest-300 font-normal tracking-widest mt-0.5">
                PYEONBAEK FOREST
              </span>
            </Link>

            {/* ── Desktop Nav ── */}
            <ul className="hidden lg:flex items-center gap-12">
              {navItems.map((item) => (
                <li key={item.href} className="relative group">
                  {/* 대메뉴 */}
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors duration-200 relative ${
                      isActive(item) ? 'text-forest-200' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {item.children && (
                      <svg
                        className="w-3.5 h-3.5 mt-px transition-transform duration-200 group-hover:rotate-180"
                        viewBox="0 0 20 20" fill="currentColor"
                      >
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                      </svg>
                    )}
                    {/* 밑줄 */}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-sage transition-all duration-200 ${
                        isActive(item) ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>

                  {/* 드롭다운 */}
                  {item.children && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 z-50">
                      <div className="bg-white rounded-xl shadow-xl shadow-black/10 border border-gray-100 py-2 min-w-[140px] whitespace-nowrap">
                        {item.children.map((child) => (
                          <Link
                            key={child.href + child.label}
                            href={child.href}
                            className={`block px-5 py-2.5 text-sm transition-colors duration-150 ${
                              pathname === child.href
                                ? 'text-forest-700 font-semibold bg-forest-50'
                                : 'text-gray-700 hover:text-forest-700 hover:bg-forest-50'
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* ── CTA ── */}
            <div className="hidden lg:block">
              <Link
                href="/products"
                className="bg-forest-500 hover:bg-forest-400 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-forest-500/30"
              >
                제품 보기
              </Link>
            </div>

            {/* ── Hamburger ── */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white focus:outline-none"
              aria-label="메뉴 열기"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 bg-white transition-all duration-300 origin-left ${mobileOpen ? 'rotate-45 translate-x-px' : ''}`} />
                <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0 translate-x-2' : ''}`} />
                <span className={`block h-0.5 bg-white transition-all duration-300 origin-left ${mobileOpen ? '-rotate-45 translate-x-px' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Overlay ── */}
      <div
        className={`fixed inset-0 z-40 bg-forest-950/98 backdrop-blur-xl transition-all duration-400 lg:hidden overflow-y-auto ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center pt-28 pb-12 gap-2 min-h-full">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="text-2xl font-bold text-white mb-6"
          >
            사천편백림
          </Link>

          {navItems.map((item) => (
            <div key={item.href} className="w-full max-w-xs">
              {item.children ? (
                <>
                  {/* 아코디언 토글 */}
                  <button
                    onClick={() =>
                      setOpenMobile(openMobile === item.href ? null : item.href)
                    }
                    className={`w-full flex items-center justify-between px-6 py-3 text-xl font-semibold transition-colors duration-200 ${
                      isActive(item) ? 'text-forest-200' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {item.label}
                    <svg
                      className={`w-5 h-5 transition-transform duration-200 ${
                        openMobile === item.href ? 'rotate-180' : ''
                      }`}
                      viewBox="0 0 20 20" fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {/* 서브메뉴 */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openMobile === item.href ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href + child.label}
                        href={child.href}
                        onClick={() => { setMobileOpen(false); setOpenMobile(null) }}
                        className={`block px-10 py-2.5 text-base transition-colors duration-150 ${
                          pathname === child.href
                            ? 'text-forest-300 font-semibold'
                            : 'text-white/50 hover:text-white/80'
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-6 py-3 text-xl font-semibold transition-colors duration-200 ${
                    pathname === item.href ? 'text-forest-200' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          <Link
            href="/products"
            onClick={() => setMobileOpen(false)}
            className="mt-8 bg-forest-500 hover:bg-forest-400 text-white text-lg font-semibold px-8 py-3 rounded-full transition-all duration-300"
          >
            제품 보기
          </Link>
        </div>
      </div>
    </>
  )
}
