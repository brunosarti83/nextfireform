"use client"
import {formItem} from "@/types"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/Components/ui/button"
import { Calendar } from "@/Components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/Components/ui/popover"

export interface formFieldProps {
    item: formItem,
    stateData: {[key:string]:any},
    errors: {[key:string]:string},
    onChange: (e: any) => void
}
 
export default function DateField({item, stateData, errors, onChange}: formFieldProps) {
    const returnDate = (date:Date) => {
      // returnDate formats the return of onSelect from date to an event like response that onChange can work with
    return {
        target: {
            name: item.name,
            value: date
        }
    }
  }
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !stateData[item.name] && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {stateData[item.name] ? format(stateData[item.name], "PPP") : <span>{item.label}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={stateData[item.name]}
          onSelect={(date) => onChange(returnDate(date as Date))}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}