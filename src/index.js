import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import LoginIndex from "./pages/login/loginIndex";
import RegisterIndex from "./pages/register/registerIndex";

//permit to create the route

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: "/login",
        element: <LoginIndex/>
    },
    {
        path: "/register",
        element: <RegisterIndex/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

