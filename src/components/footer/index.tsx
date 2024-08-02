"use client"
import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Card, CardContent } from '../ui/card'
import './page.css'
import JAButton from '../atoms/ja-button/ja-button'
import Link from 'next/link'
import SupportTeam from '../support-team/page'
// import { useRouter } from 'next/router'

const Footer = () => {
 
  return (
    <div>

      {/* =========================Support Team Section====================== */}
      <SupportTeam />


      {/* ===================== Subscribe Section ==================== */}

      <section className="w-full bg-muted">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center">
          <div className="max-w-2xl mx-auto text-center space-y-4 md:mr-8 md:text-left">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Subscribe to our newsletter</h2>

            <form className="flex flex-col sm:flex-row items-center gap-2 w-full max-w-md mx-auto md:mx-0">
              <Input type="email" placeholder="Enter your email" className="flex-1" required />
              <Button type="submit" className="w-full sm:w-auto">
                Subscribe
              </Button>
            </form>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 w-full max-w-md mx-auto md:mx-0">
              <div className="flex-1">
              <Link
              href="https://lic.whmlicenses.com/announcements/2/Refund-policy.html"
              target='_blank'
              className="inline-flex h-10 items-center justify-center rounded-md border border-black bg-black text-sm font-medium shadow-sm w-full text-white transition-colors hover:bg-zinc-900 hover:border-zinc-700 dark:border-zinc-600 dark:bg-zinc-600 dark:hover:bg-zinc-700 dark:focus-visible:ring-zinc-300"
              prefetch={false}
            >
              Refund Policy
            </Link>
              </div>
              <div className="flex-1">
              <Link
              href="https://lic.whmlicenses.com/announcements/1/Term-and-Condition-of-our-services.html"
              target='_blank'
              className="inline-flex h-10 items-center justify-center rounded-md border border-red-600 bg-red-600 text-sm font-medium shadow-sm w-full text-white transition-colors hover:bg-red-700 hover:border-red-700 dark:border-red-600 dark:bg-red-600 dark:hover:bg-red-700 dark:focus-visible:ring-red-300"
              prefetch={false}
            >
              Terms & Conditions
            </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <img src="/subscribe-2.png" alt="Vector Image" width={600} height={400} className="w-full h-auto" />
          </div>
        </div>
      </section>

    </div>
  )
}

export default Footer
