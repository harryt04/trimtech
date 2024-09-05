import Link from 'next/link'
import { ThemeSwitcher } from './themeSwitcher'
import { Button } from '../ui/button'

function LandingPage() {
  return (
    <div>
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="flex max-w-2xl flex-col items-center justify-center">
          <ThemeSwitcher />
          <h1 className="py-8 text-4xl font-bold"> TrimTech </h1>
          <p className="py-8 text-center text-sm">
            TrimTech is a purpose-built barbershop and salon booking and payment
            collection app. Built by barbers for barbers.
          </p>
          <p className="py-8 text-xl">Coming soon</p>
          <Button variant={'default'}>
            <Link href="https://forms.gle/grPSfC6ZdT7c2UNi8">
              Join the waitlist here
            </Link>
          </Button>
          <Button variant={'link'} className="my-4">
            <Link href="/login">Sign in to the free and open beta</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export { LandingPage }
