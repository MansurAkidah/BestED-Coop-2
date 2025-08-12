import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <p className="text-sm text-muted-foreground">
          {"\u00A9"} {new Date().getFullYear()} BestED. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-6 text-sm">
          <Link href="/about" className="text-muted-foreground hover:text-foreground">
            About
          </Link>
          <Link href="/offerings" className="text-muted-foreground hover:text-foreground">
            What we offer
          </Link>
          <Link href="/offerings#contact" className="text-muted-foreground hover:text-foreground">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  )
}
