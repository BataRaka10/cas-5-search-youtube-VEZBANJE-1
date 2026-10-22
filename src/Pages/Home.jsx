
// import VIDEOS from "./../videos.json"
import { use, useState } from "react";
import AllVideos from "../Components/AllVideos";
import SearchBar from "../Components/SearchBar";
import VIDEOS from "./../videos.json"
// import SearchBar from "../Components/SearchBar";

// domaci: - Napravimo state (u Home.jsx) koji se zove [videos, setVideos]
// -> inicijalna vrednost -> VIDEOS from "./../videos.json"
// prosledjivanje VIDEOS SearchBaru = <SearchBar videos={ videos }/>

const Home = () => {
    // domaci: uraditi state

    // TO JE PRIKAZ SVIH VIDFEO KLIPVAdefault na vrednost


    // Ovi je deo koji se menja  //  uloga filteredVideos - jeste da bude taj state koji cemo mi menjati -> VIDEOS -> ostasje nam isti set video klipova koje mi imamo -> filteredVideos -> je ono sto smo mi isfiltrirali tacnije -> ak okorisnik ukuca how to learn reacct -> mi cemo naci taj klip i STAVITI GA U filteredVideos
    
    // prikaz svih video klipova 
    // default na vrednost /  prikaz svih video klipova

    // / Ovo je deo koji se menja

    // uloga filteredVideos - jeste da bude taj state koji cem omi menjati (VIDEOS) nam ostaje isti / ako korisnik ukuca how to learn react -> onda ce mo mi naci taj klip i staviti ga filteredVideos
    
    // callback funkcija -> prosledjujemo kod kao funkciju a nazad dobijam odgovor
    // moost izmedju SearchBar i naseg state / ne moszemo direktno / ali moze preko callback funkcijekoju prosledimo




    // most izmedju SearchBar i naseg state / ne moszemo direktno / ali moze preko callback funkcije
    // callback funkcija -> prosledjujemo kod kao funkciju a nazad dobijam odgovor
    // miost izmedju SearchBar i naseg state / ne moszemo direktno / ali moze preko callback funkcije


    // const [videos, setVideos] = useState(VIDEOS); // default na vrednost /  prikaz svih video klipova
    // console.log(videos)
    // uloga filteredVideos - jeste da bude taj state koji cem omi menjati (VIDEOS) nam ostaje isti / ako korisnik ukuca how to learn react -> onda ce mo mi naci taj klip i staviti ga filteredVideos

    // const [filteredVideos, setFilteredVideos] = useState(VIDEOS); // Ovo je deo koji se menja

    // logika = u SearchBaru cemo pozvati handleSearchVideo -proslediti mu neki rezultat sa video klipovima i on ce promeniti video state
    // const handleSearchVideo = (results) => {
    //     setFilteredVideos(results)
    // } 

    
    // prosledjivanje videos u SearchBar
    // AllVideos -> DOBIJSA SAMO isfiltrirale video klipove = videos={ filteredVideos }
    // KLJUC (videos) !!!
    return (
        <>
            <h1></h1>
            {/* <SearchBar /> */}
            <AllVideos />
            {/* <SearchBar videos={ videos } onSearchVideo={handleSearchVideo} /> */}
            {/* <AllVideos videos={ filteredVideos }/> */}
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