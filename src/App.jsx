import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css'
import Home from "./pages/Home.jsx";
import ErrorPage from "./pages/Error.jsx";
import UserDashboard,  { loader as userDashboardLoader } from "./pages/UserDashboard.jsx";
import Profile, { loader as profileLoader } from './pages/Profile';
import OrdersList from "./pages/OrdersList.jsx";
import OrderDetails, {loader as orderLoader} from "./pages/OrderDetails.jsx";
import Authentication, {action as AuthAction} from "./pages/Authentication.jsx";
import {checkAuthLoader, tokenLoader} from './util/auth';

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage/>,
        loader: tokenLoader,
        children: [
            {index: true, element: <Home/>},
            {
                path: "/auth", element: <Authentication/>,
                action: AuthAction
            },
            {
                path: "dashboard", loader: userDashboardLoader, element: <UserDashboard/>
            },
            {
                path: "profile", loader: profileLoader, element: <Profile/>
            },
            {
                path: "/orders",
                element: <OrdersList/>,
                loader: checkAuthLoader},

            {
                path: "/order/:orderCode",
                element: <OrderDetails/>,
                loader: orderLoader,
            }
        ]
    },

])

function App() {
    return (
        <RouterProvider router={router}/>
    )
}

export default App