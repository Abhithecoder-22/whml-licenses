import Link from "next/link";
import { JSX, SVGProps } from "react";

interface ListItemProps {
  index: number;
  title: string;
  href: string;
}

const listItems = [
  { title: "cPanel For Vps", href: "#" },
  { title: "cPanel For Dedicated", href: "#" },
  { title: "Plesk For Vps", href: "#" },
  { title: "Plesk For Dedicated", href: "#" },
  { title: "LiteSpeed 2 Worker", href: "#" },
  { title: "LiteSpeed 4 Worker", href: "#" },
  { title: "LiteSpeed 8 Worker", href: "#" },
  { title: "LiteSpeed X Worker", href: "#" },
  { title: "Jetbackup", href: "#" },
  { title: "Softaculous", href: "#" },
  { title: "Imunify360", href: "#" },
  { title: "Kernelcare", href: "#" },
  { title: "WHM Master Reseller", href: "#" },
  { title: "CXS", href: "#" },
  { title: "OSM", href: "#" },
  { title: "SitePad", href: "#" },
  { title: "Cloudlinux Shared Pro", href: "#" },
  { title: "Webuzo", href: "#" },
  { title: "Virtualizor", href: "#" },
  { title: "FleetSSL", href: "#" },
];

export default function InstallationComponent() {
  return (
    <section className="bg-background py-12 md:py-16 lg:py-20">
      <div className="contain">
        <div className="mb-8 md:mb-10 lg:mb-12">
          {/* <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2> */}
        </div>
        <div className="space-y-4 md:space-y-5 lg:space-y-6">
          {listItems.map((item, index) => (
            <ListItem key={index} index={index + 1} title={item.title} href={item.href} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ListItem({ index, title, href }: ListItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
        {index}
      </div>
      <Link
        href={href}
        className="group flex flex-1 items-center justify-between rounded-md bg-muted px-4 py-3 transition-colors hover:bg-muted/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        prefetch={false}
      >
        <div className="text-base font-medium text-foreground group-hover:underline">{title}</div>
        <ChevronRightIcon className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}

function ChevronRightIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
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
  );
}
