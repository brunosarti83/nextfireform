"use client"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select"
import { formItem } from "@/types"

export interface formFieldProps {
    item: formItem,
    stateData: {[key:string]:any},
    errors: {[key:string]:string},
    onChange: (e: any) => void
}

export default function SelectField({item, stateData, errors, onChange}: formFieldProps) {

    const returnOption = (option:string) => {
      // returnOption formats the return of onSelect from date to an event like response that onChange can work with
        return {
            target: {
                name: item.name,
                value: option
            }
        }
    }

  return (
    <Select 
        onValueChange={(option) => onChange(returnOption(option))} 
        value={stateData[item.name]} 
        name={item.name}
    >
        <SelectTrigger  className="w-[50ch]">
            <SelectValue placeholder={item.label} />
        </SelectTrigger>
        <SelectContent>
            {
                item.options?.map((option) => (
                    <SelectItem key={option} value={option}>{option}</SelectItem>
                ))
            }
        </SelectContent>
    </Select>
  )
}
