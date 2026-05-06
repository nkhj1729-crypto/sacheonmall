export default function NoticePage() {
  const notices = [
    {
      id: 1,
      title: '사천편백림 홈페이지가 새롭게 오픈하였습니다.',
      date: '2026.05.06',
      isNew: true,
    },
    {
      id: 2,
      title: 'Firestore 보안 규칙 업데이트 안내 (관리자)',
      date: '2026.05.06',
      isNew: true,
    },
  ]

  return (
    <>
      {/* HERO */}
      <section className="relative h-64 md:h-80 flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-forest-900" />
        <div className="relative z-10 container-wide pb-10">
          <p className="section-label">CUSTOMER CENTER</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">공지사항</h1>
        </div>
      </section>

      {/* LIST */}
      <section className="section-padding bg-cream min-h-[60vh]">
        <div className="container-wide max-w-3xl">
          <div className="divide-y divide-gray-200 bg-white rounded-2xl shadow-sm overflow-hidden">
            {notices.map((notice) => (
              <div
                key={notice.id}
                className="flex items-center justify-between px-6 py-5 hover:bg-forest-50 transition-colors duration-150 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  {notice.isNew && (
                    <span className="text-xs font-bold text-forest-600 bg-forest-100 px-2 py-0.5 rounded-full">
                      NEW
                    </span>
                  )}
                  <p className="text-forest-900 font-medium text-sm md:text-base">
                    {notice.title}
                  </p>
                </div>
                <span className="text-xs text-gray-400 whitespace-nowrap ml-4">
                  {notice.date}
                </span>
              </div>
            ))}
          </div>
          {notices.length === 0 && (
            <p className="text-center text-gray-400 py-20">등록된 공지사항이 없습니다.</p>
          )}
        </div>
      </section>
    </>
  )
}
