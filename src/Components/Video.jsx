
import { useParams } from "react-router-dom";

// import VIDEOS from "./../videos.json"


// useParams() = izvlaci parametre iz adresa // broj 22 je parametar
// const { id } = hook -> {viticaste zagrade}


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