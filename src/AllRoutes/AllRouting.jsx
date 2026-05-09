import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import RootsLayOut from "../RootsLayOut/RootsLayOut";
import ErrorPages from "../Pages/ErrorPages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootsLayOut></RootsLayOut>,
    errorElement:<ErrorPages></ErrorPages>,
    children:[
        {
            index:true,
            element:<Home></Home>
        },
        {
            path:'apps',
            element:<Apps></Apps>
        },
        {
            path:'installation',
            element:<Installation></Installation>
        },
    ]
  },
  
]);
export default router;