import {
  Users,
  Settings,
  Bookmark,
  LayoutGrid,
  LucideIcon,
  CalendarCheck,
} from 'lucide-react'

type Submenu = {
  href: string
  label: string
  active: boolean
}

type Menu = {
  href: string
  label: string
  active: boolean
  icon: LucideIcon
  submenus: Submenu[]
}

type Group = {
  groupLabel: string
  menus: Menu[]
}

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: '',
      menus: [
        {
          href: '/admin/dashboard',
          label: 'Dashboard',
          active: pathname.includes('/admin/dashboard'),
          icon: LayoutGrid,
          submenus: [],
        },
        {
          href: '/admin/bookings',
          label: 'Bookings',
          active: pathname.includes('/admin/bookings'),
          icon: CalendarCheck,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: 'Settings',
      menus: [
        {
          href: '/admin/users',
          label: 'Users',
          active: pathname.includes('/admin/users'),
          icon: Users,
          submenus: [],
        },
        {
          href: '/admin/account',
          label: 'Account',
          active: pathname.includes('/admin/account'),
          icon: Settings,
          submenus: [],
        },
      ],
    },
  ]
}
