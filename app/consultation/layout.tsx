import type { Metadata } from "next"
import { consultationMetadata } from '@/lib/metadata'

export const metadata: Metadata = consultationMetadata

export default function ConsultationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
