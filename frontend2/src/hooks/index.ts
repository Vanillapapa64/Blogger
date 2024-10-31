import { useEffect, useState } from "react"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";


export interface Blog {
    "content": string;
    "title": string;
    "id": number;
    "publishedDate":string
}

export const useBlog = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then(response => {
            setBlog(response.data.blog);
            setLoading(false);
        })
        .catch(err => {
            console.error("Error fetching blog:", err);
            navigate('/signin');
        });
    }, [id, navigate]);

    return {
        loading,
        blog
    };
};
export const useownBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);
    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/ownblogs`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then(response => {
            setBlogs(response.data.ownblogs);
            setLoading(false);
            
        })
        .catch(err => {
            console.error("Error fetching blogs:", err);
        });
    }, []);
    return {
        loading,
        blogs
    };
};
export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [redirect,setredirect]=useState(false)

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then(response => {
            setBlogs(response.data.blogswithist);
            setLoading(false);
            
        })
        .catch(err => {
            console.error("Error fetching blogs:", err);
            setredirect(true)
        });
    }, []);

    return {
        loading,
        blogs,
        redirect
    };
};