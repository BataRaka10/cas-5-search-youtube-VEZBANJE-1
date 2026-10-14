
// import VIDEOS from "./../videos.json"
import { useState } from "react";
import AllVideos from "../Components/AllVideos";
import SearchBar from "../Components/SearchBar";
import VIDEOS from "./../videos.json"

// domaci: - Napravimo state (u Home.jsx) koji se zove [videos, setVideos]
// -> inicijalna vrednost -> VIDEOS from "./../videos.json"
// prosledjivanje VIDEOS SearchBaru = <SearchBar videos={ videos }/>

const Home = () => {

    const [videos, setVideos] = useState(VIDEOS)

    const [filteredVideos, setFilteredVideos] = useState(VIDEOS)

    const handleSearchVideo = (results) => {
        setFilteredVideos(results)
    }

    console.log(filteredVideos)

    return (
        <>
            <SearchBar videos={ videos } onSearchVideo={handleSearchVideo} />
            <AllVideos videos={ filteredVideos }/>
            {/* <SearchBar /> */}
            {/* <AllVideos /> */}
        </>
    )
}

export default Home;