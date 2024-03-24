import { Link } from "react-router-dom";
import placeHolderImg from "../assets/404.jpg"


const BlogCard = ({ blog }) => {
    const { cover_image, title, published_at, description, id } = blog;

    return (
        <div className="transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 rounded-lg">
            <Link
                to={`/blog/${id}`}
                className="hover:no-underline focus:no-underline ">

                <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image || placeHolderImg} />
                <div className="p-6 space-y-2 text-black">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-md block mt-2 text-gray-400">{new Date(published_at).toLocaleDateString()}</span>
                    <p>{description}</p>
                </div>
            </Link>
        </div>
    );
};

export default BlogCard;