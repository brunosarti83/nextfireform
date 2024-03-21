"use client"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select"
import { formItem } from "@/types"
import { useState } from "react";

export interface formFieldProps {
    item: formItem
}

export default function SelectField(props: formFieldProps) {
    const {item} = props
    const [value, setValue] = useState<string>('');

    const onChange = (value: string) => {
        setValue(value)
    }

  return (
    <Select onValueChange={onChange} value={value} name={item.name}>
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
