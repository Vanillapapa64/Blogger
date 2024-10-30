import { useNavigate } from "react-router-dom";
import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";
import { useEffect } from "react";
export const Blogs = () => {
    const { loading, blogs ,redirect} = useBlogs();
    const navigate=useNavigate()
    useEffect(() => {
        if (redirect) {
            navigate("/signin");
        }
    }, [redirect, navigate]);
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

    return <div>
        <Appbar />
        <div  className="flex justify-center bg-gradient-to-r from-black to-indigo-950 min-h-screen">
            <div>
                {blogs.map(blog => <BlogCard
                    id={blog.id}
                    authorName={blog.author.name || "Anonymous"}
                    title={blog.title}
                    content={blog.content}
                    publishedDate={blog.publishedDate}
                />)}
            </div>
        </div>
    </div>
}

