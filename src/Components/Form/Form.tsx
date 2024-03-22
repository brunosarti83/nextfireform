"use client"
import { formData, formItem } from '@/types';
import FormField from '../FormField/FormField';
import { useForm } from '@/hooks/useForm';
import { validate } from '@/lib/utils';
type formProps = {
    formData: formData
} 
export default function Form({formData}: formProps) {
  const {fields} = formData
  const {stateData, errors, onChange} = useForm(fields.map(field => field.name), validate)

  return (
    <div className='w-1/2 m-auto'>
        <form className="flex flex-col space-y-8">
            {fields.map((field: formItem, index: number) => (
                <div key={index}>
                    <FormField field={field} stateData={stateData} errors={errors} onChange={onChange}/>
                </div>
            ))}
        </form>
    </div>
  )
}
