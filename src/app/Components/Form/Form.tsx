import { formData, formItem } from '@/types';
import FormField from '../FormField/FormField';
type formProps = {
    formData: formData
} 
export default function Form(props: formProps) {
  const {formData} = props
  const {items} = formData

  return (
    <div>
        <form>
            {items.map((item: formItem, index: number) => (
                <div key={index}>
                    <FormField item={item} />
                </div>
            ))}
        </form>
    </div>
  )
}
