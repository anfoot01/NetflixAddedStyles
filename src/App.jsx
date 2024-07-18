import Header from "./components/Header"

import Genre from "./components/Genre"
import FilmDesc from "./components/FilmDesc"
import Rating from "./components/Rating"
import ButtonBlock from "./components/ButtonBlock"
import Popular from "./components/Popular"
import AgeMark from "./components/AgeMark"
function App() {
  return (
    
    <div className="container">
    <Header></Header>
     <div className="main-content">
      <Genre></Genre>
      <FilmDesc></FilmDesc>
      <Rating></Rating>
      <ButtonBlock></ButtonBlock>
      <Popular></Popular>
     </div>
     <AgeMark></AgeMark>
    </div>
     

  )
}

export default App
