import { LandingPage } from '@/components/custom/landing-page'
import { SignedIn, SignedOut } from '@clerk/nextjs'

export default function Home() {
  // Remove 'use server' since Home should be a client component
  return (
    <>
      <SignedOut>
        <LandingPage />
      </SignedOut>

      <SignedIn>
        <p>default route</p>
      </SignedIn>
    </>
  )
}
