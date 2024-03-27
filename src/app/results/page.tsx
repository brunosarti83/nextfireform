"use client"

import { Button } from "@/Components/ui/button"
import { readItems } from "@/firestoreHandlers"
import { useEffect, useState } from "react"
import { DataTable } from "@/Components/DataTable/DataTable"
import { columns } from "@/Components/DataTable/columns"

export default function Results() {

    // I will start with a useEffect to subscribe to database results but I think
    // this could be changed to an api request since data is not client dependant
    const [items, setItems] = useState<any[]>([])

    useEffect(() => {
        const unsubscribe = readItems(setItems)
        return () => unsubscribe()
    },[])

  return (
    <div>
        <h1>Results</h1>
        <DataTable columns={columns} data={items} />
        <Button onClick={() => console.log(items)}>Log</Button>
    </div>
  )
}
