import { BookingsTable } from '@/components/custom/bookingsTable'
import { DateTimePicker } from '@/components/custom/dateTimePicker'
import { Separator } from '@/components/ui/separator'

export default function Book() {
  return (
    <>
      <DateTimePicker></DateTimePicker>
      <div className="flex flex-row items-center justify-start gap-4"></div>
      <Separator className="my-4" />
      <p className="text-xl">All bookings</p>
      <BookingsTable />
    </>
  )
}
