
export type formData = {
    fields: formItem[],
    buttons: buttonItem[]
}

export type formItem = {
    type: "email" | "text" | "date" | "select" | "checkbox",
    label: string,
    name: string,
    options?: string[],
    required?: boolean,
}

export type buttonItem = {
    type: "submit" | "reset",
    label: string
}

