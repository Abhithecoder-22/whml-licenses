import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { JSX, SVGProps } from "react";


type Header = {
    label: string;
    className?: string;
  };
  
  type Cell = {
    content: JSX.Element | string;
    className?: string;
  };
  
  type Row = Cell[];
  
  interface DocsTableProps {
    title: string;
    headers: Header[];
    rows: Row[] | null;
  }

export default function DocsTable({ title, headers, rows }: DocsTableProps) {
  return (
    <div className="border rounded-lg">
      <div className="flex items-center justify-between bg-muted px-4 py-3">
        <h3 className="text-lg font-medium">{title}</h3>
        {/* <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <FilterIcon className="h-4 w-4" />
            <span className="sr-only">Filter</span>
          </Button>
          <Button variant="outline" size="sm">
            <DownloadIcon className="h-4 w-4" />
            <span className="sr-only">Download</span>
          </Button>
        </div> */}
      </div>
      <div className="relative w-full overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              {headers.map((header, index) => (
                <TableHead key={index} className={header.className}>{header.label}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
          {rows && rows.length > 0 && (
            <TableBody>
              {rows.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <TableCell key={cellIndex} className={cell.className}>
                      {cell.content}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

function DownloadIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

function FilterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
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
