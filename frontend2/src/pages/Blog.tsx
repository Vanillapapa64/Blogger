import { Appbar } from "../components/Appbar";
import { FullBlog } from "../components/FullBlog";
import { Spinner } from "../components/Spinner";
import { useBlog } from "../hooks";
import {useParams} from "react-router-dom";

// atomFamilies/selectorFamilies
export const Blog = () => {
    const { id } = useParams();
    const {loading, blog} = useBlog({
        id: id || ""
    });

    if (loading || !blog) {
        return <div>
            <Appbar />
        
            <div className="h-screen flex flex-col justify-center bg-gradient-to-r from-black to-indigo-950">
                
                <div className="flex justify-center">
                    <Spinner />
                </div>
            </div>
        </div>
    }
    return <div className="bg-gradient-to-r from-black to-indigo-950 min-h-screen">
        <FullBlog blog={blog} />
    </div>
}