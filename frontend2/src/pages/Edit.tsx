import { ChangeEvent, useState } from "react";
import { Appbar } from "../components/Appbar";
import { Spinner } from "../components/Spinner";
import { useBlog } from "../hooks";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "@/config";

// atomFamilies/selectorFamilies
export const Edit = () => {
    const { id } = useParams();
    const {loading, blog} = useBlog({
        id: id || ""
    });
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
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
        <Appbar />
        <div className="flex justify-center w-full pt-8"> 
            <div className="max-w-screen-lg w-full">
                <input onChange={(e) => {
                    setTitle(e.target.value)
                }} type="text" value={blog.title} className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Title" />

                <TextEditor value={blog.content} onChange={(e) => {
                    setDescription(e.target.value)
                }} />
                <button onClick={async () => {
                    const response = await axios.put(`${BACKEND_URL}/api/v1/blog`, {
                        
                        title,
                        content: description,
                        id
                    }, {
                        headers: {
                            Authorization: localStorage.getItem("token")
                        }
                    });
                    navigate('/own')
                }} type="submit" className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    Publish post
                </button>
            </div>
        </div>
    </div>
}
function TextEditor({ onChange,value }: {onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void,value:string}) {
    return <div className="mt-2">
        <div className="w-full mb-4 bg-white">
            <div className="flex items-center justify-between border">
            <div className="my-2 bg-white rounded-b-lg w-full">
                <label className="sr-only">Publish post</label>
                <textarea value={value} onChange={onChange} id="editor" rows={8} className="focus:outline-none block w-full px-0 text-sm text-gray-800 bg-white border-0 pl-2" placeholder="Write an article..." required />
            </div>
        </div>
       </div>
    </div>
    
}