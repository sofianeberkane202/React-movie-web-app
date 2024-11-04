import '../css/componentCSS/Header.css'
export default function Header(){
    return (
        <header className="header">
            <div className="container flex flex-center-y flex-between">
                {/* logo */}
                <div className="logo">
                    <span className="text-header">🍿 usePopcorn</span>
                </div>

                {/* search field */}

                <div className="box-search-field flex-1">
                    

                    <input 
                    className='search-field text-field'
                    type='text'
                    placeholder='Search movies...'/>

                    

                </div>
                

                {/* count result */}
    
                <p className="count-movies text-field">Found <span className='counter'>20</span> results</p>

            </div>
            
        </header>
    )
}