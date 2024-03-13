import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CarsPage from "./pages/CarsPage";

const router = createBrowserRouter([
    {
        path: "", element: <MainLayout/>, errorElement: <ErrorPage/>, children: [
            {
                index: true, element: <Navigate to={"login"}/>
            },
            {
                path: "login", element: <LoginPage/>
            },
            {
                path: "register", element: <RegisterPage/>
            },
            {
                path: "cars", element: <CarsPage/>
            }
        ]
    }
])

export {router}