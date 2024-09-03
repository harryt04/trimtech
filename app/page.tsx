import { LandingPage } from '@/components/custom/landing-page'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import { currentUser, User } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default async function Home() {
  const user: User | null = await currentUser()
  if (!!user) {
    redirect('/admin/dashboard')
  }

  return (
    <>
      <SignedOut>
        <LandingPage />
      </SignedOut>
    </>
  )
}
