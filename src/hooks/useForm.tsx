import { useState } from "react";

export const useForm = (formFields:string[], validate:Function) => {
    const initialState: {[key: string]: any} = {}
    formFields.forEach((field:string) => {
        initialState[field] = ''
    })
    const [stateData, setStateData] = useState<{[key:string]:any}>({...initialState});
    const [errors, setErrors] = useState<{[key:string]:string}>({...initialState});

    const onChange = (e: any) => {
        setStateData({
            ...stateData,
            [e.target.name]: e.target.value
        });
        setErrors(validate({
            ...stateData,
            [e.target.name]: e.target.value
        }, errors))
    }

    const clearData = () => {
        setStateData({...initialState})
        setErrors({...initialState})
    }

    return {stateData, errors, onChange, clearData}
}