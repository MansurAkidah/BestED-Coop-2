"use client"
import React, { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

type Level = {
  name: string
  description: string
}

interface LevelGridProps {
  levels: Level[]
}

export default function LevelGrid({ levels }: LevelGridProps) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<Level | null>(null)

  const handleClick = (level: Level) => {
    setSelected(level)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setSelected(null)
  }

  return (
  <>
    <div className="mt-8 grid gap-4 grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {levels.map((lv) => (
        <Card
          key={lv.name}
          className="group border-slate-200 dark:border-slate-700 cursor-pointer hover:border-emerald-300 dark:hover:border-emerald-400 hover:shadow-md transition-all duration-200 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900"
          onClick={() => handleClick(lv)}
          tabIndex={0}
          role="button"
          aria-label={`Show description for ${lv.name}`}
        >
          <CardContent className="flex items-center justify-center p-5">
            <span className="text-base font-medium text-slate-700 dark:text-slate-200 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors duration-200">
              {lv.name}
            </span>
          </CardContent>
        </Card>
      ))}
    </div>

    {open && selected && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
        onClick={handleClose}
      >
        <div
          className="bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-600 p-6 max-w-lg w-full relative animate-in fade-in-0 zoom-in-95 duration-200"
          onClick={e => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200"
            onClick={handleClose}
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="pr-8">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
              {selected.name}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              {selected.description}
            </p>
          </div>
        </div>
      </div>
    )}
  </>
)
}