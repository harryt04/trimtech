import AdminPanelLayout from '@/components/admin-panel/admin-panel-layout'
import { Navbar } from '@/components/admin-panel/navbar'
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
        <Navbar />
        <div className="container px-4 pb-8 pt-8 sm:px-8">
          <AdminPanelLayout>{children}</AdminPanelLayout>
        </div>
      </SignedIn>
    </>
  )
}
