import { SideNav } from '@/components/custom/side-nav'
import { RedirectToSignIn, SignedOut } from '@clerk/nextjs'

export default function Layout({ children }) {
  return (
    <>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <SideNav />
      {children}
    </>
  )
}
