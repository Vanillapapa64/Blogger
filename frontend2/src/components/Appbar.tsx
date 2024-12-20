
import { usernameatom } from "@/assets/store"
import {  Avatar2 } from "./BlogCard"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useRecoilValue } from "recoil"

export const Appbar = () => {
    const navigate=useNavigate()
    const name=useRecoilValue(usernameatom)
    return <div className="border-b bg-gradient-to-r from-transparent to-indigo-950 flex justify-between px-2 py-4 lg:px-10">
        <Link to={'/'} className="flex flex-col justify-center cursor-pointer ">
        <div className="flex items-center justify-center ">
            <div className="relative inline-block group">
                <span className="text-4xl lg:text-5xl font-bold text-white relative z-10">
                Blogger
                </span>
                <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-75 blur-xl transition-opacity duration-300 ease-in-out -z-10"></div>
            </div>
            </div>
        </Link>
        <div className="flex gap-2 items-center lg:gap-10">
            <Link to={`/publish`}>
            <button className="relative inline-flex h-10 lg:h-14 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-md lg:text-lg  font-medium text-white backdrop-blur-3xl ">
                    New Blog
                </span>
                </button>
            </Link>
            <Avatar2 name={name} onLogout={()=>{
                localStorage.removeItem("token")
                navigate('/signin')
            }} onOwnBlogs={()=>navigate('/own')}/>
        </div>
    </div>
}