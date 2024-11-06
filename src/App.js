import { useEffect, useState } from "react";
import Header from "./components/Header"
import Main from "./components/Main"
import { Box, SummaryWachedMoviesList,MovieItem,PaginationControler,WatchedMovieItem,
   MovieBox } from "./components/Main";
import { fetchData } from "./helper";
import {URLByID,URLBySearch } from "./api";
import { SearchBox,SearchField,NumberMoviesFound } from "./components/Header"

import { MovieDetails,Details,MainMovieDetails,MovieStory,Poster,MainMovieInfo,DetailsBtn } from "./components/MovieDetails";

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

  // Pagination component
  const [isOpen1, setIsOpen1]= useState(true); 
  const [isOpen2, setIsOpen2]= useState(true);

  // SearchField component
  const [query, setQuery]= useState(""); 

  // Movie Details compoent
  const [movieDetails,setMovieDetails] = useState(movieData);
  const [rate,setRate] = useState(0);
  const [movieID,setMovieID]= useState('');

  // useEffects -------------------
  // fetching movies Data------

  useEffect(function(){
    async function fetchingData(){
      try {
        if(query.length < 3) return;

        const URL = URLBySearch + query;
        const data = await fetchData(URL);
        console.log(data);

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
        const url = URLByID + movieID;
        const data = await fetchData(url);
        
        setMovieDetails(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovieData();
  },[movieID])



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

            { isOpen2 &&
              tempWatchedData.map((movie,i) => <WatchedMovieItem key={`watchedmovie${i}`} movie={movie}/>)
            }
          </MovieBox>
        </>

        :
          
          isOpen2 &&
          <MovieDetails>

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
              <StarRating
                    maxRate={10}
                    size={22}
                    color='#fcc419'
                    starClassName=''
                    boxClassName='starRating mt-24 mb-16'
            
                    textClassName='text text-btn'

                    onRate={setRate}
                    rate={rate}
                    />
              
              <MovieStory Plot={movieDetails.Plot}/>

              <DetailsBtn/>
            </Details>

          </MovieDetails>
          
        }

        
      </Box>

    </Main>
    </>
  )
}


