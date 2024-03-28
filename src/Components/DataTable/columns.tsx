"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Entry } from "@/types"
import { Timestamp } from "firebase/firestore"

import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { HiOutlineSearch } from "react-icons/hi";
 
import { Button } from "@/Components/ui/button"
import { Input } from "@/Components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/Components/ui/popover"
import { useState } from "react"


export const columns: ColumnDef<Entry>[] = [
    {
        accessorKey: "full_name",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Full Name
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
        },
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "country_of_origin",
        header: ({ column }) => {
            return (
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                        variant="ghost"
                        >
                            Country of Origin
                            <HiOutlineSearch className="ml-2 h-4 w-4" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                        <Input
                            id="width"
                            placeholder="Search..."
                            value={column.getFilterValue() as string || ""}
                            className="col-span-2 h-8"
                            onChange={(ev) => column.setFilterValue(ev.target.value)}
                        />
                    </PopoverContent>
                </Popover>
            )
        },
        cell: ({ row }) => {
            const content = row.getValue<string>("country_of_origin")
            return <div className="text-left ml-4">{content}</div>
        }
    },
    {
        accessorKey: "birth_date",
        header: ({ column }) => {
            return (
                <div className="flex justify-center items-center">
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Birth Date
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
              </div>
            )
        },
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
    {
        id: "actions",
        cell: ({ row }) => {
          const entry = row.original
     
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => navigator.clipboard.writeText(entry.id)}
                >
                  Copy payment ID
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>View customer</DropdownMenuItem>
                <DropdownMenuItem>View payment details</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )
        },
      },
]