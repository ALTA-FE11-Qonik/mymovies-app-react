import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import DetailMovie from './pages/DetailMovie';
import ListFavoriteMovie from './pages/ListFavoriteMovie';
import App from './pages';
import './styles/index.css';



axios.defaults.baseURL = "https://api.themoviedb.org/3/movie";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)