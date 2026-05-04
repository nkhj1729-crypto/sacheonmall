import { NextResponse } from 'next/server'
import { collection, getDocs, addDoc, query } from 'firebase/firestore'
import { db } from '@/lib/firebase'

const INITIAL_PRODUCTS = [
  {
    name: '심재편백수',
    tagline: '편백 속살에서 끌어낸 순수한 물',
    desc: '1979년부터 직접 키운 편백나무 심재에서만 추출한 고순도 편백수입니다. 일반 편백잎보다 피톤치드 함량이 높아 피부 진정·보습 효과가 탁월합니다.',
    category: '편백수/오일',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&q=80&w=800',
    badge: 'Best',
    storeUrl: 'https://smartstore.naver.com/schinoki',
    visible: true,
    order: 1,
  },
  {
    name: '심재편백오일',
    tagline: '특허받은 심재 추출 기술의 정수',
    desc: '국내 유일 편백 심재오일 특허 기술로 생산합니다. 심재 특유의 진한 피톤치드 향과 함께 피부 장벽 강화, 항균·항염 효과를 제공합니다.',
    category: '편백수/오일',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800',
    badge: '특허',
    storeUrl: 'https://smartstore.naver.com/schinoki',
    visible: true,
    order: 2,
  },
  {
    name: '편백 미스트',
    tagline: '언제 어디서나 숲 속 청량함을',
    desc: '심재편백수를 고압 미세분무로 담은 즉각 진정 미스트입니다. 화장 위에 덧뿌려도 촉촉하게 밀착되며 미세먼지·자극으로 달아오른 피부를 빠르게 식혀줍니다.',
    category: '편백수/오일',
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4b8ccb0?auto=format&fit=crop&q=80&w=800',
    badge: 'New',
    storeUrl: 'https://smartstore.naver.com/schinoki',
    visible: true,
    order: 3,
  },
  {
    name: '편백 샴푸',
    tagline: '두피부터 시작하는 자연 치유',
    desc: '편백 심재오일과 천연 계면활성제가 두피의 과잉 피지와 노폐물을 깔끔하게 제거합니다. 사용 후 두피가 시원하고 모발에 자연스러운 윤기가 납니다.',
    category: '구강/바디케어',
    image: 'https://images.unsplash.com/photo-1631390546898-b6cd8f49a8cc?auto=format&fit=crop&q=80&w=800',
    badge: '인기 1위',
    storeUrl: 'https://smartstore.naver.com/schinoki',
    visible: true,
    order: 4,
  },
  {
    name: '편백 바디워시',
    tagline: '온몸으로 마시는 편백 목욕',
    desc: '샤워 때마다 편백림을 걷는 듯한 피톤치드 향을 경험하세요. 심재편백수가 함유되어 세정 후에도 피부가 촉촉하고 차분하게 가라앉습니다.',
    category: '구강/바디케어',
    image: 'https://images.unsplash.com/photo-1591947596285-4a3c9f5f4ec5?auto=format&fit=crop&q=80&w=800',
    badge: null,
    storeUrl: 'https://smartstore.naver.com/schinoki',
    visible: true,
    order: 5,
  },
  {
    name: '편백 치약',
    tagline: '입 속까지 자연의 청정함으로',
    desc: '편백 심재 추출물의 항균력으로 구강 세균을 억제합니다. 불소·합성향료 무첨가, 온 가족이 안심하고 사용할 수 있는 자연주의 치약입니다.',
    category: '구강/바디케어',
    image: 'https://images.unsplash.com/photo-1559599189-fe84dea4eb79?auto=format&fit=crop&q=80&w=800',
    badge: null,
    storeUrl: 'https://smartstore.naver.com/schinoki',
    visible: true,
    order: 6,
  },
  {
    name: '편백 비누',
    tagline: '천연 냉압착 편백 핸드메이드 비누',
    desc: '콜드프로세스 방식으로 직접 제조한 100% 천연 비누입니다. 편백 심재오일이 풍부하게 녹아들어 세안 후 당김이나 건조함 없이 피부 결을 매끄럽게 정돈합니다.',
    category: '생활용품',
    image: 'https://images.unsplash.com/photo-1607006344380-b6775a0824a7?auto=format&fit=crop&q=80&w=800',
    badge: null,
    storeUrl: 'https://smartstore.naver.com/schinoki',
    visible: true,
    order: 7,
  },
  {
    name: '편백 방향제',
    tagline: '집 안을 편백림으로 채우다',
    desc: '편백 심재에서 증류 추출한 순수 피톤치드 원액을 담은 디퓨저입니다. 합성향료 없이 자연 그대로의 편백 향이 실내 공기를 정화하고 마음을 편안하게 합니다.',
    category: '생활용품',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800',
    badge: null,
    storeUrl: 'https://smartstore.naver.com/schinoki',
    visible: true,
    order: 8,
  },
  {
    name: '편백 입욕제',
    tagline: '욕조를 피톤치드 온천으로',
    desc: '편백 심재 추출물과 미네랄 성분을 담은 배쓰솔트입니다. 따뜻한 욕조에 풀면 편백 숲 속 온천욕 같은 경험이 펼쳐지며 피로 회복과 숙면에 도움을 줍니다.',
    category: '생활용품',
    image: 'https://images.unsplash.com/photo-1531685250784-7569952593d2?auto=format&fit=crop&q=80&w=800',
    badge: 'SALE',
    storeUrl: 'https://smartstore.naver.com/schinoki',
    visible: true,
    order: 9,
  },
]

export async function POST() {
  try {
    // 이미 데이터가 있으면 중복 등록 방지
    const existing = await getDocs(query(collection(db, 'products')))
    if (!existing.empty) {
      return NextResponse.json(
        { message: '이미 제품 데이터가 존재합니다. 중복 등록을 건너뜁니다.' },
        { status: 200 }
      )
    }

    const results = await Promise.all(
      INITIAL_PRODUCTS.map((product) => addDoc(collection(db, 'products'), product))
    )

    return NextResponse.json({
      message: `${results.length}개 제품이 성공적으로 등록되었습니다.`,
      count: results.length,
    })
  } catch (error) {
    console.error('Seed error:', error)
    return NextResponse.json(
      { message: '데이터 등록 중 오류가 발생했습니다.', error: String(error) },
      { status: 500 }
    )
  }
}
