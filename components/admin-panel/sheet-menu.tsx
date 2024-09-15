import Link from 'next/link'
import { MenuIcon, Scissors } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Menu } from '@/components/admin-panel/menu'
import {
  Sheet,
  SheetHeader,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet'

export function SheetMenu() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden" asChild>
        <Button className="h-8" variant="outline" size="icon">
          <MenuIcon size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex h-full flex-col px-3 sm:w-72" side="left">
        <SheetHeader>
          <Button
            className="flex items-center self-center pb-2 pt-1 dark:text-secondary"
            variant="link"
            asChild
          >
            <Link href="/admin/bookings" className="flex gap-2 self-center">
              <Scissors className="mr-1 h-6 w-6" />
              <SheetTitle className="text-lg font-bold text-primary dark:text-secondary">
                TrimTech
              </SheetTitle>
            </Link>
          </Button>
        </SheetHeader>
        <Menu isOpen />
      </SheetContent>
    </Sheet>
  )
}
