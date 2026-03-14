import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MainOutlet from './components/MainOutlet';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import Search from './pages/Search';
import CategoriesPage from './pages/CategoriesPage';
import Login from './pages/Login';

let rout= createBrowserRouter([
    {
        path:"/",
        element: <MainOutlet />,
        children:[

            { index:true, element:<App /> },
            { path:"product", element:<ProductPage /> },
            { path:"cart", element:<CartPage /> },
            { path:"categories", element:<CategoriesPage /> },
            { path:"login", element:<Login /> }
        ]

    },
    {
        path:"/search",
        element: <Search />
    }
])

export default rout