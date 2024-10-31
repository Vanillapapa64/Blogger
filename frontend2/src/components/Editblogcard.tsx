import { Link } from "react-router-dom";
interface BlogCardProps {
    title: string;
    content: string;
    publishedDate: string;
    id: number;
}
import { useNavigate } from "react-router-dom";
export const EditBlogCard = ({
    id,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    const navigate=useNavigate()
    return <div>
        <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer flex justify-between">
            <div>
            <Link to={`/blog/${id}`}>
            <div className="flex">
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
            </Link>
            </div>
            <button className="bg-white m-4 p-4 rounded-2xl h-1/4" onClick={()=>{
                navigate(`/edit/${id}`)
            }}>EDIT</button>
        </div>
    </div>
}
