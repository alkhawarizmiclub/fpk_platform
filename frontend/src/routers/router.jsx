import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import Error404Page from "../pages/Error404Page";
import PlainLayout from "../layouts/PlainLayout";

export const router = createBrowserRouter([
    {
        element: <PlainLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
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
    }
])
