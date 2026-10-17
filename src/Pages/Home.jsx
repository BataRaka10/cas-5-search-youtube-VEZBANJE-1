
// import VIDEOS from "./../videos.json"
import { useState } from "react";
// import AllVideos from "../Components/AllVideos";
import AllVideos from "../Components/AllVideos"
// import VIDEOS from "./../videos.json"
// import SearchBar from "./Components/SearchBar";

// domaci: - Napravimo state (u Home.jsx) koji se zove [videos, setVideos]
// -> inicijalna vrednost -> VIDEOS from "./../videos.json"
// prosledjivanje VIDEOS SearchBaru = <SearchBar videos={ videos }/>

const Home = () => {

    return (
        <>
            
            <h1>Glavna stranica</h1>
            <AllVideos />
        </>
    )
}

export default Home;

// prikaz svih video klipova
    
    // uloga filteredVideos - jeste da bude taj state koji cem omi menjati (VIDEOS) nam ostaje isti

    // useState(VIDEOS) > set video klipova

    // filteredVideos = ono sto smo mi isfiltrirali koje je korisnik uneo: how to learn react = ako korisdnik nadje - onda ce mo mi naci taj klip i staviti ga u foundVideos

    // ovo je deo koji se menja
    // console.log(videos)

    // callback funkcija -> prosledjujemo kod kao funkciju a nazad dobijam odgovor

    // most izmedju SearchBar i naseg state mozemo da napravimo callback funkciju koju prosledimo
    // u SearchBar prosledjujemo handleSearchVideo / prosledjujemo neki rezultat sa video klipovima


    

// const Home = () => {

//     const [videos, setVideos] = useState(VIDEOS)

//     const [filteredVideos, setFilteredVideos] = useState(VIDEOS)

//     const handleSearchVideo = (results) => {
//         setFilteredVideos(results)
//     }

//     console.log(filteredVideos)

//     return (
//         <>
//             <SearchBar videos={ videos } onSearchVideo={handleSearchVideo} />
//             <AllVideos videos={ filteredVideos }/>
//             {/* <SearchBar /> */}
//             {/* <AllVideos /> */}
//         </>
//     )
// }

// export default Home;