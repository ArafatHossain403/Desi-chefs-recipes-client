import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import ChefLayouts from "../layouts/ChefLayouts";
import Chefs from "../pages/Chefs/Chefs";
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
        path:'/chef-details',
        element:<ChefLayouts></ChefLayouts>,
        children: [
            {
                path:':id',
                element: <ChefsDetails></ChefsDetails>

            }
        ]

    }
])

export default router;