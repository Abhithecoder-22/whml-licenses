"use client"

import CopyButton from "@/components/copy-button";
// import { CopyButton } from "@/components/copy-button";
import DocsTable from "@/components/docs-table";
import InstallationComponent from "@/components/installation";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Component() {
  const headers1 = [
    { label: 'all CentOS versions', className: '' },
    { label: 'all CloudLinux versions', className: '' },
    { label: 'EL** 8/AlmaLinux 8/RockyLinux 8', className: '' },
    { label: 'EL** 9/AlmaLinux 9/RockyLinux 9', className: '' },
    { label: 'Ubuntu 20.04', className: 'text-right' },
    { label: 'Ubuntu 22.04', className: 'text-right' },
  ];
  
  const rows1 = [
    [
      { content: '#1001', className: 'font-medium' },
      { content: 'John Doe', className: '' },
      { content: '2023-04-15', className: '' },
      { content: <Badge variant="outline">Pending</Badge>, className: '' },
      { content: '$99.99', className: 'text-right' },
    ],
    // Add more rows as needed
  ];
  
  // Headers and rows for the second table
  const headers2 = [
    { label: 'Ubuntu: 18.04 or higher', className: 'w-[100px]' },
    { label: 'CloudLinux any version', className: '' },
    { label: 'Centos 6 or higher', className: '' },
    { label: 'Debian: 9 or higher', className: '' },
    { label: 'FreeBSD: 12.04 or higher', className: '' },
    { label: 'EL** 8/AlmaLinux 8/RockyLinux 8', className: '' },
    { label: 'EL** 9/AlmaLinux 9/RockyLinux 9', className: '' },
  ];
  
  const rows2 = [
    [
      { content: 'Windows', className: 'font-medium' },
      { content: '10', className: '' },
      { content: <Badge variant="outline">Supported</Badge>, className: '' },
    ],
    // Add more rows as needed
  ];
    return (

      <div className="flex flex-col min-h-screen">
        <header className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-2">
            <img src="/placeholder.svg" alt="Logo" className="h-10 w-10" />
            <span className="text-xl font-bold">SYSLIC LICENSE</span>
            <span className="text-sm">v2.0</span>
          </div>
          <nav className="flex items-center space-x-4">
            <a href="#" className="text-gray-600">
              Home
            </a>
            <a href="#" className="text-gray-600">
              Packages
            </a>
            <a href="#" className="text-gray-600">
              TOS
            </a>
            <a href="#" className="text-white bg-purple-700 px-3 py-1 rounded">
              Support
            </a>
            <a href="#" className="text-gray-600">
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-600">
              <PhoneIcon className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-600">
              <TextIcon className="h-5 w-5" />
            </a>
          </nav>
        </header>
        <div className="flex flex-1">
          <aside className="w-64 p-4 border-r">
            <nav className="space-y-4">
              <div>
                <h2 className="text-lg font-bold text-blue-600">Customer Docs</h2>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-600">
                      License Installation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600">
                      Short Commands
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600">
                      Hostname SSL Renew
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600">
                      Bonus Commands
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-600">Reseller Docs</h2>
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-600">FAQ</h2>
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-600">Support</h2>
              </div>
            </nav>
          </aside>
          <main className="flex-1 p-8">
            <h1 className="text-4xl font-bold">SysLic Documentation</h1>
            <p className="text-xl text-gray-600">For Server Admins & Engineers</p>
            <hr className="my-4 border-t-2 border-gray-300" />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm">
                  <strong>DocV:</strong> 2.0
                </p>
                <p className="text-sm">
                  <strong>Author:</strong>{" "}
                  <a href="#" className="text-blue-600">
                    SysLic
                  </a>
                </p>
              </div>
              <div>
                <p className="text-sm">
                  <strong>Created:</strong> 3 April, 2023
                </p>
                <p className="text-sm">
                  <strong>Update:</strong> 30 October, 2023 <span className="text-red-600">•</span>
                </p>
              </div>
            </div>
            <div className="p-4 mt-4 bg-blue-100 rounded">
              <p>
                If you have any questions that are beyond the scope of this help file, Please feel free to email us{" "}
                <a href="#" className="text-blue-600">
                  ibdtafsir@gmail.com
                </a>
                .
              </p>
            </div>
            <div className="flex items-center justify-center mt-8 space-x-8">
              <img src="/placeholder.svg" alt="Ubuntu" className="h-12" />
              <img src="/placeholder.svg" alt="AlmaLinux" className="h-12" />
              <img src="/placeholder.svg" alt="Rocky Linux" className="h-12" />
            </div>
            <div className="table w-full">
            <DocsTable title="Supported OS for cPanel License" headers={headers1} rows={null} />
            </div>
            <div className="table w-full mt-[3rem]">
            <DocsTable title="Supported OS for other licenses" headers={headers2} rows={null} />
            </div>
        
            <div className="max-w-4xl mx-auto p-4">
      <div className="mb-6">
        <p className="text-lg">
          If your OS is not listed here, please contact support to be added in our system&apos;s supported OS.
        </p>
        <p className="text-lg font-semibold">
          It&apos;s your first time installing <span className="text-red-500">cPanel</span> on <span className="text-red-500">Almalinux 8/RockyLinux 8</span>?
        </p>
        <p className="text-lg">
          Make sure to enable network manager before rebooting cPanel server for the first time: <Link href="/article">Read article</Link>
        </p>
      </div>
      <hr className="border-t-2 border-gray-200 my-6" />
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Uninstallation all provider&apos;s license</h2>
        <div className="mt-2 relative">
        <CopyButton/>
        </div>
      </div>
      <hr className="border-t-2 border-gray-200 my-6" />
      <div className="mb-3">
        <h2 className="text-2xl font-bold">Installation</h2>
      
        {/* Add the rest of your content here */}
      </div>
      <div className="installation">
    <p className="text-lg">Our Licenses:</p>
      <InstallationComponent/>
    </div>
    </div>
    
          </main>
        </div>

      </div>
    )
  }
  
  function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
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
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    );
}
  
  
  function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
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
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    )
  }
  
  
  function TextIcon(props: React.SVGProps<SVGSVGElement>) {
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
        <path d="M17 6.1H3" />
        <path d="M21 12.1H3" />
        <path d="M15.1 18H3" />
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