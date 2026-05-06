import {
  collection, getDocs, addDoc, updateDoc, deleteDoc,
  doc, query, orderBy, Timestamp,
} from 'firebase/firestore'
import { db } from './firebase'

export interface Notice {
  id: string
  title: string
  content: string
  pinned: boolean       // 상단 고정
  visible: boolean      // 공개 여부
  createdAt: string     // ISO string
}

const COL = 'notices'

export async function loadNotices(): Promise<Notice[]> {
  try {
    const q = query(collection(db, COL), orderBy('createdAt', 'desc'))
    const snap = await getDocs(q)
    return snap.docs.map((d) => ({ id: d.id, ...d.data() } as Notice))
  } catch { return [] }
}

export async function loadPublicNotices(): Promise<Notice[]> {
  const all = await loadNotices()
  return all.filter((n) => n.visible)
}

export async function addNotice(data: Omit<Notice, 'id'>): Promise<Notice | null> {
  try {
    const ref = await addDoc(collection(db, COL), data)
    return { id: ref.id, ...data }
  } catch { return null }
}

export async function updateNotice(id: string, data: Partial<Omit<Notice, 'id'>>): Promise<boolean> {
  try {
    await updateDoc(doc(db, COL, id), data as Record<string, unknown>)
    return true
  } catch { return false }
}

export async function deleteNotice(id: string): Promise<boolean> {
  try {
    await deleteDoc(doc(db, COL, id))
    return true
  } catch { return false }
}
