import { Link, useLoaderData } from "react-router-dom";
import placeHolderImg from "../assets/404.jpg"
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";


const Content = () => {
    const blog = useLoaderData();
    const { cover_image, title, tags, body_html } = blog;

    return (
        <div className="border p-2 rounded-md">
            <div
                className="hover:no-underline focus:no-underline ">

                <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image || placeHolderImg} />
                <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">
                    {
                        tags.map(tag => {
                            <a
                                key={tag}
                                rel="noopener noreferrer"
                                href="#"
                                className="px-3 py-1 rounded-sm hover:underline font-semibold text-gray-900">#{tag}</a>
                        })
                    }

                </div>
                <div className="p-6 space-y-2 text-black">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
                </div>
            </div>
        </div>
    );
};

export default Content;