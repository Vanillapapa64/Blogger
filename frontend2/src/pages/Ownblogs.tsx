
import { Appbar } from "../components/Appbar"

import { BlogSkeleton } from "../components/BlogSkeleton";
import { useownBlogs } from "../hooks";
import { EditBlogCard } from "@/components/Editblogcard";
export const Ownblogs = () => {
    const { loading, blogs } = useownBlogs();

    if (loading) {
        return <div>
            <Appbar /> 
            <div  className="flex justify-center bg-gradient-to-r min-h-screen from-black to-indigo-950">
                <div>
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                </div>
            </div>
        </div>
    }
    if(blogs.length==0){
        return(<div>
            <Appbar />
        <div  className="flex justify-center bg-gradient-to-r from-black to-indigo-950 min-h-screen text-white">
            You dont have any Blogs Right now
        </div>
        </div>)
    }
    return <div>
        <Appbar />
        <div  className="flex justify-center bg-gradient-to-r from-black to-indigo-950 min-h-screen">
            <div>
                {blogs.map(blog => <EditBlogCard
                    id={blog.id}
                    title={blog.title}
                    content={blog.content}
                    publishedDate={blog.publishedDate}
                />)}
            </div>
        </div>
    </div>
}

