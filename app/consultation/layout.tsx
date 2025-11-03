import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Book a Consultation',
  description: 'Schedule a free consultation to discuss your child\'s educational needs and how BestED can help.',
  keywords: ['education consultation', 'enrollment', 'get started'],
  alternates: {
    canonical: 'https://bested.co.ke',
  }, 
  twitter: {
    card: 'summary_large_image',
    title: 'BestED',
    description: "Personalized coaching for English, Kiswahili, German, French, Chinese, Dutch, plus Math and Science. CEFR A1–C2, exam pathways, and flexible delivery.",
    images: ['https://bested.co.ke/og-image.jpg'],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  category: 'education',
}

export default function ConsultationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
