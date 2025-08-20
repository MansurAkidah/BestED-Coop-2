"use client"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

type Instructor = {
	id: string
	name: string
	image: string
	specialty: string
	description: string
	students: string
	rating: string
	courses: number | string
	socials: {
		linkedin: string
		twitter: string
	}
	fullProfile: string
}

const instructors: Instructor[] = [
	{
		id: "edith-evelyne",
		name: "Edith Evelyne",
		image: "/assets/img/education/Edith.png",
		specialty: "French Language",
		description: "Passionate French instructor with extensive experience in teaching all levels, from beginners to advanced learners.",
		students: "300+",
		rating: "4.8",
		courses: 12,
		socials: {
			linkedin: "https://linkedin.com/in/edith-evelyne",
			twitter: "https://twitter.com/edith-evelyne"
		},
		fullProfile: "Edith Evelyne has over 10 years of experience teaching French to students of all ages. She specializes in immersive, communicative methods and exam preparation for DELF/DALF. Her classes are engaging, interactive, and tailored to individual needs."
	},
	{
		id: "Mansur Akidah",
		name: "Mansur Akidah",
		image: "/assets/img/education/Mans.jpg",
		specialty: "Mathematics",
		description: "Expert Math coach with a focus on problem-solving and exam strategies for all levels.",
		students: "100+",
		rating: "4.7",
		courses: 10,
		socials: {
			linkedin: "https://linkedin.com/in/mansurakidah",
			twitter: "#"
		},
		fullProfile: "Mansur Akidah is a certified Math instructor with a passion for making complex concepts simple. He has helped hundreds of students excel in national and international exams."
	},
	
]

export default function InstructorProfiles() {
	const [selected, setSelected] = useState<Instructor | null>(null)
	const openProfile = (inst: Instructor) => setSelected(inst)
	const closeProfile = () => setSelected(null)

	return (
	<div className="flex min-h-[100dvh] flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden">
			<div className="container mx-auto px-4 py-12 md:py-4">
				<h1 className="text-3xl font-bold mb-8">Meet Our Instructors</h1>
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{instructors.map((inst) => (
						<Card key={inst.id} className="border-emerald-100 shadow-sm hover:shadow-lg transition">
							<div className="relative">
								<img
									src={inst.image}
									alt={inst.name}
									className="w-full h-48 object-cover rounded-t-lg"
								/>
								<div className="absolute top-2 left-2 flex gap-2">
									<Badge className="bg-emerald-600 text-white">{inst.specialty}</Badge>
								</div>
								<div className="absolute bottom-2 right-2 flex gap-2 bg-white/80 dark:bg-zinc-900/80 rounded px-2 py-1 text-xs">
									<span className="flex items-center gap-1"><svg width="14" height="14" fill="currentColor" className="text-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>{inst.rating}</span>
									<span className="flex items-center gap-1"><svg width="14" height="14" fill="currentColor" className="text-emerald-600" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12H9v-2h2v2zm0-4H9V6h2v4z"/></svg>{inst.courses} Courses</span>
								</div>
							</div>
							<CardHeader>
								<CardTitle className="text-lg">{inst.name}</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground text-sm mb-2">{inst.description}</p>
								<div className="flex gap-6 mb-2">
									<div>
										<span className="block text-lg font-bold">{inst.students}</span>
										<span className="text-xs text-muted-foreground">Students</span>
									</div>
									<div>
										<span className="block text-lg font-bold">{inst.rating}</span>
										<span className="text-xs text-muted-foreground">Rating</span>
									</div>
								</div>
								<div className="flex items-center justify-between">
									<button
										className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 text-sm font-medium transition"
										onClick={() => openProfile(inst)}
									>
										View Profile
									</button>
									<div className="flex gap-2">
										<a href={inst.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-zinc-500 hover:text-emerald-700">
											<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
										</a>
										<a href={inst.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-zinc-500 hover:text-emerald-700">
											<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 00-8.38 4.482c-4.083-.205-7.697-2.162-10.125-5.138a4.822 4.822 0 00-.664 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0024 4.557z"/></svg>
										</a>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Profile Drawer */}
				{selected && (
					<div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/40" onClick={closeProfile}>
						<div
							className="bg-white dark:bg-zinc-900 rounded-t-2xl md:rounded-2xl shadow-lg w-full max-w-md md:max-w-lg p-8 relative animate-slideInUp"
							onClick={e => e.stopPropagation()}
						>
							<button
								className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
								onClick={closeProfile}
								aria-label="Close"
							>
								<X size={24} />
							</button>
							<div className="flex flex-col items-center text-center">
								<img src={selected.image} alt={selected.name} className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-emerald-100" />
								<h2 className="text-2xl font-bold mb-1">{selected.name}</h2>
								<Badge className="bg-emerald-600 text-white mb-2">{selected.specialty}</Badge>
								<p className="text-muted-foreground mb-4">{selected.fullProfile}</p>
								<div className="flex gap-6 mb-4">
									<div>
										<span className="block text-lg font-bold">{selected.students}</span>
										<span className="text-xs text-muted-foreground">Students</span>
									</div>
									<div>
										<span className="block text-lg font-bold">{selected.rating}</span>
										<span className="text-xs text-muted-foreground">Rating</span>
									</div>
									<div>
										<span className="block text-lg font-bold">{selected.courses}</span>
										<span className="text-xs text-muted-foreground">Courses</span>
									</div>
								</div>
								<div className="flex gap-3 justify-center">
									<a href={selected.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-zinc-500 hover:text-emerald-700">
										<svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
									</a>
									<a href={selected.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-zinc-500 hover:text-emerald-700">
										<svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 00-8.38 4.482c-4.083-.205-7.697-2.162-10.125-5.138a4.822 4.822 0 00-.664 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0024 4.557z"/></svg>
									</a>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
        </section>
      </main>
      <SiteFooter />
    </div>
	)
}
