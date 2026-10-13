

import VIDEOS from "./../videos.json"



const GetAllVideos = () => {
    return (
        <>
            { VIDEOS.map( video => {
            return (
                <a href={ video.url } target='_blank'>
                    <img src={ video.cover } alt="" />
                    <h2>{ video.title }</h2>
                </a>
                )
            }) }
        </>
    )
}

export default GetAllVideos;