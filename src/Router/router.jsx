import Home from "../pages/Home";
import Main from "../Main/Main";

// const { createBrowserRouter } = require("react-router-dom");
import {
    createBrowserRouter

} from "react-router-dom";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]

    }
])


export default router