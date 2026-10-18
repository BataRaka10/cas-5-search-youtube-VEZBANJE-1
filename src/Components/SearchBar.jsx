
import VIDEOS from "./../videos.json"
// import VIDEOS from "./../videos.json" -> lista svih video klipova

// e => SearchVideo(e) = event koji prosledjujemo u SearchVideo / SearchVideo(e)
// zbog statea = {videos} pod {zagradama}
//                 videos iz SearchBar -> 
// prosledili {videos, onSearchVideo}
const SearchBar = ({videos, onSearchVideo}) => {
    // console.log(videos, onSearchVideo)

    return (
        <>
            <form>
                <label>
                    Search:
                    <input type="text" name="search" onInput={ (e) => SearchVideoByName(e.currentTarget.value, videos, onSearchVideo) } />
                </label>
            </form>
        </>
    )
}

/**
 * vezba: kako kucamo tekst da on vec nalapi video
 * How to learn react
 * How to learn css
 * 
 *  How to learn -> da odradi tu kvazi prepreku
 */

// (e) da se promeni u (name) -> da prihvata name
const SearchVideoByName = (name, videos, onSearchVideo) => {

    let foundVideos = [];

    // console.log(name)
    // console.log(e.currentTarget.value)

    videos.forEach( video => {

        name = name.toLowerCase()
        video.title = video.title.toLowerCase();

        if (video.title.includes(name)) {
            // console.log("pronasli smo video " + video.title)
            foundVideos.push(video)
        }

    })

    onSearchVideo
}

export default SearchBar;

// const SearchBar = ({videos, onSearchVideo}) => {
    
    // sve video klipove iz glavne komponente / moram oda vratimo nazad neki rezultat

//     console.log(videos, onSearchVideo)


    // prosledjivanje podatraka videos, onSearchVideo u input
//     return (
//         <>
//             <form>
//                 <label>
//                     Search:
//                     <input type="text" name="search" onInput={ (e) => SearchVideoByName(e.currentTarget.value, videos, onSearchVideo)} />
//                 </label>
//             </form>
//         </>
//     )
// }

// dobijamo sve video klipove glavne komponente
    // kako da vratimo rezultat
    // console.log(videos, onSearchVideo)

    
/**
 * vezba: kako kucamo tekst da on vec nalapi video
 * How to learn react
 * How to learn css
 * 
 *  How to learn -> da odradi tu kvazi prepreku
 */



// const SearchVideoByName = (name, videos, onSearchVideo) => {
    // console.log(name, videos, onSearchVideo)

    // console.log(e.currentTarget.value)
    // console.log(VIDEOS)

    // foundVideos = []array u koje pusujem ote objekte 
    // let foundVideos = [];
    
    // nema vise VIDEOS sa velikim slovima  -> nego ide videos
    // videos.forEach( video => {
        // console.log(video.title)

        // domaci: sredjivanje podatakas
        // name = name.toLowerCase();
        // video.title = video.title.toLowerCase();

        // let recenica = "Kako si" // video.title
        // let pretraga = "Kak" // 

        // da li "Kako si" sadzi "Ka"
        // "kako si" je nama video.title ako naslov naseg klipa sadrzi name koji mi trazimo  
        // ako naslov naseg klipa(video.title) sadrzi(includes) koji mi trtazimo(name)
        // if (video.title.includes(name) ) {
            // console.log("Radi")
            // console.log("PRONASLI SMO VIDEO" + video.title)
            // filteredVideos
            // onSearchVideo prosledim ovideo koj ismo mi nasli(video);
            // ne zelimo jedan video nego vise
            // a ovde objekat - as ne array sa objedktom

            // onSearchVideo([video]);

            // foundVideos.push(video)
        // }
        
        // ako je ono sto smo mi ukucali e.currentTarget.value === video.title isto kao taj title
        // domaci: bag normalizacija

        // if (name === video.title) {
        //     console.log("Nasli smo video")
        // }
    // });

    // napravili smo jedN ARRAY sa video klipovima koje smo nasli i svaki put kada nadjemo klipove da pusujem otaj array
    // onSearchVideo(foundVideos)
// };


// umesto (e) = (name) -> prihvata name

// zasto SearchVideoByName = zato sto nam ime funkcije govori sta je -> prosleiti (name) ne event(e)



    // console.log(e.currentTarget.value)
    // console.log(VIDEOS)

    // mora videos !
        // console.log("video title")
        // ako je ono sto smo mi ukucali e.currentTarget.value === video.title isto kao taj title
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