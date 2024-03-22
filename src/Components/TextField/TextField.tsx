"use client"
import {formItem} from '@/types';
import { Input } from "@/Components/ui/input"

export interface formFieldProps {
    item: formItem,
    stateData: {[key:string]:any},
    errors: {[key:string]:string},
    onChange: (e: any) => void
}

export default function TextField({item, stateData, errors, onChange}: formFieldProps) {

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
        <label htmlFor={item.name}>{item.label}</label>
        <Input 
        type={item.type} 
        name={item.name} 
        onChange={onChange} 
        value={stateData[item.name]}
        className="w-[50ch]"
        />
        <span className='text-gray-500'>{errors[item.name]}</span>
    </div>
  )
}
