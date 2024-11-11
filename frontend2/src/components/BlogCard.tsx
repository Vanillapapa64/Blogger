import { Link } from "react-router-dom";
interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: number;
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return <Link to={`/blog/${id}`}>
        <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
            <div className="flex">
                <Avatar name={authorName||"Anonymous"} />
                <div className="font-extralight pl-2 text-sm flex justify-center flex-col text-slate-400" >{authorName}</div>
                <div className="flex justify-center flex-col pl-2 flex justify-center flex-col">
                    <Circle />
                </div>
                <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
                    {publishedDate}
                </div>
            </div>
            <div className="text-2xl font-bold pt-2 text-white">
                {title}
            </div>
            <div className="text-md font-thin text-white">
                {content.slice(0, 100) + "..."}
            </div>
            <div className="text-slate-500 text-sm font-thin pt-4 text-slate-200">
                {`${Math.ceil(content.length / 100)} minute(s) read`}
            </div>
        </div>
    </Link>
}

export function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-500">

    </div>
}

export function Avatar({name}:{name:string}) {
    return (
        <div className="hidden sm:inline-flex relative inline-flex items-center justify-center w-16 h-16  bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="text-2xl text-gray-600 dark:text-gray-300">{name[0].toUpperCase()}</span>
        </div>
    )
}
'use client'

import { useState, useRef } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { LogOut, FileText, User } from 'lucide-react'

export function Avatar2({ name = '', onOwnBlogs, onLogout }: { name?: string, onOwnBlogs: () => void, onLogout: () => void }) {
    const [open, setOpen] = useState(false)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    const getInitial = (name: string) => {
        return name.trim().charAt(0).toUpperCase() || <User className="h-6 w-6 text-gray-600 dark:text-gray-300" />
    }

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        }
        setOpen(true)
    }

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
        setOpen(false)
        }, 300) // Delay closing by 300ms
    }

    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
            <div 
            className="relative inline-flex items-center justify-center size-10 lg:w-16 lg:h-16 bg-gray-100 rounded-full dark:bg-gray-600 cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
            {typeof getInitial(name) === 'string' ? (
                <span className="lg:text-2xl text-lg text-gray-600 dark:text-gray-300">{getInitial(name)}</span>
            ) : (
                getInitial(name)
            )}
            </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
            align="end" 
            className="w-56"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <DropdownMenuItem onClick={onOwnBlogs}>
            <FileText className="mr-2 h-4 w-4" />
            <span>Own blogs</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
            </DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
    )
}