import Link from 'next/link'

const quickLinks = [
  { label: '기업소개', href: '/about' },
  { label: '편백 치유숲', href: '/forest' },
  { label: '기술력/인증', href: '/technology' },
  { label: '제품소개', href: '/products' },
  { label: '문의', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-forest-950 border-t border-forest-800/60">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-2">사천편백림</h3>
            <p className="text-xs text-forest-300 tracking-widest mb-6">SACHEON PYEONBAEK FOREST</p>
            <dl className="space-y-1.5 text-sm text-forest-200">
              <div className="flex flex-wrap gap-x-2">
                <dt className="text-forest-400">대표이사</dt>
                <dd>박상호</dd>
                <span className="text-forest-600">|</span>
                <dt className="text-forest-400">사업자등록번호</dt>
                <dd>568-09-00251</dd>
              </div>
              <div>
                <dt className="text-forest-400 inline">주소</dt>
                <dd className="inline ml-2">경남 사천시 축동면 내축로 6</dd>
              </div>
              <div className="flex flex-wrap gap-x-2">
                <dt className="text-forest-400">전화</dt>
                <dd>
                  <a href="tel:055-852-6520" className="hover:text-white transition-colors">
                    055-852-6520
                  </a>
                </dd>
                <span className="text-forest-600">|</span>
                <dt className="text-forest-400">FAX</dt>
                <dd>070-7966-1613</dd>
              </div>
              <div>
                <dt className="text-forest-400 inline">이메일</dt>
                <dd className="inline ml-2">
                  <a href="mailto:ronabird@naver.com" className="hover:text-white transition-colors">
                    ronabird@naver.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-6">
              바로가기
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-forest-300 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-forest-600 group-hover:bg-sage group-hover:w-6 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: External Channels */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-6">
              온라인 채널
            </h4>
            <div className="space-y-3">
              <a
                href="https://smartstore.naver.com/schinoki?n_media=27758&n_query=%EC%82%AC%EC%B2%9C%ED%8E%B8%EB%B0%B1%EB%A6%BC&n_rank=1&n_ad_group=grp-a001-01-000000005174593&n_ad=nad-a001-01-000000476631712&n_keyword_id=nkw-a001-01-000006825472804&n_keyword=%EC%82%AC%EC%B2%9C%ED%8E%B8%EB%B0%B1%EB%A6%BC&n_campaign_type=1&n_ad_group_type=1&n_match=1&NaPm=ct%3Dmngrqaif%7Cci%3DER5d594cd6-2e2f-11f1-aee8-7ea2b89bdd8e%7Ctr%3Dsa%7Chk%3D28e19eec0f47a0fa90c772b8e4557a768e626e6a%7Cnacn%3D1OO4BwgIaPlW"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-forest-300 hover:text-white transition-colors duration-200 group"
              >
                <span className="w-8 h-8 rounded-lg bg-forest-800 group-hover:bg-forest-700 flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-10-4h10.2c.75 0 1.41-.41 1.75-1.03L21 5H5.21L4.27 3H1v2h2l3.6 7.59L5.25 15c-.16.28-.25.61-.25.96C5 17.1 5.9 18 7 18h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L7 18z"/>
                  </svg>
                </span>
                네이버 스마트스토어
              </a>
              <a
                href="https://blog.naver.com/ronabird"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-forest-300 hover:text-white transition-colors duration-200 group"
              >
                <span className="w-8 h-8 rounded-lg bg-forest-800 group-hover:bg-forest-700 flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </span>
                네이버 블로그
              </a>
              <a
                href="https://cafe.naver.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-forest-300 hover:text-white transition-colors duration-200 group"
              >
                <span className="w-8 h-8 rounded-lg bg-forest-800 group-hover:bg-forest-700 flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </span>
                네이버 카페
              </a>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-forest-800/40 border border-forest-700/40">
              <p className="text-xs text-forest-300 leading-relaxed">
                <span className="text-forest-200 font-medium">운영시간</span><br />
                평일 09:00 ~ 18:00<br />
                <span className="text-forest-400">토·일·공휴일 휴무</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-forest-800/60">
        <div className="container-wide py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-forest-500">
            Copyright © 2026 사천편백림. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-forest-500 hover:text-forest-300 transition-colors">
              개인정보처리방침
            </Link>
            <span className="text-forest-700">|</span>
            <Link href="/terms" className="text-xs text-forest-500 hover:text-forest-300 transition-colors">
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
