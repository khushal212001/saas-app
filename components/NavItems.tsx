"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
const navItems=[
  {
    label:"Home",
    href:'/'
  },
  {
    label:"Companions",
    href:"/companions"
  },
  {
    label:"My Journey",
    href:"my-journey"
  }
]
const NavItems = () => {

  const pathname= usePathname()

  return (
    <nav className="flex items-center">
      {
        navItems.map(({label,href})=>(
          <Link 
            href={href} 
            key={label} 
            className={cn(pathname===href && 'text-primary font-semibold gap-2 mr-2.5 ml-2.5')}> 
              {label} <br/>
          </Link>
        ))
      }
    </nav>
  )
}

export default NavItems