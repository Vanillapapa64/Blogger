import { Blog } from "../hooks"
import { Appbar } from "./Appbar"

export const FullBlog = ({ blog }: {blog: Blog}) => {
    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-8 lg:pt-12">
                <div className="col-span-10 p-4 lg:p-8">
                    <div className="sm:text-2xl lg:text-4xl font-extrabold text-slate-500">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 pt-2 text-slate-400">
                        {blog.publishedDate}
                    </div>
                    <div className="pt-4 text-white">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="text-slate-600 text-lg text-slate-400">
                        Author
                    </div>
                    <div className="flex w-full">
                        <div className="pr-4 flex flex-col text-2xl justify-center text-white">
                            {blog.author.name || "Anonymous"} 
                        </div>
                        
                    </div>  
                </div>
                
            </div>
        </div>
    </div>
}