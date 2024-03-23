import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function validate(data:{[key:string]: any}, errors:{[key:string]:string}) {

  Object.entries(data).forEach(([key, value]) => {
    if (key === 'full_name') {
      if (value.split(' ').length < 2) {
        errors[key] = 'Please enter your full name'
      } else {
        errors[key] = ''
      }
    }
    if (key === 'email') {
      const mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      if (!mailRegex.test(value)) {
        errors[key] = 'Invalid email'
      } else {
        errors[key] = ''
      }
    }
  })
  return errors
}

