
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

export function MovieItem({movie}){
    return (
        <li className='flex flex-center-y' style={{gap:'1.6rem'}}>
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

export function WatchedMovieItem({movie}){
    return (
        <li className='flex flex-center-y' style={{gap:'2.4rem'}}>
            <img src={movie.Poster} className="img-sm" alt={movie.Title} />
            <div className='movie-info flex flex-col flex-1'>
                <p className='title text-list'>{movie.Title}</p>
                <div className='data flex flex-center-y flex-between '>

                    <div className="flex flex-between flex-center-y flex-1">
                        <div className='flex flex-center-y text-rate'>
                            <span>⭐️</span>
                            <span >8.70</span>
                        </div>

                        <div className='flex flex-center-y text-rate'>
                            <span>🌟</span>
                            <span >7.00</span>
                        </div>

                        <div className='flex flex-center-y text-rate'>
                            <span>🕒</span>
                            <span >142 min</span>
                        </div>
                    </div>

                    <DeleteBtn/>
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

function DeleteBtn(){
    return <button className="delete-btn"><span>x</span></button>
}

// ----------------------

const movie = {
    "Title": "Barry",
    "Year": "2018–2023",
    "Rated": "TV-MA",
    "Released": "25 Mar 2018",
    "Runtime": "2 min",
    "Genre": "Action, Comedy, Crime",
    "Director": "N/A",
    "Writer": "Alec Berg, Bill Hader",
    "Actors": "Bill Hader, Stephen Root, Sarah Goldberg",
    "Plot": "A hit man from the Midwest moves to Los Angeles and gets caught up in the city's theatre arts scene.",
    "Language": "English",
    "Country": "United States",
    "Awards": "Won 10 Primetime Emmys. 57 wins & 228 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYzdlYWZkNjQtMWYwNi00YjNkLTljYjgtZjRhMmQ2YTQ1MWQ0XkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "8.3/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "8.3",
    "imdbVotes": "127,612",
    "imdbID": "tt5348176",
    "Type": "series",
    "totalSeasons": "4",
    "Response": "True"
}

export function MovieDetails(){
    return (
        <div className="box-details flex " style={{gap:"24px"}}>
            <div className="movie-image" 
            style={{width: "120px"}}>
                <img 
                src={movie.Poster} 
                alt={movie.Title}
                style={{width:"100%"}}
                />
            </div>

            <div className="movie-info flex flex-col mt-16">
                <p className="text-title">{movie.Title}</p>
                <p className="date">{movie.Released}</p>
                <p>⭐️ {Number(movie.imdbRating).toFixed(1)} Average Rating</p>
            </div>
        </div>
    )
}