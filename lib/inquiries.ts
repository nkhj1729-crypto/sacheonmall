import {
  collection, getDocs, updateDoc, deleteDoc,
  doc, query, orderBy, addDoc,
} from 'firebase/firestore'
import { db } from './firebase'

export type InquiryStatus = '미확인' | '확인' | '답변완료'

export interface Inquiry {
  id: string
  inquiryType: string
  company: string
  name: string
  phone: string
  email: string
  message: string
  status: InquiryStatus
  createdAt: string   // ISO string
}

const COL = 'inquiries'

export async function loadInquiries(): Promise<Inquiry[]> {
  try {
    const q = query(collection(db, COL), orderBy('createdAt', 'desc'))
    const snap = await getDocs(q)
    return snap.docs.map((d) => ({ id: d.id, ...d.data() } as Inquiry))
  } catch { return [] }
}

export async function submitInquiry(data: Omit<Inquiry, 'id' | 'status'>): Promise<boolean> {
  try {
    await addDoc(collection(db, COL), { ...data, status: '미확인' })
    return true
  } catch { return false }
}

export async function updateInquiryStatus(id: string, status: InquiryStatus): Promise<boolean> {
  try {
    await updateDoc(doc(db, COL, id), { status })
    return true
  } catch { return false }
}

export async function deleteInquiry(id: string): Promise<boolean> {
  try {
    await deleteDoc(doc(db, COL, id))
    return true
  } catch { return false }
}

export async function deleteInquiries(ids: string[]): Promise<boolean> {
  try {
    await Promise.all(ids.map((id) => deleteDoc(doc(db, COL, id))))
    return true
  } catch { return false }
}
