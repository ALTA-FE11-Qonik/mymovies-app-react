import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";

import Homepage from 'pages';
import DetailMovie from "pages/DetailMovie";
import ListFavoriteMovie from "pages/ListFavoriteMovie";
import Sandbox from "pages/Sandbox";

import { ThemeContext } from "utils/context";
import { setFavorites } from "utils/redux/reducer/reducer";

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
    const dispatch = useDispatch() // untuk melakukan perubahan data
    const [theme, setTheme] = useState("light");
    const background = useMemo(() => ({theme, setTheme}), [theme]);
    
    useEffect(() =>{
        if(theme === 'dark'){
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme]);

    useEffect(() =>{
        const getFavMovies = localStorage.getItem("FavMovie")
        if(getFavMovies){ //
            dispatch(setFavorites(JSON.parse(getFavMovies)))
        }
    }, []);

    return (
        <ThemeContext.Provider value={background}>
            <RouterProvider router={router} />
        </ThemeContext.Provider>
    )
};


export default App;