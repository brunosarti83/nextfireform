"use client"
import { buttonItem, formData, formItem } from '@/types';
import FormField from '../FormField/FormField';
import { useForm } from '@/hooks/useForm';
import { validate } from '@/lib/utils';
import { Button } from "@/Components/ui/button"

type formProps = {
    formData: formData
} 
export default function Form({formData}: formProps) {
  const {fields, buttons} = formData
  const {stateData, errors, onChange} = useForm(fields.map(field => field.name), validate)
  const disabled = Object.keys(errors).some((key) => errors[key].length) 
  || Object.keys(stateData).some((key) => stateData[key].length === 0)

  return (
    <div className='w-1/2 m-auto'>
        <form className="flex flex-col space-y-8">
            {fields.map((field: formItem, index: number) => (
                <div key={index}>
                    <FormField field={field} stateData={stateData} errors={errors} onChange={onChange}/>
                </div>
            ))}
            {buttons.map((button: buttonItem, index:number) => (
                <div key={index}>
                    <Button type={button.type} disabled={disabled}>{button.label}</Button>
                </div>
            ))}
        </form>
    </div>
  )
}
