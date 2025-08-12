import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Book a Consultation | BestED",
  description: "Book your personalized consultation with BestED. Tell us about your learning goals and we'll create a tailored plan for you.",
}

export default function ConsultationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
