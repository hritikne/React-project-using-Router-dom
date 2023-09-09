import { Routes,Route } from "react-router-dom"
import PokemonDetail from "./pokemondetails"
import Pokedex from "../../pokedex/pokmonlist/pokedex"
function CustomRouter (){
     return(
        <Routes>
           <Route path='/' element={<Pokedex/>} />
           <Route path='/:id' element={<PokemonDetail/>} />
        </Routes>
     )
}

export default CustomRouter
