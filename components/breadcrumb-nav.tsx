"use client"

import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[]
}

export function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  return (
    <nav aria-label="Breadcrumb" className="w-full bg-slate-50/80 backdrop-blur-sm border-b border-slate-200/50">
      <div className="container mx-auto px-4">
        <ol className="flex items-center gap-1.5 py-3 text-sm text-slate-500 overflow-x-auto whitespace-nowrap">
          <li className="flex items-center gap-1.5">
            <a
              href="/"
              className="flex items-center gap-1 hover:text-[#4DD0E1] transition-colors font-medium"
            >
              <Home className="w-3.5 h-3.5" />
              <span>InnovaKids</span>
            </a>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-slate-300 flex-shrink-0" />
              {index === items.length - 1 ? (
                <span className="text-[#0a1628] font-semibold truncate max-w-[200px]">
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href}
                  className="hover:text-[#4DD0E1] transition-colors truncate max-w-[200px]"
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
