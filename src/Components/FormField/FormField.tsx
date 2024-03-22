// type definitions
import {formItem} from '@/types';
// components
import TextField from '../TextField/TextField';
import EmailField from '../EmailField/EmailField';
import DateField from '../DateField/DateField';
import SelectField from '../SelectField/SelectField';
import CheckboxField from '../CheckboxField/CheckboxField';
export interface formFieldProps {
    field: formItem,
    stateData: {[key:string]:string},
    errors: {[key:string]:string},
    onChange: (e: any) => void
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
