import AdminPanelLayout from '@/components/admin-panel/admin-panel-layout'
import { Navbar } from '@/components/admin-panel/navbar'
import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/nextjs'

export default function Layout({ children }) {
  return (
    <>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>

      <SignedIn>
        <Navbar />
        <div className="mt-16">
          <AdminPanelLayout>{children}</AdminPanelLayout>
        </div>
      </SignedIn>
    </>
  )
}
