import { useState } from "react";
import Header from "./components/Header"
import Main from "./components/Main"
import { Box, SummaryWachedMoviesList,MovieItem,PaginationControler,WatchedMovieItem } from "./components/Main";

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

import { SearchBox,SearchField,NumberMoviesFound } from "./components/Header"
export default function App(){

  // Pagination component
  const [isOpen1, setIsOpen1]= useState(true); 
  const [isOpen2, setIsOpen2]= useState(true);
  

  return (
    <>
    <Header>
      <SearchBox>
        <SearchField/>
      </SearchBox>
      <NumberMoviesFound/>
    </Header>
    
    <Main>
      <Box>

          <PaginationControler isOpen={isOpen1} onIsOpen={setIsOpen1}/>

          { isOpen1 &&
            tempMovieData.map((movie,i) => 
            <MovieItem 
            key={`movie${i}`} 
            movie={movie}
            />)
          }
        
      </Box>

      <Box>

          <SummaryWachedMoviesList/>
          <PaginationControler isOpen={isOpen2} onIsOpen={setIsOpen2}/>

          { isOpen2 &&
            tempWatchedData.map((movie,i) => <WatchedMovieItem key={`watchedmovie${i}`} movie={movie}/>)
          }
        
      </Box>
    </Main>
    </>
  )
}


