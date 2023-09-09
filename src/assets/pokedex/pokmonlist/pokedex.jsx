
import './pokedex.css'
import Pokemonlist from "../../../search/pokemonlist/pokimonlist"
import Search from '../../../search/search'
function Pokedex (){
    return(

        <div className="pokedex-wraper">
        <Search/>
        <Pokemonlist/>
        </div>
    )
    
}

export default Pokedex