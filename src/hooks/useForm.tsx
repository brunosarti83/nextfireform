import { useState } from "react";

export const useForm = (formFields:string[], validate:Function) => {
    const initialState: {[key: string]: string} = {}
    formFields.forEach((field:string) => {
        initialState[field] = ''
    })
    const [stateData, setstateData] = useState<{[key:string]:string}>({...initialState});
    const [errors, setErrors] = useState<{[key:string]:string}>({...initialState});

    const onChange = (e: any) => {
        setstateData({
            ...stateData,
            [e.target.name]: e.target.value
        });
        setErrors(validate({
            ...stateData,
            [e.target.name]: e.target.value
        }))
    }

    return {stateData, errors, onChange}
}