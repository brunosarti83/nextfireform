"use client" // necesito esto?
import {formItem} from '@/types';
import { Input } from "@/Components/ui/input"
export interface formFieldProps {
    item: formItem,
    stateData: {[key:string]:any},
    errors: {[key:string]:string},
    onChange: (e: any) => void
}
export default function EmailField({item, stateData, errors, onChange}: formFieldProps) {
  return (
    <div>
        <label>{item.label}</label>
        <Input 
        type={item.type} 
        name={item.name} 
        onChange={onChange} 
        value={stateData[item.name]} 
        placeholder={'name@myemail.com'}
        className="w-[50ch]"
        />
        <span className='text-rose-500'>{errors[item.name]}</span>
    </div>
  )
}