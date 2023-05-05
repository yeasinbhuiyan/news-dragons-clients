import Main from "../Layout/Main";
import {
    Navigate,
    createBrowserRouter

} from "react-router-dom";
import Category from "../pages/Category/Category";
import NewsLayout from "../Layout/NewsLayout";
import News from "../pages/News/News";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../Shared/Footer/Login&Registation/Login";
import Register from "../Shared/Footer/Login&Registation/Register";
import Terms from "../Shared/Terms";
import PrivateRoute from "../Providers/PrivateRoute";




const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path : '/',
                element: <Navigate to='/category/0'></Navigate>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>

            },{
                path : '/terms',
                element: <Terms></Terms>
            }
        ]
    },
    
    {
        path: 'category',
        element: <Main></Main>,
        children: [

            {
                path: ':id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://news-dragons-client-server-yeasinbhuiyan.vercel.app/categories/${params.id}`)
            },

        ]

    },
    {
        path: 'news',
        element: <PrivateRoute><NewsLayout></NewsLayout></PrivateRoute>,
        children: [
            {
                path: ':id',
                element: <News></News>,
                loader: ({ params }) => fetch(`https://news-dragons-client-server-yeasinbhuiyan.vercel.app/news/${params.id}`)

            }
        ]
    }
])


export default router