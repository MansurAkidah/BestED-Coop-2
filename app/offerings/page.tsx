import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, School, Landmark, Globe2 } from "lucide-react"
import  LevelGrid from "./LevelGrid"

export const metadata = {
  title: "BestED Offerings | Languages, Math & Science, Exam Prep",
  description:
    "Personalized coaching for English, Kiswahili, German, French, Chinese, Dutch, plus Math and Science. CEFR A1–C2, exam pathways, and flexible delivery.",
}

const languages = [
  {
    name: "English",
    exams: "CEFR A1–C2",
    note: "Comprehensive academic, business, and conversational English.",
  },
  {
    name: "Kiswahili",
    exams: "CEFR-aligned A1–C2",
    note: "Foundations to advanced communication for regional and professional use.",
  },
  {
    name: "German",
    exams: "CEFR A1–C2",
    note: "Exam preparation supported; official examinations are administered by the Goethe-Institut.",
  },
  {
    name: "French",
    exams: "DELF/DALF A1–C2",
    note: "Targeted training for DELF/DALF from A1 through C2, including speaking, listening, reading, and writing.",
  },
  {
    name: "Chinese",
    exams: "CEFR A1–C2 equivalents",
    note: "Preparation for recognized online pathways; we connect you with appropriate exam providers.",
  },
  {
    name: "Dutch",
    exams: "CEFR A1–C2 equivalents",
    note: "Kenya does not have a standardized national exam; we put learners in touch with online exam providers.",
  },
  {
    name: "Math",
    exams: "Skill-based pathways",
    note: "From foundational arithmetic to advanced problem solving and exam strategies.",
  },
  {
    name: "Science",
    exams: "Skill-based pathways",
    note: "Concept mastery, scientific reasoning, and applied practice across core sciences.",
  },
]

const levels = [
  {
    name: "A1",
    description: "Beginner: Can understand and use familiar everyday expressions and very basic phrases. Can introduce themselves and ask/answer simple questions."
  },
  {
    name: "A2",
    description: "Elementary: Can communicate in simple and routine tasks requiring a direct exchange of information. Can describe in simple terms aspects of their background."
  },
  {
    name: "B1",
    description: "Intermediate: Can deal with most situations likely to arise while traveling. Can produce simple connected text on familiar topics."
  },
  {
    name: "B2",
    description: "Upper Intermediate: Can interact with a degree of fluency and spontaneity. Can produce clear, detailed text on a wide range of subjects."
  },
  {
    name: "C1",
    description: "Advanced: Can express ideas fluently and spontaneously. Can use language flexibly and effectively for social, academic, and professional purposes."
  },
  {
    name: "C2",
    description: "Proficient: Can understand with ease virtually everything heard or read. Can express themselves spontaneously, very fluently and precisely."
  },
]

export default function OfferingsPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-50 via-background to-teal-50 dark:from-emerald-950/20 dark:via-background dark:to-teal-950/20" />
          <div className="container mx-auto px-4 py-14 md:py-20">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <Badge className="bg-emerald-600 hover:bg-emerald-700">Offerings</Badge>
                <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">What we offer</h1>
                <p className="mt-3 max-w-2xl text-muted-foreground">
                  Individual and small-group coaching across languages, Math, and Science. Flexible delivery,
                  CEFR-aligned progress, and dedicated exam preparation pathways.
                </p>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/consultation"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-emerald-600 px-6 text-sm font-medium text-white shadow transition-colors hover:bg-emerald-700"
                >
                  Book a consultation
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Languages grid */}
        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {languages.map((lang) => (
              <Card key={lang.name} className="border-emerald-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <School className="h-5 w-5 text-emerald-700" aria-hidden="true" />
                    {lang.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">
                    <span className="font-medium">Levels: </span>
                    {lang.exams}
                  </p>
                  <p className="text-sm text-muted-foreground">{lang.note}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Notes: German examinations are conducted by the Goethe-Institut. For Dutch and Chinese, we facilitate
            connections to reputable online exam providers based on your goals.
          </p>
        </section>

        {/* CEFR levels with popup descriptions */}
        <section className="border-t bg-muted/30">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <h2 className="text-2xl font-semibold">CEFR-aligned coaching</h2>
            <p className="mt-2 text-muted-foreground">
              Structured progression with personalized pacing from beginner to mastery.
            </p>
            <LevelGrid levels={levels} />
          </div>
        </section>

        {/* Delivery formats */}
        <section className="container mx-auto grid gap-6 px-4 py-12 md:grid-cols-2 md:py-16">
          <Card className="border-emerald-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Landmark className="h-5 w-5 text-emerald-700" aria-hidden="true" />
                In-person coaching
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>
                One-to-one or small cohorts. Corporate-compatible schedules, outcome-focused plans, and applied
                practice.
              </p>
              <p className="flex items-center gap-2 text-foreground">
                <Check className="h-4 w-4 text-emerald-700" /> Personalized curricula and feedback
              </p>
              <p className="flex items-center gap-2 text-foreground">
                <Check className="h-4 w-4 text-emerald-700" /> Assessment and progress tracking
              </p>
            </CardContent>
          </Card>
          <Card className="border-emerald-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe2 className="h-5 w-5 text-emerald-700" aria-hidden="true" />
                Online/remote sessions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>Live, interactive sessions with flexible time zones and resources designed for remote productivity.</p>
              <p className="flex items-center gap-2 text-foreground">
                <Check className="h-4 w-4 text-emerald-700" /> Recording-friendly, resource-rich lessons
              </p>
              <p className="flex items-center gap-2 text-foreground">
                <Check className="h-4 w-4 text-emerald-700" /> Project-based and real-world tasks
              </p>
            </CardContent>
          </Card>
        </section>

        <section id="contact" className="border-t bg-muted/30">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <h3 className="text-2xl font-semibold">Contact</h3>
            <p className="mt-2 text-muted-foreground">
              Share your objectives, preferred schedule, and location (if in-person). We&apos;ll coordinate next steps.
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <a className="text-emerald-700 underline underline-offset-4" href="mailto:edithevelyne77@gmail.com">
                    edithevelyne77@gmail.com
                  </a>
                  <p className="mt-1 text-xs text-muted-foreground">Reach us anytime via email.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Phone</CardTitle>
                </CardHeader>
                <CardContent>
                  <a className="text-emerald-700 underline underline-offset-4" href="tel:+254796770947">
                    +254 796 770 947
                  </a>
                  <p className="mt-1 text-xs text-muted-foreground">Tap to call us directly.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Availability</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Weekdays, evenings, and weekends by appointment.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
