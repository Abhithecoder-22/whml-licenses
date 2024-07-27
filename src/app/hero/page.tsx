/**
 * v0 by Vercel.
 * @see https://v0.dev/t/I834dw7Bvdu
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Hero() {
  return (
    <div className="relative w-full h-[600px]">
      <img src="/hero.jpg" alt="Hero" className="absolute inset-0 object-cover w-full h-full" />
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 p-4 gap-4 mt-[-30px] ">
        <div className="flex flex-col justify-center gap-4 md:gap-10">
          <div className="grid gap-4">
            <h1 className="text-2xl font-bold tracking-tighter text-gray-900 dark:text-gray-50">
              Cheap cPanel License: Unlocking Affordable Website Management
            </h1>
            <p className="max-w-[700px] text-gray-500 dark:text-gray-400">
              Revolutionize your net hosting server via harnessing the power of reasonably-priced cheap cPanel license. Our pricing model is designed to be pocket-pleasant, making sure that you get the most from your investment without breaking the financial institution. It’s not just about cost savings; it is about unlocking a collection of capabilities that redefine your website hosting experience.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-black text-white text-sm font-medium shadow-sm w-full transition-colors hover:bg-gray-900 hover:text-white dark:border-gray-800 dark:bg-black dark:hover:bg-gray-900 dark:hover:text-white dark:focus-visible:ring-gray-300"
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

          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src="/whm-hero.png" alt="Right Side Image" className="object-cover w-full h-full" />
        </div>
      </div>
    </div>


  )
}