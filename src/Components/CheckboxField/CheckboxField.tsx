"use client"
import { formItem } from "@/types"
import { Checkbox } from "@/Components/ui/checkbox"

export interface formFieldProps {
    item: formItem,
    stateData: {[key:string]:any},
    errors: {[key:string]:string},
    onChange: (e: any) => void
}
export default function CheckboxField({item, stateData, errors, onChange}: formFieldProps) {
    const returnCheck = (option:boolean) => {
        // returnCheck formats the return of onSelect from date to an event like response that onChange can work with
        return {
            target: {
                name: item.name,
                value: option
            }
        }
    }

    return (
        <div className="flex items-center space-x-2">
            <Checkbox 
                id="terms" 
                name={item.name} 
                checked={Boolean(stateData[item.name])}
                onCheckedChange={(option:boolean) => onChange(returnCheck(option))}
            />
            <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
            {item.label}
            </label>
        </div>
    )
}
