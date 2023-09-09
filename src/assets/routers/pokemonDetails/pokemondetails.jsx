import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function PokemonDetail(){
    const{id} = useParams()
    const [pokemon,setpokemon] = useState({})
    async function downloadPokemon(){
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/`)
      console.log(response.data)
      setpokemon({
          name: response.Array.name,
          Image : response.Array.url       
      })
    }
    useEffect(()=>{
     downloadPokemon()
    },[])
    return(
     <>
        {/* API is not loading and it's really slow so I wrote server not found */}
         <div className="server">
          Server  Not Found
         </div>
         </>
    )
}

export default PokemonDetail