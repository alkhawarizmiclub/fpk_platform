import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import Error404Page from "../pages/Error404Page";
import PlainLayout from "../layouts/PlainLayout";
import UserLayout from "../layouts/UserLayout";
import Smi from "../pages/majors/Smi" ;
import PageLayout from "../layouts/PageLayout";
import Sma from "../pages/majors/Sma";
import Smp from "../pages/majors/Smp";
import Ea from "../pages/majors/Ea";
import Sv from "../pages/majors/Sv";
import Smc from "../pages/majors/Smc";
import Geo from "../pages/majors/Geo";
import Seg from "../pages/majors/Seg";
import ApplyPage from "../pages/ApplyPage";

export const router = createBrowserRouter([
    {
        element: <PlainLayout />,
        children: [
            {
                path: '/login',
                element: <LoginPage />
            },
            {
                path: '/signup',
                element: <SignUpPage />
            },
            {
                path: '/apply',
                element: <ApplyPage />
            },
            {
                path: '*',
                element: <Error404Page />
            }
        ]
    },
    {
        element: <UserLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            
            
        ]
    },
    {
        element: <PageLayout />,
        children: [
            {
                path: '/smi',
                element: <Smi />
            },
            {
                path: '/sma',
                element: <Sma />
            },
            {
                path: '/smp',
                element: <Smp />
            },
            {
                path: '/ea',
                element: <Ea />
            },
            {
                path: '/sv',
                element: <Sv/>
            },
            {
                path: '/smc',
                element: <Smc />
            },
            {
                path: '/geo',
                element: <Geo/>
            },
            {
                path: '/seg',
                element: <Seg />
            },
            
            
        ]
    }
])
