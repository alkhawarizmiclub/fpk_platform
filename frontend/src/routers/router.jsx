import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import Error404Page from "../pages/Error404Page";
import PlainLayout from "../layouts/PlainLayout";
import UserLayout from "../layouts/UserLayout";

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
    }
])
