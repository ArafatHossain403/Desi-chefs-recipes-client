import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import ChefLayouts from "../layouts/ChefLayouts";
import Chefs from "../pages/Home/Chefs/Chefs";
import ChefsDetails from "../pages/ChefsDetails/ChefsDetails";
import Login from "../pages/Login/Login";
import Registration from "../pages/Home/Registration/Registration";
import Blog from "../pages/Blogs/Blog";
import Error from "../pages/Error/Error";
import PrivateRoutes from "./PrivateRoutes";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router= createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/',
                element: <Chefs></Chefs>

            },
            
            
        ]
    },
    {
        path:'chefs',
        element:<ChefLayouts></ChefLayouts>,
        loader: ({params}) => fetch(`https://y-arafathossain403.vercel.app/chefs/${params.id}`),
        children: [
            {
                path:':id',
                element: <PrivateRoutes><ChefsDetails></ChefsDetails></PrivateRoutes>
                // loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`),

            }
            
        ],
        

    },
    {
        path:'/login',
        element: <Login></Login>

    },
    {
        path:'/registration',
        element: <Registration></Registration>

    },
    {
        path:'/blog',
        element: <Blog></Blog>

    },
    {
        path:'*',
        element:<Error></Error>

    }
])

export default router;