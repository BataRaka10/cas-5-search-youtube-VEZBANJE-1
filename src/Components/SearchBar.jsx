
import VIDEOS from "./../videos.json"


// e => SearchVideo(e) = event koji prosledjujemo u SearchVideo
// zbog statea = {videos} pod {zagradama}



// dobijamo sve video klipove glavne komponente
    // kako da vratimo rezultat
    // console.log(videos, onSearchVideo)

    
/**
 * vezba: kako kucamo tekst da on vec  nalapi video
 * How to learn react
 * How to learn css
 * 
 *  How to learn
 */
// umesto (e) = (name) -> prihvata name

// zasto SearchVideoByName = zato sto nam ime funkcije govori sta je -> prosleiti (name) ne event(e)



    // console.log(e.currentTarget.value)
    // console.log(VIDEOS)

    // mora videos !
        // console.log("video title")
        // ako je ono sto smo mi ukucali e.currentTarget.value === video.title isto taj title
        // e.currentTarget.value

        // domaci: normalizacija podataka = to lower case(leva i desna identicne)

        // let recenica = "Kako si"
        // let pretraga = "Kak"

        // da li "Kako si" sadzi "Ka"
        // "kako si" je nama video.title ako naslov naseg klipa sadrzi name koji mi trazimo  

        // if (name.toLowerCase() === video.title.toLowerCase()) {
        //     console.log("Nasli video")
        // }


// how to learn react -> How To Learn reasct = leva i desna strano to lower case
// domaci: mala slova normalizacija

// zasto SearchVideoByName = zato sto nam ime funkcije govori sta je -> pro
// sleiti (name) ne event(e)


// const SearchVideoByName = (name, videos, onSearchVideo) => {
    // console.log("Works")/
    // console.log(name, videos, onSearchVideo)

//     let foundVideos = [];

    // videos -<> sa malim slovima
//     videos.forEach( video => {

        // domaci: resenje
//         name = name.toLowerCase()
//         video.title = video.title.toLowerCase()

        // e.currentTarget.value -> ono sto sm o mi ukuccali isto kao === video.title
        // domaci: toLowerCace
//         if (video.title.includes(name)) {
            // prosleddjujemo (video)
            // onSearchVideo([[videos]]);
//             foundVideos.push(video)
//         }
//     })
    // let recenica = "Kako si"
    // let pretraga = "Kak si"
// }





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
    // console.log("Works")
    // console.log(name, videos, onSearchVideo)

    // console.log(e.currentTarget.value)
    // console.log(VIDEOS)

    // array u koji pushujemo te objekte koje nalazimo
//     let foundVideos = [];

    // videos = sa malkim slovima
//     videos.forEach( video => {
        // console.log(video.title)
        // if (e.currentTarget.value === video.title) ako je ovo sto smo mi ukucali IStO KAO taj video title
        // e.currentTarget.value

        // sredjivanje podataka
//         name = name.toLowerCase()
//         video.title = video.title.toLowerCase()

        // domaci: normalizacija podtaka
        // if (name.toLowerCase() === video.title.toLowerCase()) {
        //     console.log("Nasli smo video")
        // }

        // let recenica = "Kako si"
        // let pretraga = "Kako si"

        // dali if ("Kako si"includes("Ka") sadrzi
        // ako naslov naseg klipa sadrzi(includes) (name) -> koji mi trazimo
//         if (video.title.includes(name)) {
//             foundVideos.push(video)
            // console.log("Radi")
            // console.log("PRONASLI SMO VIDEO" + video.title)
            // pretrazujemo videos.json sa video klipovima = nasli smo ga = prosledjujemo -> onSearchVideo
            // onSearchVideo(video) - prosledimo (video) koji sm nasli

            // onSearchVideo([video]); // prosledjuje samo jedan video
            // vracamo samo objekat a ne array sa objekatima
//         }
//     });

//     onSearchVideo(foundVideos);
// };

// export default SearchBar;