import { formData, formItem } from '@/types';
import FormField from '../FormField/FormField';
type formProps = {
    formData: formData
} 
export default function Form(props: formProps) {
  const {formData} = props
  const {fields} = formData

  return (
    <div className='w-1/2 m-auto'>
        <form className="flex flex-col space-y-4">
            {fields.map((field: formItem, index: number) => (
                <div key={index}>
                    <FormField field={field} />
                </div>
            ))}
        </form>
    </div>
  )
}
