import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import ChefLayouts from "../layouts/ChefLayouts";
import Chefs from "../pages/Home/Chefs/Chefs";
import ChefsDetails from "../pages/ChefsDetails/ChefsDetails";

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

            }
        ]
    },
    {
        path:'chefs',
        element:<ChefLayouts></ChefLayouts>,
        loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`),
        children: [
            {
                path:':id',
                element: <ChefsDetails></ChefsDetails>
                // loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`),

            }
        ]

    }
])

export default router;