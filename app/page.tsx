import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Video, Globe, CheckCircle2 } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

import { homeMetadata } from '@/lib/metadata'
export const metadata = homeMetadata

export default function Page() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-50 via-background to-teal-50 dark:from-emerald-950/20 dark:via-background dark:to-teal-950/20" />
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div className="space-y-6">
                <Badge className="bg-emerald-600 hover:bg-emerald-700">Corporate Individualized Learning</Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Learn without limits—on-site or online with BestED
                </h1>
                <p className="text-muted-foreground text-lg">
                  Personalized coaching in foreign languages, Math, and Science for learners from age 6 to adults.
                  Flexible delivery designed for professionals, families, and individuals everywhere.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                    <Link href="/offerings">Explore what we offer</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/about">Why BestED</Link>
                  </Button>
                </div>
                <ul className="mt-4 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> One-to-one & small group sessions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> CEFR levels A1–C2 support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Corporate-grade instruction
                  </li>
                </ul>
              </div>
              <div className="grid gap-3 sm:gap-4 grid-cols-2">
                <Card>
                  <CardContent className="p-2 sm:p-3">
                    <Image
                      src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=420&h=280&fit=crop&crop=center"
                      alt="Teacher guiding kids in a modern classroom"
                      width={420}
                      height={280}
                      className="rounded-md object-cover w-full h-32 sm:h-auto"
                    />
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-2 sm:p-3">
                    <Image
                      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=420&h=280&fit=crop&crop=center"
                      alt="Adult professional engaging in online learning via video call"
                      width={420}
                      height={280}
                      className="rounded-md object-cover w-full h-32 sm:h-auto"
                    />
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-2 sm:p-3">
                    <Image
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=420&h=280&fit=crop&crop=center"
                      alt="Teen student in a language lesson with a teacher"
                      width={420}
                      height={280}
                      className="rounded-md object-cover w-full h-32 sm:h-auto"
                    />
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-2 sm:p-3">
                    <Image
                      src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=420&h=280&fit=crop&crop=center"
                      alt="Diverse adult learners studying together"
                      width={420}
                      height={280}
                      className="rounded-md object-cover w-full h-32 sm:h-auto"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery formats */}
        <section className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-emerald-100">
              <CardContent className="p-6">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-emerald-50">
                  <Users className="h-5 w-5 text-emerald-700" />
                </div>
                <h3 className="text-xl font-semibold">In-person coaching</h3>
                <p className="text-muted-foreground">
                  Face-to-face sessions with expert educators for immersive, highly engaging learning.
                </p>
              </CardContent>
            </Card>
            <Card className="border-emerald-100">
              <CardContent className="p-6">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-emerald-50">
                  <Video className="h-5 w-5 text-emerald-700" />
                </div>
                <h3 className="text-xl font-semibold">Online/remote</h3>
                <p className="text-muted-foreground">
                  High-quality live virtual sessions tailored to your schedule and goals—learn from anywhere.
                </p>
              </CardContent>
            </Card>
            <Card className="border-emerald-100">
              <CardContent className="p-6">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-emerald-50">
                  <Globe className="h-5 w-5 text-emerald-700" />
                </div>
                <h3 className="text-xl font-semibold">Global readiness</h3>
                <p className="text-muted-foreground">
                  Build practical communication skills and academic mastery for real-world, global contexts.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Languages overview */}
        <section className="border-t bg-muted/30">
          <div className="container mx-auto px-4 py-12 md:py-20">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Languages, Math, and Science</h2>
              <p className="mt-3 text-muted-foreground">
                Personalized pathways from foundations to fluency and academic excellence.
              </p>
            </div>
            <div className="mt-8 grid gap-3 sm:gap-4 grid-cols-4 sm:grid-cols-2 lg:grid-cols-8">
              {[
                { name: "English", icon: "🇬🇧" },
                { name: "Arabic", icon: "🇸🇦" },
                { name: "German", icon: "🇩🇪" },
                { name: "French", icon: "🇫🇷" },
                { name: "Chinese", icon: "🇨🇳" },
                { name: "Dutch", icon: "🇳🇱" },
                { name: "Math", icon: "📐" },
                { name: "Science", icon: "🔬" }
              ].map((subject) => (
                <Card key={subject.name} className="border-emerald-100 hover:border-emerald-300 transition-all duration-200 hover:scale-105 cursor-pointer group">
                  <CardContent className="flex flex-col items-center justify-center gap-2 p-3 text-center">
                    <div className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-200">
                      {subject.icon}
                    </div>
                    <span className="font-medium text-xs sm:text-sm">{subject.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Button asChild variant="outline">
                <Link href="/offerings">See exam prep and levels</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid items-center gap-8 rounded-xl border bg-card p-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold">Start your BestED journey</h3>
              <p className="mt-2 text-muted-foreground">
                Book a consultation to tailor a plan that fits your goals, schedule, and learning style.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                <Link href="/consultation">Book a consultation</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/offerings#contact">Contact us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
