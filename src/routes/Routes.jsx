import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../MainLayouts/MainLayouts";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import Blog from "../pages/Blog";
import Bookmarks from "../pages/Bookmarks";
import Content from "../components/Content";
import Author from "../components/Author";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>,
                loader: () => fetch(`https://dev.to/api/articles?per_page=20&top=7`)
            },
            {
                path: '/blog/:id',
                element: <Blog></Blog>,
                loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
                children: [
                    {
                        index: true,
                        element: <Content></Content>,
                        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`)
                    },
                    {
                        path: 'author',
                        element: <Author></Author>,
                        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`)
                    }
                ]
            },
            {
                path: '/bookmarks',
                element: <Bookmarks></Bookmarks>,
            }

        ]
    }
])