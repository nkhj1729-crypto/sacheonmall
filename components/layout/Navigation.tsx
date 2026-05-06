'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: '기업소개', href: '/about' },
  { label: '편백 치유숲', href: '/forest' },
  { label: '기술력/인증', href: '/technology' },
  { label: '제품소개', href: '/products' },
  { label: '문의', href: '/contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const navBg = isHome
    ? scrolled
      ? 'bg-forest-900/95 backdrop-blur-md shadow-lg shadow-forest-950/50'
      : 'bg-transparent'
    : 'bg-forest-900/95 backdrop-blur-md shadow-lg shadow-forest-950/50'

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${navBg}`}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-xl lg:text-2xl font-bold text-white tracking-tight group-hover:text-forest-200 transition-colors duration-200">
                사천편백림
              </span>
              <span className="hidden sm:block text-xs text-forest-300 font-normal tracking-widest mt-0.5">
                PYEONBAEK FOREST
              </span>
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-12">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-sm font-medium tracking-wide transition-colors duration-200 relative group ${
                      pathname === item.href
                        ? 'text-forest-200'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-sage transition-all duration-200 ${
                        pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA Button (desktop) */}
            <div className="hidden lg:block">
              <Link
                href="/products"
                className="bg-forest-500 hover:bg-forest-400 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-forest-500/30"
              >
                제품 보기
              </Link>
            </div>

            {/* Hamburger (mobile) */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white focus:outline-none"
              aria-label="메뉴 열기"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block h-0.5 bg-white transition-all duration-300 origin-left ${
                    mobileOpen ? 'rotate-45 translate-x-px' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 bg-white transition-all duration-300 ${
                    mobileOpen ? 'opacity-0 translate-x-2' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 bg-white transition-all duration-300 origin-left ${
                    mobileOpen ? '-rotate-45 translate-x-px' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      <div
        className={`fixed inset-0 z-40 bg-forest-950/98 backdrop-blur-xl transition-all duration-400 lg:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="text-2xl font-bold text-white mb-4"
          >
            사천편백림
          </Link>
          {navItems.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`text-2xl font-semibold transition-all duration-200 ${
                pathname === item.href
                  ? 'text-forest-200'
                  : 'text-white/70 hover:text-white'
              }`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/products"
            onClick={() => setMobileOpen(false)}
            className="mt-4 bg-forest-500 hover:bg-forest-400 text-white text-lg font-semibold px-8 py-3 rounded-full transition-all duration-300"
          >
            제품 보기
          </Link>
        </div>
      </div>
    </>
  )
}
