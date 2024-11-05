import '../css/componentCSS/Header.css'
export default function Header({children}){
    return (
        <header className="header">
            <div className="container flex flex-center-y flex-between">
                {/* logo */}
                <div className="logo">
                    <span className="text-header">🍿 usePopcorn</span>
                </div>

                {children}

            </div>
            
        </header>
    )
}


export function SearchBox({children}){
    return (
        <div className="box-search-field flex-1">{children}</div>
    )
}

export function SearchField({onQuery}){
    return (
        <input 
        className='search-field text-field'
        type='text'
        placeholder='Search movies...'
        onChange={(e) => onQuery(e.target.value)}
        />
    )
}

export function NumberMoviesFound(){
    return(
        <p className="count-movies text-field">Found <span className='counter'>20</span> results</p> 
    )
}