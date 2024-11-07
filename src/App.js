import { useEffect, useState } from "react";
import Header from "./components/Header"
import Main from "./components/Main"
import { Box, SummaryWachedMoviesList,MovieItem,PaginationControler,WatchedMovieItem,
   MovieBox } from "./components/Main";
import { fetchData } from "./helper";
import {URLByID,URLBySearch } from "./api";
import { SearchBox,SearchField,NumberMoviesFound } from "./components/Header"

import { MovieDetails,Details,MainMovieDetails,
  MovieStory,Poster,MainMovieInfo,Btn,StarRatingBox } from "./components/MovieDetails";

import StarRating from "./components/StarRating";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const movieData = {
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



export default function App(){
  
  const [movies, setMovies]= useState([]); 

  // watched movies component
  const [watched, setWatched] = useState(new Map());
  const [isSaved, setIsSaved]= useState(false);

  // Pagination component
  const [isOpen1, setIsOpen1]= useState(true); 
  const [isOpen2, setIsOpen2]= useState(true);

  // SearchField component
  const [query, setQuery]= useState(""); 

  // Movie Details compoent
  const [movieDetails,setMovieDetails] = useState([]);
  const [rate,setRate] = useState(0);
  const [movieID,setMovieID]= useState('');

  const [ratedMovies,setRatedMovies] = useState(new Map());

  
  function handelRatedMovies(){
    setRatedMovies(prevData => {
      const newRatedList = new Map(prevData);

      newRatedList.set(movieID,rate);
    
      localStorage.setItem('ratedMovies',JSON.stringify(Array.from(newRatedList.entries())));

      return newRatedList;
    })
  }
  


  // useEffects -------------------

  // initial render

  useEffect(function(){
    setRatedMovies(prevData => {
      if(!localStorage.getItem('ratedMovies')) return new Map();
      return new Map(JSON.parse(localStorage.getItem('ratedMovies')))
    })

    setWatched(prevData => {
      if(!localStorage.getItem('watchedMovies')) return new Map();
      return new Map(JSON.parse(localStorage.getItem('watchedMovies')))
    })

  },[])

  // fetching movies Data------

  useEffect(function(){
    async function fetchingData(){
      try {
        if(query.length < 3) return;

        const URL = URLBySearch + query;
        const data = await fetchData(URL);
        

        setMovies(data.Search);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchingData();
  },[query]);

  // ----------------


  // fetching a movie Data
  useEffect(function(){
    async function fetchMovieData(){
      try {
        if(!movieID) return;

        const url = URLByID + movieID;
        const data = await fetchData(url);
        
        setMovieDetails(data);
        if(ratedMovies.has(movieID)) setRate(ratedMovies.get(movieID))
        else setRate(0);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovieData();
  },[movieID])

  useEffect(function(){
    if(!rate) return;
    
    handelRatedMovies();


  },[rate])


  // Save Movie on movie watched list
  useEffect(function(){
    if(!isSaved) return;
    setWatched(prevData => {
      let newList = new Map();
      if(prevData.size > 0) newList = structuredClone(prevData);
      newList.set(movieID,movieDetails);
      

      localStorage.setItem('watchedMovies',JSON.stringify(Array.from(newList.entries())))

      return newList;
    })

    setIsSaved(false)
    
  },[isSaved])

  // -------------------------------

  


  

  return (
    <>
    <Header>
      <SearchBox>
        <SearchField onQuery={setQuery}/>
      </SearchBox>

      <NumberMoviesFound numberOfMoviesFeched={movies.length}/>
    </Header>
    
    <Main>

      <Box>

          <PaginationControler isOpen={isOpen1} onIsOpen={setIsOpen1}/>

          <MovieBox>

            { isOpen1 &&
              movies.map((movie,i) => 
              <MovieItem 
              key={`movie${i}`} 
              movie={movie}
              onMovieID={setMovieID}
              />)
            }

          </MovieBox>
   
      </Box>

      <Box>

      <PaginationControler isOpen={isOpen2} onIsOpen={setIsOpen2}/>

      { movieDetails.length === 0 ?        
        <>
          <SummaryWachedMoviesList/>

          <MovieBox> 

            { isOpen2 && watched.size > 0 &&
              Array.from(watched.values()).map((movie,i) => 
              <WatchedMovieItem 
              key={`watchedmovie${i}`} 
              ownRating={ratedMovies} 
              movie={movie}
              />)
            }
          </MovieBox>
        </>

        :
          
          isOpen2 &&
          <MovieDetails >

            <MainMovieDetails>

              <Poster poster={movieDetails.Poster} alt={movieDetails.Title}/>

              <MainMovieInfo 
              Released={movieDetails.Released}
              Title={movieDetails.Title}
              imdbRating={movieDetails.imdbRating}
              key={movieDetails.Title}
              />

            </MainMovieDetails>

            <Details>
              <StarRatingBox>
                { !watched.has(movieID) ?
                <>
                    <StarRating
                    maxRate={10}
                    size={22}
                    color='#fcc419'
                    starClassName=''
                    boxClassName=''
                
                    textClassName='text text-btn'

                    onRate={setRate}
                    rate={rate}

                    key={movieID}
                    />

                    <Btn 
                    className='btn btn-primary text-btn' 
                    text='+Add to List'
                    onSaved={setIsSaved}
                    />
                </>

                :

                <p className="text-btn">
                  You have rated the movie {ratedMovies.get(movieID)} ⭐️
                </p>
                }

              </StarRatingBox>
              
              <MovieStory Plot={movieDetails.Plot}/>

              <Btn 
              className='btn btn-primary text-btn'
              text='Details'/>
            </Details>

            <Btn 
            className='return-btn'
            onMovieID={setMovieID}
            onMovieDetails={setMovieDetails}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                height="32px" viewBox="0 -960 960 960"
                width="32px" fill="#000">
                <path d="m480-320 56-56-64-64h168v-80H472l64-64-56-56-160 160 160 160Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
            </Btn>

          </MovieDetails>
          
        }

        
      </Box>

    </Main>
    </>
  )
}


