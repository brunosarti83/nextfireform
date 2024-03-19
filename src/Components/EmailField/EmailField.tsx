"use client"
import {formItem} from '@/types';
import {useState} from 'react';
export interface formFieldProps {
    item: formItem
}

const validate = (value: string, required:boolean|undefined):string => {
    const mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (!value && required) {
        return 'This field is required';
    }
    if (!mailRegex.test(value)) {
        return 'Invalid email';
    }
    return '';
}
export default function EmailField(props: formFieldProps) {
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
        <input type="email" name={item.name} onChange={onChange} value={value} placeholder={'name@myemail.com'}/>
        <span>{error}</span>
    </div>
  )
}