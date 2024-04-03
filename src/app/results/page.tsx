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
        <section 
        className="flex flex-col justify-center items-center h-[350px] bg-dot-gray-500/[0.5] relative"
        >
            <h1 className="text-6xl font-extrabold text-gray-800 z-50">Results</h1>
            <h3 className="text-xl font-bold text-gray-800 z-50">This are the results so far...</h3>
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
        </section>
        <section
        className="p-8"
        >
            <DataTable columns={columns} data={items} />
        </section>
        {/* <Button onClick={() => console.log(items)}>Log</Button> */}
    </div>
  )
}
