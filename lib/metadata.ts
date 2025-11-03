import { Metadata } from 'next'

interface MetadataParams {
  title: string
  description: string
  path?: string
  image?: string
  keywords?: string[]
  noIndex?: boolean
}

export function generateMetadata({
  title,
  description,
  path = '',
  image = '/og-image.jpg',
  keywords = [],
  noIndex = false,
}: MetadataParams): Metadata {
  const baseUrl = 'https://bested.co.ke'
  const url = `${baseUrl}${path}`
  const fullTitle = path ? `${title} | BestED` : title
  
  // Default keywords that appear on every page
  const defaultKeywords = [
    'homeschooling Kenya',
    'online learning',
    'professional tutoring',
  ]
  
  return {
    title: fullTitle,
    description,
    keywords: [...defaultKeywords, ...keywords],
    authors: [{ name: 'BestED' }],
    creator: 'BestED',
    publisher: 'BestED',
    
    alternates: {
      canonical: url,
    },
    
    openGraph: {
      type: 'website',
      locale: 'en_KE',
      url,
      siteName: 'BestED',
      title: fullTitle,
      description,
      images: [
        {
          url: `${baseUrl}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [`${baseUrl}${image}`],
    },
    
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    category: 'education',
  }
}

// Usage examples:

// Homepage
export const homeMetadata = generateMetadata({
  title: 'BestED | Professional Homeschooling in Kenya',
  description: 'Corporate-grade, individualized learning on-site or online. Master Foreign Languages, Math, and Science from foundational to advanced levels.',
  keywords: ['STEM education', 'foreign languages', 'personalized education'],
})

// About page
export const aboutMetadata = generateMetadata({
  title: 'About Us',
  description: 'Learn about BestED&rsquo;s mission to provide world-class homeschooling education in Kenya.',
  path: '/about',
  keywords: ['education philosophy', 'teaching methodology'],
})

// Services page
export const servicesMetadata = generateMetadata({
  title: 'Our Educational Services',
  description: 'Explore our comprehensive homeschooling services including languages, mathematics, and science education.',
  path: '/offerings',
  keywords: ['tutoring services', 'curriculum', 'academic programs'],
})

// Consultation page
export const consultationMetadata = generateMetadata({
  title: 'Book a Consultation',
  description: 'Schedule a free consultation to discuss your child\'s educational needs and how BestED can help.',
  path: '/consultation',
  keywords: ['education consultation', 'enrollment', 'get started'],
})

// Profiles page
export const profilesMetadata = generateMetadata({
  title: 'Meet Our Instructors',
  description: 'Learn about our experienced educators and their expertise in languages, math, and science.',
  path: '/profiles',
  keywords: ['instructors', 'teachers', 'education', 'expertise'],
})
