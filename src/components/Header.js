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

                <div className="box-search-field">
                    <input 
                    className='search-field text-field flex-1'
                    type='text'
                    placeholder='Search movies...'/>
                </div>
                

                {/* count result */}
    
                <p className="count-movies text-field">Found 20 results</p>

            </div>
            
        </header>
    )
}