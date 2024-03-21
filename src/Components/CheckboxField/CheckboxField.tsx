"use client"
import { formItem } from "@/types"
import { Checkbox } from "@/Components/ui/checkbox"
import { useState } from "react"

export interface formFieldProps {
    item: formItem
}
export default function CheckboxField(props: formFieldProps) {
    const {item} = props
    const [checked, setChecked] = useState(false)

    return (
        <div className="flex items-center space-x-2">
            <Checkbox id="terms" name={item.name} />
            <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
            {item.label}
            </label>
        </div>
    )
}
