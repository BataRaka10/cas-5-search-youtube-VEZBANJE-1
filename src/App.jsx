import { useState } from 'react'

// import AllVideos from "./Components/AllVideos";
import AllVideos from "./Components/AllVideos"
import Home from "./Pages/Home"
// import Home from './Pages/Home';
import Video from "./Components/Video"
// import Video from './Components/Video';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import SearchBar from './Components/SearchBar';
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
        url: "https://www.youtube.com/watch?v=SqcY0GlETPk&t=163s",
        cover: "https://i.ytimg.com/vi/SqcY0GlETPk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBvF7R7tYEZqgAYn6fM5A_QgI1e-",
    },
    {
        id: 2,
        title: "How to learn css",
        url: "https://www.youtube.com/watch?v=tfzGsCxutWk",
        cover: "https://i.ytimg.com/vi/tfzGsCxutWk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCnsXU4B5l-aDNE9GBNxyTuDbQVEA",
    },
]

const App = () => {
    return (
        <>
            { VIDEOS.map( video => {
                return <a href={ video.url } target='_blank' >
                    <img src={ video.cover } alt="" />
                    <h2>{ video.title }</h2>
                </a>
            }) }

            {/* < AllVideos /> */}
        </>
    )
}

export default App;
