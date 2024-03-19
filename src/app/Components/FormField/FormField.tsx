import {formItem} from '@/types';
export interface formFieldProps {
    item: formItem
}
export default function FormField(props: formFieldProps) {
  const {item} = props
    switch (item.type) {
        case "text":
            return <TextField />
        case "email":
            return <EmailField />       
        case "date":
            return <DateField />  
        case "select":
            return <SelectField />     
        case "checkbox":
            return <CheckboxField />    
        case "submit":
            return <SubmitButton />        
        default:
            return <></>
    }
}
