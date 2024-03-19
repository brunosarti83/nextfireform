
export type formData = formItem[]

export type formItem = {
    type: "text" | "email" | "date" | "select" | "checkbox" | "submit",
    label: string,
    name: string,
    options?: string[],
    required?: boolean,
}