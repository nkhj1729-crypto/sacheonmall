import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  where,
} from 'firebase/firestore'
import { db } from './firebase'

export type ProductCategory = '편백수/오일' | '생활용품' | '구강/바디케어'
export type ProductBadge = 'Best' | '특허' | 'New' | '인기 1위' | 'SALE' | null

export interface Product {
  id: string
  name: string
  tagline: string
  desc: string
  category: ProductCategory
  image: string
  badge: ProductBadge
  storeUrl: string
  visible: boolean
  order: number
}

const COL = 'products'

export async function loadProducts(): Promise<Product[]> {
  try {
    const q = query(
      collection(db, COL),
      where('visible', '==', true),
      orderBy('order', 'asc'),
    )
    const snap = await getDocs(q)
    return snap.docs.map((d) => ({ id: d.id, ...d.data() } as Product))
  } catch {
    return []
  }
}

export async function loadAllProducts(): Promise<Product[]> {
  try {
    const q = query(collection(db, COL), orderBy('order', 'asc'))
    const snap = await getDocs(q)
    return snap.docs.map((d) => ({ id: d.id, ...d.data() } as Product))
  } catch {
    return []
  }
}

export async function addProduct(product: Omit<Product, 'id'>): Promise<Product | null> {
  try {
    const ref = await addDoc(collection(db, COL), product)
    return { id: ref.id, ...product }
  } catch {
    return null
  }
}

export async function updateProduct(id: string, data: Partial<Omit<Product, 'id'>>): Promise<boolean> {
  try {
    await updateDoc(doc(db, COL, id), data as Record<string, unknown>)
    return true
  } catch {
    return false
  }
}

export async function deleteProduct(id: string): Promise<boolean> {
  try {
    await deleteDoc(doc(db, COL, id))
    return true
  } catch {
    return false
  }
}
