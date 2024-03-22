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
    stateData: {[key:string]:any},
    errors: {[key:string]:string},
    onChange: (e: any) => void
}
export default function FormField({field, stateData, errors, onChange}: formFieldProps) {
    switch (field.type) {
        case "text":
            return <TextField item={field} stateData={stateData} errors={errors} onChange={onChange}/>
        case "email":
            return <EmailField item={field} stateData={stateData} errors={errors} onChange={onChange}/>       
        case "date":
            return <DateField item={field} stateData={stateData} errors={errors} onChange={onChange}/>  
        case "select":
            return <SelectField item={field} stateData={stateData} errors={errors} onChange={onChange}/>     
        case "checkbox":
            return <CheckboxField item={field} stateData={stateData} errors={errors} onChange={onChange}/>           
        default:
            return <></>
    }
}
