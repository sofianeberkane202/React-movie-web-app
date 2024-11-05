import Header from "./components/Header"
import { SearchBox,SearchField,NumberMoviesFound } from "./components/Header"
export default function App(){
  return (
    <Header>
      <SearchBox>
        <SearchField/>
      </SearchBox>
      <NumberMoviesFound/>
    </Header>
  )
}


