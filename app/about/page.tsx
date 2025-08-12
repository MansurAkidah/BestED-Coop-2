import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Image from "next/image"

export const metadata = {
  title: "About BestED | Mission, Vision, Values",
  description:
    "BestED empowers individuals and families with personalized, corporate-grade learning—on-site or online.",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-50 via-background to-teal-50 dark:from-emerald-950/20 dark:via-background dark:to-teal-950/20" />
          <div className="container mx-auto px-4 py-14 md:py-20">
            <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_.8fr]">
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About BestED</h1>
                <p className="mt-4 text-muted-foreground text-lg">
                  BestED is a corporate-focused, individualized learning partner. We support learners from age 6 to
                  adults through flexible, high-impact instruction in languages, Math, and Science—delivered in-person
                  or online.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Image
                  src="https://images.unsplash.com/photo-1523240798131-1131d5f2b0c5?w=320&h=220&fit=crop&crop=center"
                  alt="Collaborative learning session"
                  width={320}
                  height={220}
                  className="rounded-md object-cover"
                />
                <Image
                  src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=320&h=220&fit=crop&crop=center"
                  alt="Private coaching with a teacher"
                  width={320}
                  height={220}
                  className="rounded-md object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto grid gap-8 px-4 py-12 md:grid-cols-3 md:gap-10 md:py-16">
          <div className="rounded-lg border bg-card p-6">
            <h2 className="text-xl font-semibold">Mission</h2>
            <p className="mt-3 text-muted-foreground">
              To empower families through personalized and enriching homeschooling experiences that cultivate a love for
              learning, foster creativity, and develop critical thinking skills. We provide comprehensive resources,
              supportive community connections, and tailored educational guidance, ensuring each child can thrive in a
              nurturing environment that respects their unique learning style and individual interests. Together, we
              inspire a generation of lifelong learners.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h2 className="text-xl font-semibold">Vision</h2>
            <p className="mt-3 text-muted-foreground">
              To be the leading catalyst for educational excellence in homeschooling, where every child is nurtured to
              reach their fullest potential. We aspire to create a dynamic and innovative learning ecosystem that
              embraces diversity, inspires curiosity, and fosters independent thinkers from an environment within our
              control. Through artificial resources, expert guidance, and a vibrant community, we aim to redefine what
              is possible in home education, preparing students to excel as empowered global citizens.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h2 className="text-xl font-semibold">Values</h2>
            <p className="mt-3 text-muted-foreground">
              We believe in personalization over standardization, flexibility that accommodates diverse learning needs,
              academic excellence across all subjects, and creating safe learning spaces where children can explore,
              question, and grow with confidence.
            </p>
          </div>
        </section>

        <section className="border-t bg-muted/30">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="text-2xl font-semibold">Corporate-grade, individual-first</h3>
              <p className="mt-3 text-muted-foreground">
                Whether you are a professional seeking language fluency, a family building a personalized pathway, or an
                adult reskilling in STEM, BestED connects you with expert educators who tailor learning to you.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
