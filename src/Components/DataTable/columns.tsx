"use client"

import { ColumnDef } from "@tanstack/react-table"
import { entry } from "@/types"
import { Timestamp } from "firebase/firestore"

export const columns: ColumnDef<entry>[] = [
    {
        accessorKey: "full_name",
        header: "Full Name",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "country_of_origin",
        header: "Country of Origin",
    },
    {
        accessorKey: "birth_date",
        header: () => <div className="text-center">Birth Date</div>,
        cell: ({ row }) => {
            const timestampInSeconds = row.getValue<Timestamp>("birth_date")
            const date = new Date(timestampInSeconds.seconds * 1000)
            const formated = date.toLocaleDateString("en-GB", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
            })
            return <div className="text-center">{formated}</div>
        }
    },
]