
export default function Main({children}){

    return (
        <main className='main-content'>
            <div className='container'>
                
                {children}

            </div>
        </main>
    )
}

export function Box({children}){

    return (
        <div className='box-movies'>
            
                {children}
            
        </div>
    )
}

export function MovieBox({children}){
    return (
        <ul>
            {children}
        </ul>
    )
}

export function MovieItem({movie,onMovieID}){
    return (
        <li 
        className='flex flex-center-y' 
        style={{gap:'1.6rem'}}
        onClick={() => onMovieID(movie.imdbID)}
        >
            <img src={movie.Poster} className="img-sm" alt={movie.Title}/>
            <div className='movie-info flex flex-col'>
                <p className='title text-list'>{movie.Title}</p>
                <p className='data text-list flex flex-center-y '>
                    <span>🗓</span>
                    <span>{movie.Year}</span>
                </p>
            </div>
        </li>
    )
}

export function WatchedMovieItem({movie,ownRating,onWatchedMovies}){
    return (
        <li className='flex flex-center-y' style={{gap:'2.4rem'}}>
            <img src={movie.Poster} className="img-sm" alt={movie.Title} />
            <div className='movie-info flex flex-col flex-1'>
                <p className='title text-list'>{movie.Title}</p>
                <div className='data flex flex-center-y flex-between '>

                    <div className="flex flex-center-y flex-1">
                        <div className='flex flex-center-y text-rate'>
                            <span>⭐️</span>
                            <span >{movie.imdbRating}</span>
                        </div>

                        { ownRating &&
                        <div className='flex flex-center-y text-rate'>
                            <span>🌟</span>
                            <span >
                                {ownRating.has(movie.imdbID) ? ownRating.get(movie.imdbID) : 0}
                            </span>
                        </div>}

                        <div className='flex flex-center-y text-rate flex-1'>
                            <span>🕒</span>
                            <span >{movie.Runtime}</span>
                        </div>
                    </div>

                    <DeleteBtn onWatchedMovies={onWatchedMovies} id={movie.imdbID}/>
                </div>
            </div>
        </li>
    )
}

export function PaginationControler({isOpen,onIsOpen}){
    return (
    <button 
    className='controler flex flex-center-y flex-center-x'
    onClick={() => onIsOpen(!isOpen)}
    >
        {isOpen ? "-" : "+"}
    </button>
    )
}

export function SummaryWachedMoviesList(){
    return (
        <div className='stats flex flex-col flex-center-x'>
            <h3>movies you watched</h3>
            <div className='flex flex-center-y flex-between'>
                <div className='flex flex-center-y'>
                    <span>#️⃣</span>
                    <div className='flex flex-col' style={{gap:'0'}}>
                        <span className='text-rate'>1</span>
                        <span className='text-rate'>movies</span>
                    </div>
                </div>

                <div className='flex flex-center-y'>
                    <span>⭐️</span>
                    <span className='text-rate'>8.70</span>
                </div>

                <div className='flex flex-center-y'>
                    <span>🌟</span>
                    <span className='text-rate'>7.00</span>
                </div>

                <div className='flex flex-center-y'>
                    <span>⏳</span>
                    <span className='text-rate'>142 min</span>
                </div>
                            
            </div> 
        </div>
    )
}

function DeleteBtn({id,onWatchedMovies}){
    return (
    <button 
    className="delete-btn"
    onClick={() => onWatchedMovies(id)}
    >
        <span>x</span>
    </button>
    )
}
