import { createBrowserRouter } from "react-router-dom";
import Mai from "../../Mai";
import Home from "../Home";
import About from "../About"
import Features from "../Features";
import Blog from "../Blog"
import Contact from "../Contact";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Mai></Mai>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>,
            },
            {
                path:'/feature',
                element:<Features></Features>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            }
        ]
    }
])