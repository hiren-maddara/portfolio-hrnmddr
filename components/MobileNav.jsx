"use client"

import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import { usePathname} from "next/navigation"
import Link from "next/link"
import {CiMenuFries} from "react-icons/ci"
import { DialogTitle } from "@radix-ui/react-dialog"
import { useState } from "react"

const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "services",
        path: "/services"
    },
    {
        name: "resume",
        path: "/resume"
    },
    {
        name: "work",
        path: "/work"
    },
    {
        name: "contact",
        path: "/contact"
    },
]

function MobileNav() {
    const pathname = usePathname()

    const [open, setOpen] = useState(false)

    return <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-accent" />
        </SheetTrigger>

        <SheetContent className="flex flex-col">
            <DialogTitle className="hidden">Mobile Navigation</DialogTitle>
            {/* logo */}
            <div className="mt-32 mb-32 text-center text-2xl">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Hrn <span className="text-accent">.</span>
                    </h1>
                </Link>
            </div>

            {/* nav */}
            <nav className="flex flex-col justify-center items-center gap-8">
                {links.map((link, index) => 
                    <Link
                    onClick={()=>setOpen(false)}
                    href={link.path} key={index} 
                    className={`${link.path === pathname && 'text-accent border-b-2 border-accent'} text-xl capitalize hover:text-accent transition-all`}>
                        {link.name}</Link>
                )}
            </nav>

        </SheetContent>
    </Sheet>
}

export default MobileNav
