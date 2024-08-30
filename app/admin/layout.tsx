import { SideNav, TTRoute } from '@/components/custom/side-nav'
import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/nextjs'
import { BookIcon, UserIcon } from 'lucide-react'

export default function Layout({ children }) {
  const routes: TTRoute[] = [
    {
      title: 'Dashboard',
      href: '/admin',
      icon: <UserIcon />,
    },
    {
      title: 'Bookings',
      href: '/admin/book',
      icon: <BookIcon />,
    },
  ]
  return (
    <>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>

      <SignedIn>
        <div className="flex">
          <SideNav routes={routes} />
          {children}
        </div>
      </SignedIn>
    </>
  )
}
