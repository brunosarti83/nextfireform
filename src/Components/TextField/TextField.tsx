"use client"
import {formItem} from '@/types';
import {useState} from 'react';
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
    <div>
        <label>{item.label}</label>
        <input type="text" name={item.name} onChange={onChange} value={value}/>
        <span>{error}</span>
    </div>
  )
}
