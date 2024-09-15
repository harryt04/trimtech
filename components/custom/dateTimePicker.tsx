'use client'

import { CalendarIcon } from '@radix-ui/react-icons'
import { format } from 'date-fns'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { FormControl } from '@/components/ui/form'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { ScrollArea } from '@/components/ui/scroll-area'
import { UseFormReturn } from 'react-hook-form'

interface DateTimePickerProps {
  field: any
  form: UseFormReturn<any>
}

export function DateTimePicker({ field, form }: DateTimePickerProps) {
  const today = new Date()
  const aYearFromToday = new Date(
    today.getFullYear() + 1,
    today.getMonth(),
    today.getDate(),
  )

  function handleDateSelect(date: Date | undefined) {
    if (date) {
      form.setValue('time', date)
    }
  }

  function handleTimeChange(type: 'hour' | 'minute' | 'ampm', value: string) {
    const currentDate = form.getValues('time') || new Date()
    let newDate = new Date(currentDate)

    if (type === 'hour') {
      const hour = parseInt(value, 10)
      newDate.setHours(newDate.getHours() >= 12 ? hour + 12 : hour)
    } else if (type === 'minute') {
      newDate.setMinutes(parseInt(value, 10))
    } else if (type === 'ampm') {
      const hours = newDate.getHours()
      if (value === 'AM' && hours >= 12) {
        newDate.setHours(hours - 12)
      } else if (value === 'PM' && hours < 12) {
        newDate.setHours(hours + 12)
      }
    }

    form.setValue('time', newDate)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            variant={'outline'}
            className={cn(
              'w-3/12 pl-3 text-left font-normal',
              !field.value && 'text-muted-foreground',
            )}
          >
            {field.value ? (
              format(field.value, 'MM/dd hh:mm aa')
            ) : (
              <span>Select a date & time</span>
            )}
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="ml-4 w-auto p-0">
        <div className="flex">
          <Calendar
            mode="single"
            selected={field.value}
            onSelect={handleDateSelect}
            initialFocus
            fromDate={today}
            toDate={aYearFromToday}
          />
          <div className="flex h-[300px] divide-x border-l">
            <ScrollArea>
              <div className="flex flex-col p-2">
                {Array.from({ length: 12 }, (_, i) => i + 1)
                  .reverse()
                  .map((hour) => (
                    <Button
                      key={hour}
                      size="icon"
                      variant={
                        field.value && field.value.getHours() % 12 === hour % 12
                          ? 'default'
                          : 'ghost'
                      }
                      className="aspect-square w-full shrink-0"
                      onClick={() => handleTimeChange('hour', hour.toString())}
                    >
                      {hour}
                    </Button>
                  ))}
              </div>
            </ScrollArea>
            <ScrollArea>
              <div className="flex flex-col p-2">
                {Array.from({ length: 12 }, (_, i) => i * 5).map((minute) => (
                  <Button
                    key={minute}
                    size="icon"
                    variant={
                      field.value && field.value.getMinutes() === minute
                        ? 'default'
                        : 'ghost'
                    }
                    className="aspect-square w-full shrink-0"
                    onClick={() =>
                      handleTimeChange('minute', minute.toString())
                    }
                  >
                    {minute}
                  </Button>
                ))}
              </div>
            </ScrollArea>
            <ScrollArea>
              <div className="flex flex-col p-2">
                {['AM', 'PM'].map((ampm) => (
                  <Button
                    key={ampm}
                    size="icon"
                    variant={
                      field.value &&
                      ((ampm === 'AM' && field.value.getHours() < 12) ||
                        (ampm === 'PM' && field.value.getHours() >= 12))
                        ? 'default'
                        : 'ghost'
                    }
                    className="aspect-square w-full shrink-0"
                    onClick={() => handleTimeChange('ampm', ampm)}
                  >
                    {ampm}
                  </Button>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
