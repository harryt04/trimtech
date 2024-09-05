import { BookingsTable } from '@/components/custom/bookingsTable'
import { NewBookingForm } from '@/components/custom/newBookingForm'
import { Separator } from '@/components/ui/separator'

export default function Book() {
  return (
    <>
      <NewBookingForm></NewBookingForm>
      <div className="flex flex-row items-center justify-start gap-4"></div>
      <Separator className="my-4" />
      <p className="text-xl">All bookings</p>
      <BookingsTable />
    </>
  )
}
