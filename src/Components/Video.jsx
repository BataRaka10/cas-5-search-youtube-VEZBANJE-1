
import { useParams } from "react-router-dom";

import VIDEOS from "./../videos.json"
import AllVideos from "./AllVideos";

// useParams() = izvlaci parametre iz adresa
// const { id } = hook
const Video = () => {

    const { id } = useParams()
    console.log(id)

    let videoFound = null

    // if (video.id == id) ako je id od nekog videa iz video.json isti kao id koji smo prosledili ovde /video/1
    // forEach petlja koja prolazi preko svih video klipova iz video.json
    VIDEOS.forEach( video => {

        if (video.id == id) {
            console.log("nasli smo")
            // postavljamo vrednost da nam bude ista kao video = videoFound = video;
            videoFound = video
        }

    })

    // if (video.id == id) ako je id od nekog videa iz video.json isti kao id koji smo prosledili ovde /video/1
    // forEach petlja koja prolazi preko svih video klipova iz video.json

            // console.log("Pronasli smo video")
            // postavljamo vrednost da nam bude ista kao video = videoFound = video;


    // console.log(foundVideos)
    console.log(videoFound)

    if (videoFound === null) {
        return <h1>this video does not exist</h1>
    }

    return (
        <>
            <h3>{ videoFound.title }</h3>
            <p>{ videoFound.url }</p>
            <iframe src={ videoFound.url } ></iframe>
        </>
    )
}

export default Video;

// useParams() = izvlaci parametre iz adrese // broj 22 je parametar
// const { id } = hook -> {viticaste zagrade}

    // VIDEOS.forEach( video => {
        // proveraarvmo da li id (u nasem slucaju /video.2) iz url postoji u videos.json() 
        // ako je neki id iz video.json isti kao id koji smo mi prosledili ove /video/2 = video.id == id
        // if (video.id == id) {
            // console.log("video found")      
            // postavljamo vrednost videoFound da je vrednost ista kao = video
        //     videoFound = video
        // }

    // })

    // ak one nadje video -> vrednost null
//     if (videoFound === null) {
//         return <h1>this video does not exist</h1>
//     }
    
//     return (
//         <>
//             <h3>{ videoFound.title }</h3>
//             <p>{ videoFound.url }</p>
//             <iframe src={ videoFound.url } ></iframe>
//         </>
//     )
// }

// export default Video;

    // proveraarvmo da li id (u nasem slucaju /video.2) iz url postoji u videos.json() 

    // ako je neki id iz video.json isti kao id koji smo mi prosledili ove /video/2 = video.id == id

        // console.log("video found")

// const Video = () => {

//     const { id } = useParams();
//     console.log(id)

//     let videoFound = null;

//     VIDEOS.forEach( video => {
        // AKO JE video id iz videos.json() isti KAO id koji smo prosledili iz http://localhost:5178/2 =>> 2 je id
//         if (video.id == id) {
            // console.log("video found")
            // postavljamo vrednost videoFound da je vrednost ista kao = video
//             videoFound = video
//         }
//     })

    // console.log(videoFound)
    
//     if (videoFound === null) {
//         return <h1>This video does not exist</h1>
//     }

//     return (
//         <>
//             <h3>{ videoFound.title }</h3>
//             <p>{ videoFound.url }</p>
//             <iframe src={ videoFound.url }></iframe>
//             {/* <h2>Test</h2> */}
//         </>
//     )
// }

// export default Video;