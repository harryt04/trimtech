import { currentUser, User } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default async function Admin() {
  const user: User | null = await currentUser()
  if (!!user) {
    redirect('/admin/dashboard')
  }
  return null
}
