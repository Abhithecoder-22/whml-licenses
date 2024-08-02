/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3wUiszzvOxN
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { JSX, SVGProps, useState } from "react"
import { Button } from "@/components/ui/button"

export default function CopyButton() {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText("https://syslic.net/rm.sh")
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }
  return (
    <section className="flex items-center justify-between w-full max-w-4xl p-6 bg-primary border rounded-lg shadow-md">
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-start gap-2 bg-primary rounded-md">
          <div className="flex items-center gap-2 text-sm font-medium text-primary-foreground">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-primary-foreground">
            {/* <span>$</span> */}
            <span>bash &lt;(curl https://syslic.net/rm.sh)</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="w-8 h-8 text-primary-foreground hover:bg-primary/50"
          onClick={handleCopy}
        >
          <CopyIcon className="w-4 h-4" />
          <span className="sr-only">Copy</span>
        </Button>
        {copied && (
          <div className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-sm">Copied to clipboard</div>
        )}
      </div>
    </section>
  )
}

function CopyIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  )
}


function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}