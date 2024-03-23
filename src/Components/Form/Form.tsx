"use client"
import { buttonItem, formData, formItem } from '@/types';
import FormField from '../FormField/FormField';
import { useForm } from '@/hooks/useForm';
import { validate } from '@/lib/utils';
import { Button } from "@/Components/ui/button"
import { addItem } from '@/firestoreHandlers';

type formProps = {
    formData: formData
} 
export default function Form({formData}: formProps) {
    // get fields and buttons from props
    const {fields, buttons} = formData

    // declare useForm Hook
    const {stateData, errors, onChange, clearData} = useForm(fields.map(field => field.name), validate)

    // disable button if there is an error
    const disabled = Object.keys(errors).some((key) => errors[key].length) 
    || Object.keys(stateData).some((key) => fields.filter(field => field.name === key)[0].required && !stateData[key])
    
    const onSubmit = async (e: any) => {
        e.preventDefault()
        try {
            await addItem(stateData)
            clearData() 
            // redirect to results page
        } catch (error) {
            console.log(error) // replace with toast
        }
    }

  return (
    <div className='w-1/2 m-auto'>
        <form className="flex flex-col space-y-8" onSubmit={onSubmit}>
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
