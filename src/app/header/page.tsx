/**
 * v0 by Vercel.
 * @see https://v0.dev/t/lJwnQlHSEBA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import SlideButton from "@/components/slide-button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { JSX, SVGProps } from "react"

export default function Component() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <div className="grid gap-2 py-6">
            <Link href="/" className="flex w-full items-center py-2 text-xl font-bold" prefetch={false}>
              Home
            </Link>
            <Link href="/cheap-cpanel-licenses" target="_blank" className="flex w-full items-center py-2 text-xl font-bold" prefetch={false}>
              Licenses
            </Link>
            <Link href="/license-reseller-account" target="_blank" className="flex w-full items-center py-2 text-xl font-bold" prefetch={false}>
              Reseller License
            </Link>
            <Link href="/docs" target="_blank" className="flex w-full items-center py-2 text-xl font-bold" prefetch={false}>
              KB
            </Link>
            <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1 font-bold">
             Bucket <ChevronDownIcon className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-[200px]">
            <DropdownMenuLabel>Select Backup Storage</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              {/* <ImageIcon className="h-4 w-4 mr-2" /> */}
              ACRONIS 
            </DropdownMenuItem>
            <DropdownMenuItem>
              {/* <ImageIcon className="h-4 w-4 mr-2" /> */}
              BUCKET FOR BACKUP
            </DropdownMenuItem>
            <DropdownMenuItem>
              {/* <ImageIcon className="h-4 w-4 mr-2" /> */}
              AWS BUCKET
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
            {/* <Link href="#" target="_blank" className="flex w-full items-center py-2 text-xl font-bold" prefetch={false}>
              Clinet area
            </Link> */}
            <SlideButton url="https://lic.whmlicenses.com"/>
          </div>
        </SheetContent>
      </Sheet>
      <Link href="/" className="mr-6 hidden lg:flex" prefetch={false}>
        {/* <MountainIcon className="h-6 w-6" /> */}
        <h1 className="text-2xl font-bold">WHM<span className="text-indigo-500">LICENSE</span> </h1>
        <span className="sr-only">Acme Inc</span>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-6">
        <Link
          href="/"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-lg font-bold transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          Home
        </Link>
        <Link
        target="_blank"
          href="/cheap-cpanel-licenses"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-lg font-bold transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          Licenses
        </Link>
        <Link
        target="_blank"
          href="/license-reseller-account"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-lg font-bold transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          Reseller License
        </Link>
        <Link
        target="_blank"
          href="/docs"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-lg font-bold transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
         KB
        </Link>
        <div className="group inline-flex h-9 w-max items-center justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1 font-bold">
             Bucket <ChevronDownIcon className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-[200px]">
            <DropdownMenuLabel>Select Backup Storage</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              {/* <ImageIcon className="h-4 w-4 mr-2" /> */}
              ACRONIS 
            </DropdownMenuItem>
            <DropdownMenuItem>
              {/* <ImageIcon className="h-4 w-4 mr-2" /> */}
              BUCKET FOR BACKUP
            </DropdownMenuItem>
            <DropdownMenuItem>
              {/* <ImageIcon className="h-4 w-4 mr-2" /> */}
              AWS BUCKET
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        </div>
        {/* <Link
        target="_blank"
          href="#"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-xl font-bold transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          Client area
        </Link> */}
        <div className="group inline-flex h-9 w-max items-center justify-center">
        <SlideButton url="https://lic.whmlicenses.com"/></div>
      </nav>
    </header>
  )
}

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

function ChevronDownIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


function ImageIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
<img src="./aws.svg" width={24} height={24} alt="" className="mr-[.5rem]" />
  )
}


function Package2Icon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}


function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}