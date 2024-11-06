import StarRating from "./StarRating"

export function MovieDetails({children}){
    return (
        <>
            {children}
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

export function Btn({onMovieDetails,onMovieID,text,className,children}){
    return (
    <button 
    className={className}
    onClick={() => {
        if(onMovieDetails && onMovieID){ ;
        onMovieDetails([]);
        onMovieID('');}
    }}
    >
        {text}
        {children}
    </button>
    )
}

export function StarRatingBox({children}){
    return (
        <div className="starRating mt-24 mb-16">
            {children}
        </div>
    )
}