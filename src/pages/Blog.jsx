import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";

const Blog = () => {
    const blog = useLoaderData();
    const [tabIndex, setTabIndex] = useState(0)

    const { title, comments_count, public_reactions_count, published_at, reading_time_minutes, tags } = blog;

    return (
        <div className="max-w-4xl px-6 py-16 mx-auto space-y-12">
            <article className="space-y-8">
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{title}</h1>
                    <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-md font-normal">
                        <p className="text-sm">{reading_time_minutes} min read • {new Date(published_at).toLocaleDateString()}</p>
                        <p className="flex-shrink-0 mt-3 text-sm md:mt-0">{comments_count} comments • {public_reactions_count} views</p>
                    </div>
                    {/* tabs are here */}
                    <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap font-semibold">
                        <Link
                            to=""
                            onClick={() => setTabIndex(0)}
                            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-gray-600 rounded-t-lg ${tabIndex === 0 ? "border border-b-0" : "border-b "}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                            </svg>
                            <span>Content</span>
                        </Link>
                        <Link
                            to={`author`}
                            onClick={() => setTabIndex(1)}
                            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg ${tabIndex === 1 ? "border border-b-0 " : "border-b"} dark:border-gray-600`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                            </svg>
                            <span>Author</span>
                        </Link>
                    </div>
                    {/* route component */}
                </div>
                <Outlet></Outlet>

            </article>
        </div>
    );
};

export default Blog;