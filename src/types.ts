
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
    variant?: "primary" | "secondary" | "outline" | "ghost" | "link" | "destructive"
}

export type entry = {
    id: string,
    full_name: string,
    email: string,
    country_of_origin: string,
    birth_date: Date
}

