import { Button } from '@/components/ui/button'
import React from 'react'
import Page from '../header/page'
import Subscription from '@/components/subscription'
import PricingSection from '@/components/pricing-section'
import CheapCardContents from '@/components/cheap-cpanel-card-contents'
import Footer from '@/components/footer'
import './page.css'
import Component from '../header/page'
import Hero from '../hero/page'
import Link from 'next/link'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const page = () => {
  return (

    <div>
      <div className="pricing-section">
  {/* ==========Hero Section=========== */}
  <div className='main'>
        
  <div className="navbar">
          <Component />
      
        </div>
        {/* <Hero/> */}
        <div className="relative w-full h-[600px]">
  <img src="/hero.jpg" alt="Hero" className="absolute inset-0 object-cover w-full h-full" />
  <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 p-4 gap-4 mt-[-30px] ">
    <div className="flex flex-col justify-center gap-4 md:gap-10">
      <div className="grid gap-4">
        <h1 className="text-2xl font-bold tracking-tighter text-gray-900 dark:text-gray-50">
        WHM License: Save Big with Affordable cPanel Licenses
        </h1>
        <h2 className='text-lg font-semibold text-gray-800 dark:text-gray-50'>Unlock incredible savings on cPanel WHM license. Get reliable hosting control without breaking the bank.</h2>
        <p className="max-w-[700px] text-gray-500 dark:text-gray-400">
        In the dynamic global of internet site management, having a cPanel License with limitless debts and the state-of-the-art model is a game-changer. Elevate your website hosting enjoy, embody contemporary functions, and revel in unrivalled support – all with the flexibility of a couple of charge alternatives. Take the reins of your website’s success and discover the limitless opportunities with our cPanel solution.
        </p>
      </div>
      {/* <div className="flex gap-4">
      <Link
  href="#"
  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white text-sm font-medium shadow-sm w-full transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
  prefetch={false}
>
  Click To Start
</Link>

<Link
  href="#"
  className="inline-flex h-10 items-center justify-center rounded-md border border-red-600 bg-red-600 text-sm font-medium shadow-sm w-full text-white transition-colors hover:bg-red-700 hover:border-red-700 dark:border-red-600 dark:bg-red-600 dark:hover:bg-red-700 dark:focus-visible:ring-red-300"
  prefetch={false}
>
  Click To Join
</Link>

      </div> */}
    </div>
    <div className="flex items-center justify-center">
      <img src="/cheap-hero.png" alt="Right Side Image" className="object-contain w-full h-full" />
    </div>
  </div>
</div>
        </div>

        {/* ===================img-section================ */}
        <div className="w-full mt-[8rem]">
      <img
        src='/cheap-sec.png'
        alt="Full Width"
        className="w-full h-full object-contain"
        style={{ height: '100vh' }}
      />
    </div>

  
      {/* ===================Pricing Section================= */}
        <div className='mt-[10rem] sm:px-8 md:px-7 lg:px-10 px-5'>
          {/* <Subscription /> */}
          <PricingSection />

        </div>

        {/* ======================== Card Content Section ========================== */}
        <div className="card-text-section mt-10 px-0">
          <CheapCardContents />
        </div>

        {/* =======================Footer Section======================= */}
        <div className="card-text-section mt-10 px-0">
          <Footer />
        </div>


      </div>
    </div>
  )
}

export default page

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function XIcon(props: React.SVGProps<SVGSVGElement>) {
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
