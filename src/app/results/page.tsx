"use client"

import { readItems } from "@/firestoreHandlers"
import { useEffect, useState } from "react"

export default function Results() {

    // I will start with a useEffect to subscribe to database results but I think
    // this could be changed to an api request since data is not client dependant
    const [items, setItems] = useState<any[]>([])

    useEffect(() => {
        const unsubscribe = readItems(setItems)
        return () => unsubscribe()
    },[])
    
  return (
    <div>Results</div>
  )
}
