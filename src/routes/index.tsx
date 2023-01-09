import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Component, ReactNode } from 'react';
import Homepage from '../pages';
import DetailMovie from "../pages/DetailMovie";
import ListFavoriteMovie from "../pages/ListFavoriteMovie";
import Sandbox from "../pages/Sandbox";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "/movie/:id_movie",
        element: <DetailMovie />,
    },
    {
        path: "/favorites",
        element: <ListFavoriteMovie />,
    },
    {
        path: "/sandbox",
        element: <Sandbox />,
    },
]);

const App = () =>{
    return <RouterProvider router={router} />;
};


export default App;