import { UserButton } from '@clerk/nextjs'
import React from 'react'
import { currentUser, User } from '@clerk/nextjs/server'
import { Button } from '../ui/button'
import Link from 'next/link'

export type TTRoute = {
  title: string
  href: string
  icon: React.ReactNode
}

async function SideNav(props: { routes: TTRoute[] }) {
  const { routes } = props
  const user: User | null = await currentUser()

  if (!user || routes?.length <= 0) return null

  return (
    <div className="h-screen w-min bg-gray-50 p-8 text-center">
      <UserButton />
      <p className="py-4 text-sm">
        {user?.firstName} {user?.lastName}
      </p>

      {routes &&
        routes?.map((route, i) => {
          return (
            <Link key={i} href={route.href}>
              <Button className="my-4 w-full" variant="link">
                {route.icon}
                <span className="px-4">{route.title}</span>
              </Button>
            </Link>
          )
        })}
    </div>
  )
}

export { SideNav }
