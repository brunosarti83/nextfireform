import { formData, formItem } from '@/types';
import FormField from '../FormField/FormField';
type formProps = {
    formData: formData
} 
export default function Form(props: formProps) {
  const {formData} = props
  const {fields} = formData

  return (
    <div>
        <form>
            {fields.map((field: formItem, index: number) => (
                <div key={index}>
                    <FormField field={field} />
                </div>
            ))}
        </form>
    </div>
  )
}
