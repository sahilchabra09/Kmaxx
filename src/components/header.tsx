"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function Header() {
  return (
    <header className="w-full">
      <div className="bg-[#FF9B62] text-white py-2 px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2" />
            <span>9501411935</span>
          </div>
          <span>|</span>
          <a href="mailto:helpdesk@kmaxx.in">helpdesk@kmaxx.in</a>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="#">Book Appointment</Link>
          <div className="flex items-center space-x-2">
            <Link href="#" className="hover:text-gray-200">
              Facebook
            </Link>
            <Link href="#" className="hover:text-gray-200">
              Instagram
            </Link>
            <Link href="#" className="hover:text-gray-200">
              YouTube
            </Link>
            <Link href="#" className="hover:text-gray-200">
              Google
            </Link>
          </div>
        </div>
      </div>
      <nav className="bg-white py-4 px-6 flex items-center justify-between shadow-sm">
        <Link href="/" className="flex items-center">
          <Image src="/placeholder.svg" alt="KMAXX American Hospital" width={180} height={50} className="h-12 w-auto" />
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className="px-4 py-2">About Us</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4">
                  <Link href="/services/cardiology" className="block p-2 hover:bg-gray-100 rounded">
                    Cardiology
                  </Link>
                  <Link href="/services/neurology" className="block p-2 hover:bg-gray-100 rounded">
                    Neurology
                  </Link>
                  <Link href="/services/pediatrics" className="block p-2 hover:bg-gray-100 rounded">
                    Pediatrics
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/doctors" legacyBehavior passHref>
                <NavigationMenuLink className="px-4 py-2">Doctors</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Departments</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4">
                  <Link href="/departments/gynecology" className="block p-2 hover:bg-gray-100 rounded">
                    Gynecology
                  </Link>
                  <Link href="/departments/neurology" className="block p-2 hover:bg-gray-100 rounded">
                    Neurology
                  </Link>
                  <Link href="/departments/cardiology" className="block p-2 hover:bg-gray-100 rounded">
                    Cardiology
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/cdc" legacyBehavior passHref>
                <NavigationMenuLink className="px-4 py-2">CDC</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blogs" legacyBehavior passHref>
                <NavigationMenuLink className="px-4 py-2">Blogs</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button className="bg-[#FF9B62] hover:bg-[#ff8a47]">
          <Phone className="mr-2 h-4 w-4" />
          Emergency
        </Button>
      </nav>
    </header>
  )
}

