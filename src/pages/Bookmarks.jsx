import { useEffect, useState } from "react";
import { getBlogs } from "../utilits";
import BlogCard from "../components/BlogCard";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loader from "../components/Loader";
import { deleteBlog } from "../utilits";
import EmptyState from "../components/EmptyState";



const Bookmarks = () => {
    const navigation = useNavigation();

    const [blogs, setBlogs] = useState([])
    const allBlogs = useLoaderData();

    useEffect(() => {
        const storedBlogsId = getBlogs();
        const storedBlogs = allBlogs.filter(blog => storedBlogsId.includes(blog.id))
        setBlogs(storedBlogs)
    }, [allBlogs])

    const handleDelete = id => {
        deleteBlog(id)
        const storedBlogsId = getBlogs();
        const storedBlogs = allBlogs.filter(blog => storedBlogsId.includes(blog.id))
        setBlogs(storedBlogs)
    }


    if (navigation.state === "loading") return <Loader></Loader>
    if (blogs.length < 1) return <EmptyState message='No Bookmarks Available!' address="/blogs" label="Go to Blogs"></EmptyState>

    return (
        <div>
            <div className="grid px-4 sm:px-8 lg:px-16 mt-8 justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {
                    blogs.map(blog => <BlogCard
                        handleDelete={handleDelete}
                        deletable={true} blog={blog} key={blog.id}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default Bookmarks;