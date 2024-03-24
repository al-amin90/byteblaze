import { useLoaderData, useNavigation } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import Loader from "../components/Loader";


const Blogs = () => {
    const navigation = useNavigation();

    const blogs = useLoaderData();
    console.log(blogs);

    if (navigation.state === "loading") return <Loader></Loader>
    return (
        <div>
            <section className=" text-gray-100">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12">
                        <img src={blogs[0].cover_image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7" />
                        <div className="p-6 space-y-2 lg:col-span-5 text-black">
                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{blogs[0].title}</h3>
                            <span className="text-md block mt-2 text-gray-800">{new Date(blogs[0].published_at).toLocaleDateString()}</span>
                            <p>{blogs[0].description}</p>
                        </div>
                    </a>
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            blogs.slice(1, blogs.length).map(blog => <BlogCard
                                blog={blog} key={blog.id}></BlogCard>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;