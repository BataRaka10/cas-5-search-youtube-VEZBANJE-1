
// import VIDEOS from "./../videos.json"


// e => SearchVideo(e) = event koji prosledjujemo u SearchVideo

// const SearchBar = ({videos, onSearchVideo}) => {
    // console.log(videos)

    // onSearchVideo -> funlcija
    // console.log(videos, onSearchVideo)

//     return (
//         <>
//             <form>
//                 <label>
//                     Search:
//                     <input type="text" name="search" onInput={ (e) => SearchVideoByName(e.currentTarget.value, videos, onSearchVideo ) } />
//                 </label>
//             </form>
//         </>
//     )
// }

/**
 * vezba: kako kucamo tekst da on vec nalai video
 * How to learn react
 * How to learn css
 * 
 *  How to le -> da odradi kvazi pretragu
 */


// domaci: normalizacija podtaka
// how to learn React -> how to learn react
// how to learn react = how to learn react

// onSearchVideo = menja vrednost naseg filteredVideos statea

// const SearchVideoByName = (name, videos, onSearchVideo) => {
//     // console.log("Works")
//     // console.log(name, videos, onSearchVideo)

//     // console.log(e.currentTarget.value)
//     // console.log(VIDEOS)

//     // array u koji pushujemo te objekte koje nalazimo
//     let foundVideos = [];

//     // videos = sa malkim slovima
//     videos.forEach( video => {
//         // console.log(video.title)
//         // if (e.currentTarget.value === video.title) ako je ovo sto smo mi ukucali IStO KAO taj video title
//         // e.currentTarget.value

//         // sredjivanje podataka
//         name = name.toLowerCase()
//         video.title = video.title.toLowerCase()

//         // domaci: normalizacija podtaka
//         // if (name.toLowerCase() === video.title.toLowerCase()) {
//         //     console.log("Nasli smo video")
//         // }

//         // let recenica = "Kako si"
//         // let pretraga = "Kako si"

//         // dali if ("Kako si"includes("Ka") sadrzi
//         // ako naslov naseg klipa sadrzi(includes) (name) -> koji mi trazimo
//         if (video.title.includes(name)) {
//             foundVideos.push(video)
//             // console.log("Radi")
//             // console.log("PRONASLI SMO VIDEO" + video.title)
//             // pretrazujemo videos.json sa video klipovima = nasli smo ga = prosledjujemo -> onSearchVideo
//             // onSearchVideo(video) - prosledimo (video) koji sm nasli

//             // onSearchVideo([video]); // prosledjuje samo jedan video
//             // vracamo samo objekat a ne array sa objekatima
//         }
//     });

//     onSearchVideo(foundVideos);
// };

// export default SearchBar;