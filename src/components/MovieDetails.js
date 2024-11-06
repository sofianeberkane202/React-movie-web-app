export function MovieDetails({children}){
    return (
        <>
            {children}

            <button className="return-btn">
                <svg 
                xmlns="http://www.w3.org/2000/svg"
                height="32px" viewBox="0 -960 960 960"
                width="32px" fill="#000">
                    <path d="m480-320 56-56-64-64h168v-80H472l64-64-56-56-160 160 160 160Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
            </button>
        </>
    )
}

export function MainMovieDetails({children}){
    return (
        <div className="box-details flex " style={{gap:"24px"}}>
            {children}
        </div>
    )
}

export function Poster({poster,alt}){
    return (
        <div className="movie-image" 
            style={{width: "150px"}}>
                <img 
                src={poster} 
                alt={alt}
                style={{width:"100%"}}
                />
        </div>
    )
}

export function MainMovieInfo({Title,Released,imdbRating}){
    return (
        <div className="movie-info flex flex-col flex-1 mt-16">
            <p className="text-title">{Title}</p>
            <p className="date">{Released}</p>
            <p>⭐️ {Number(imdbRating).toFixed(1)} Average Rating</p>
        </div>
    )
}


export function Details({children}){
    return (
        <div className="details">
            {children}
        </div>
    )
}

export function MovieStory({Plot}){
    return (
        <p className="text-base" 
        style={{fontStyle:'italic',width:'95%'}}>
            {Plot}
        </p>
    )
}

export function DetailsBtn(){
    return <button className="btn btn-primary text-btn">Details</button>
}