import toast from "react-hot-toast";

const getBlogs = () => {
    let blogs = []
    const storedBlogs = localStorage.getItem("blogs");
    if(storedBlogs){
        blogs = JSON.parse(storedBlogs);
    }
    return blogs
}

// save 

const saveBlogs = id => {
    const blogs = getBlogs();
    const isExits = blogs.find(blog => blog === id);
    if(isExits){
        return toast.error('ALready Bookmarked')
    }
    else{
        blogs.push(id);
        localStorage.setItem("blogs", JSON.stringify(blogs))
        toast.success('Blog Bookmarked Successfully')
    }
}

const deleteBlog = id => {
    let blogs = getBlogs();
    const remaining = blogs.filter(blog => blog !== id);
    localStorage.setItem("blogs", JSON.stringify(remaining))
    toast.success('Blog Removed from Bookmarked')
}

export {getBlogs, saveBlogs, deleteBlog}