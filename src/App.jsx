import { useState } from 'react'

// import AllVideos from "./Components/AllVideos";
// import Home from './Pages/Home';
// import Video from './Components/Video';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import SearchBar from './Components/Search';

// path = htps://http://localhost:5174 = path po default
// path "/" => htps://http://localhost:5174/
// path "about" = htps://http://localhost:5174/about

// :wild card -> da kao korisnici mozxemo da unesemo bilo sta
// /Video/:id => :id, 1, 5, 7...
// /video/12, /video/12,  /video/1 

// <BrowserRouter> = rutiranje u braseru(browser)
// <Routes> -> lista putanja sa naseg sajta
// <Route path="/" element={<AllVideos />}/> -> svaki Route jeste jedna putanja

// <Route path="/" element={<AllVideos />}/> = kada se dodeje na glavnu stranicuon treba da ocita <AllVideos />

const VIDEOS = [
    {
        id: 1,
        title: "How to learn React",
        url: "",
        cover: "",
    },
    {
        id: 2,
        title: "How to learn css",
        url: "",
        cover: "",
    },
]

function App() {
    return (
        <>
            
            {/* < AllVideos /> */}
        </>
    )
}

export default App;
