'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { toast } from 'sonner'
import { DateTimePicker } from './dateTimePicker'

const FormSchema = z.object({
  time: z.date({
    required_error: 'A date and time is required.',
  }),
})

export function NewBookingForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log('data: ', data)
    toast.success(
      `Added new booking for: ${format(data.time, 'MM/dd hh:mm aa')}`,
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="time"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Create a new booking</FormLabel>
              <DateTimePicker field={field} form={form} />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
