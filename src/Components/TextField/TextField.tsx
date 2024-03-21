"use client"
import {formItem} from '@/types';
import {useState} from 'react';
import { Input } from "@/Components/ui/input"

export interface formFieldProps {
    item: formItem
}

const validate = (value: string, required:boolean|undefined):string => {
    if (!value && required) {
        return 'This field is required';
    }
    if (value.length < 3) {
        return 'Too short';
    }
    if (value.length > 30) {
        return 'Too long';
    }
    return '';
}
export default function TextField(props: formFieldProps) {
    const {item} = props
    const [value, setValue] = useState<string>('');
    const [error, setError] = useState<string>('');

    const onChange = (e: any) => {
        setValue(e.target.value);
        setError(validate(e.target.value, item.required));
    }
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
        <label htmlFor={item.name}>{item.label}</label>
        <Input 
        type={item.type} 
        name={item.name} 
        onChange={onChange} 
        value={value}
        className="w-[50ch]"
        />
        <span className='text-gray-500'>{error}</span>
    </div>
  )
}
