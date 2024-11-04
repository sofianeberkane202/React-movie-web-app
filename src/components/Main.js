
export default function Main({movie}){
    console.log(movie);
    return (
        <main className='main-content'>
            <div className='container'>
                <div className='box-movies'>
                    <ul>
                        <li className='flex flex-center-y' style={{gap:'2.4rem'}}>
                            <img src={movie.Poster} width='60' />
                            <div className='movie-info flex flex-col'>
                                <p className='title text-list'>{movie.Title}</p>
                                <p className='data text-list flex flex-center-y '>
                                    <span>🗓</span>
                                    <span>{movie.Year}</span>
                                </p>
                            </div>
                        </li>

                        <li className='flex flex-center-y' style={{gap:'2.4rem'}}>
                            <img src={movie.Poster} width='60' />
                            <div className='movie-info flex flex-col'>
                                <p className='title text-list'>{movie.Title}</p>
                                <p className='data text-list flex flex-center-y '>
                                    <span>🗓</span>
                                    <span>{movie.Year}</span>
                                </p>
                            </div>
                        </li>

                        <li className='flex flex-center-y' style={{gap:'2.4rem'}}>
                            <img src={movie.Poster} width='60' />
                            <div className='movie-info flex flex-col'>
                                <p className='title text-list'>{movie.Title}</p>
                                <p className='data text-list flex flex-center-y '>
                                    <span>🗓</span>
                                    <span>{movie.Year}</span>
                                </p>
                            </div>
                        </li>

                        <li className='flex flex-center-y' style={{gap:'2.4rem'}}>
                            <img src={movie.Poster} width='60' />
                            <div className='movie-info flex flex-col'>
                                <p className='title text-list'>{movie.Title}</p>
                                <p className='data text-list flex flex-center-y '>
                                    <span>🗓</span>
                                    <span>{movie.Year}</span>
                                </p>
                            </div>
                        </li>

                        <li className='flex flex-center-y' style={{gap:'2.4rem'}}>
                            <img src={movie.Poster} width='60' />
                            <div className='movie-info flex flex-col'>
                                <p className='title text-list'>{movie.Title}</p>
                                <p className='data text-list flex flex-center-y '>
                                    <span>🗓</span>
                                    <span>{movie.Year}</span>
                                </p>
                            </div>
                        </li>

                        <li className='flex flex-center-y' style={{gap:'2.4rem'}}>
                            <img src={movie.Poster} width='60' />
                            <div className='movie-info flex flex-col'>
                                <p className='title text-list'>{movie.Title}</p>
                                <p className='data text-list flex flex-center-y '>
                                    <span>🗓</span>
                                    <span>{movie.Year}</span>
                                </p>
                            </div>
                        </li>

                        <li className='flex flex-center-y' style={{gap:'2.4rem'}}>
                            <img src={movie.Poster} width='60' />
                            <div className='movie-info flex flex-col'>
                                <p className='title text-list'>{movie.Title}</p>
                                <p className='data text-list flex flex-center-y '>
                                    <span>🗓</span>
                                    <span>{movie.Year}</span>
                                </p>
                            </div>
                        </li>
                    </ul>
                    <button className='controler flex flex-center-y flex-center-x'>-</button>
                </div>
                <div className='box-movies'>
                    <div className='stats flex flex-col flex-center-x'>
                       <h3>movies you watched</h3>
                       <div className='flex flex-center-y flex-between'>
                            <div className='flex flex-center-y'>
                                <span>#️⃣</span>
                                <div className='flex flex-col' style={{gap:'0'}}>
                                    <span className='text-btn'>1</span>
                                    <span className='text-btn'>movies</span>
                                </div>
                            </div>

                            <div className='flex flex-center-y'>
                                <span>⭐️</span>
                                <span className='text-btn'>8.70</span>
                            </div>

                            <div className='flex flex-center-y'>
                                <span>🌟</span>
                                <span className='text-btn'>7.00</span>
                            </div>

                            <div className='flex flex-center-y'>
                                <span>⏳</span>
                                <span className='text-btn'>142 min</span>
                            </div>
                            
                       </div> 
                    </div>

                    <ul>
                        <li className='flex flex-center-y' style={{gap:'2.4rem'}}>
                            <img src={movie.Poster} width='60' />
                            <div className='movie-info flex flex-col flex-1'>
                                <p className='title text-list'>{movie.Title}</p>
                                <div className='data text-list flex flex-center-y flex-between '>
                                    <div className="flex flex-between flex-center-y flex-1">
                                        <div className='flex flex-center-y'>
                                            <span>⭐️</span>
                                            <span className='text-btn'>8.70</span>
                                        </div>

                                        <div className='flex flex-center-y'>
                                            <span>🌟</span>
                                            <span className='text-btn'>7.00</span>
                                        </div>

                                        <div className='flex flex-center-y'>
                                            <span>🕒</span>
                                            <span className='text-btn'>142 min</span>
                                        </div>
                                    </div>
                                    <button className="delete-btn"><span>x</span></button>
                                </div>
                            </div>
                        </li>

                        <li className='flex flex-center-y' style={{gap:'2.4rem'}}>
                            <img src={movie.Poster} width='60' />
                            <div className='movie-info flex flex-col flex-1'>
                                <p className='title text-list'>{movie.Title}</p>
                                <div className='data text-list flex flex-center-y flex-between '>
                                    <div className="flex flex-between flex-center-y flex-1">
                                        <div className='flex flex-center-y'>
                                            <span>⭐️</span>
                                            <span className='text-btn'>8.70</span>
                                        </div>

                                        <div className='flex flex-center-y'>
                                            <span>🌟</span>
                                            <span className='text-btn'>7.00</span>
                                        </div>

                                        <div className='flex flex-center-y'>
                                            <span>🕒</span>
                                            <span className='text-btn'>142 min</span>
                                        </div>
                                    </div>
                                    <button className="delete-btn"><span>x</span></button>
                                </div>
                            </div>
                        </li>

                        <li className='flex flex-center-y' style={{gap:'2.4rem'}}>
                            <img src={movie.Poster} width='60' />
                            <div className='movie-info flex flex-col flex-1'>
                                <p className='title text-list'>{movie.Title}</p>
                                <div className='data text-list flex flex-center-y flex-between '>
                                    <div className="flex flex-between flex-center-y flex-1">
                                        <div className='flex flex-center-y'>
                                            <span>⭐️</span>
                                            <span className='text-btn'>8.70</span>
                                        </div>

                                        <div className='flex flex-center-y'>
                                            <span>🌟</span>
                                            <span className='text-btn'>7.00</span>
                                        </div>

                                        <div className='flex flex-center-y'>
                                            <span>🕒</span>
                                            <span className='text-btn'>142 min</span>
                                        </div>
                                    </div>
                                    <button className="delete-btn"><span>x</span></button>
                                </div>
                            </div>
                        </li>

                        <li className='flex flex-center-y' style={{gap:'2.4rem'}}>
                            <img src={movie.Poster} width='60' />
                            <div className='movie-info flex flex-col flex-1'>
                                <p className='title text-list'>{movie.Title}</p>
                                <div className='data text-list flex flex-center-y flex-between '>
                                    <div className="flex flex-between flex-center-y flex-1">
                                        <div className='flex flex-center-y'>
                                            <span>⭐️</span>
                                            <span className='text-btn'>8.70</span>
                                        </div>

                                        <div className='flex flex-center-y'>
                                            <span>🌟</span>
                                            <span className='text-btn'>7.00</span>
                                        </div>

                                        <div className='flex flex-center-y'>
                                            <span>🕒</span>
                                            <span className='text-btn'>142 min</span>
                                        </div>
                                    </div>
                                    <button className="delete-btn"><span>x</span></button>
                                </div>
                            </div>
                        </li>

                        <li className='flex flex-center-y' style={{gap:'2.4rem'}}>
                            <img src={movie.Poster} width='60' />
                            <div className='movie-info flex flex-col flex-1'>
                                <p className='title text-list'>{movie.Title}</p>
                                <div className='data text-list flex flex-center-y flex-between '>
                                    <div className="flex flex-between flex-center-y flex-1">
                                        <div className='flex flex-center-y'>
                                            <span>⭐️</span>
                                            <span className='text-btn'>8.70</span>
                                        </div>

                                        <div className='flex flex-center-y'>
                                            <span>🌟</span>
                                            <span className='text-btn'>7.00</span>
                                        </div>

                                        <div className='flex flex-center-y'>
                                            <span>🕒</span>
                                            <span className='text-btn'>142 min</span>
                                        </div>
                                    </div>
                                    <button className="delete-btn"><span>x</span></button>
                                </div>
                            </div>
                        </li>

                        <li className='flex flex-center-y' style={{gap:'2.4rem'}}>
                            <img src={movie.Poster} width='60' />
                            <div className='movie-info flex flex-col flex-1'>
                                <p className='title text-list'>{movie.Title}</p>
                                <div className='data text-list flex flex-center-y flex-between '>
                                    <div className="flex flex-between flex-center-y flex-1">
                                        <div className='flex flex-center-y'>
                                            <span>⭐️</span>
                                            <span className='text-btn'>8.70</span>
                                        </div>

                                        <div className='flex flex-center-y'>
                                            <span>🌟</span>
                                            <span className='text-btn'>7.00</span>
                                        </div>

                                        <div className='flex flex-center-y'>
                                            <span>🕒</span>
                                            <span className='text-btn'>142 min</span>
                                        </div>
                                    </div>
                                    <button className="delete-btn"><span>x</span></button>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <button className='controler flex flex-center-y flex-center-x'>-</button>
                </div>
            </div>
        </main>
    )
}