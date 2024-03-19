// type definitions
import {formItem} from '@/types';
// components
import TextField from '../TextField/TextField';
import EmailField from '../EmailField/EmailField';
export interface formFieldProps {
    field: formItem
}
export default function FormField(props: formFieldProps) {
  const {field} = props
    switch (field.type) {
        case "text":
            return <TextField item={field}/>
        case "email":
            return <EmailField item={field}/>       
        case "date":
            return <DateField item={field}/>  
        case "select":
            return <SelectField item={field}/>     
        case "checkbox":
            return <CheckboxField item={field}/>           
        default:
            return <></>
    }
}
