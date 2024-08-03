import Link from "next/link"

export default function SupportTeam() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Start Your Free Cheap cPanel License Trial Today</h1>
        </div>
        <div className="flex justify-center">
          <Link
            href="https://wa.me/9667987233"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            Click To Support Team
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-muted rounded-lg p-6 space-y-2 text-center">
            <h3 className="text-lg font-semibold">NO CREDIT CARD REQUIRED</h3>
            <Link href="#" className="text-primary hover:underline" prefetch={false}>
              Learn more
            </Link>
          </div>
          <div className="bg-muted rounded-lg p-6 space-y-2 text-center">
            <h3 className="text-lg font-semibold">48 Hrs FREE TRIAL</h3>
            <Link href="#" className="text-primary hover:underline" prefetch={false}>
              Learn more
            </Link>
          </div>
          <div className="bg-muted rounded-lg p-6 space-y-2 text-center">
            <h3 className="text-lg font-semibold">24/7 EXPERT SUPPORT</h3>
            <Link href="#" className="text-primary hover:underline" prefetch={false}>
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}