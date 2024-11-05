
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
            <ul>
                {children}
            </ul>
        </div>
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

export function PaginationControler(){
    return <button className='controler flex flex-center-y flex-center-x'>-</button>
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