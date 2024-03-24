import { Link } from "react-router-dom";
import placeHolderImg from "../assets/404.jpg"
import { MdDeleteForever } from "react-icons/md";


const BlogCard = ({ blog, deletable, handleDelete }) => {
    const { cover_image, title, published_at, description, id } = blog;


    return (
        <div className="transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 relative rounded-lg">
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
            {deletable && <div
                onClick={() => handleDelete(id)}
                className="absolute -top-5 -right-5 cursor-pointer bg-primary hover:bg-secondary p-3 rounded-full hover:scale-105"><MdDeleteForever size={20} className="text-white group-hover:text-primary" /></div>}
        </div>
    );
};

export default BlogCard;