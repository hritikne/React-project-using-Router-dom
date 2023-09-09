
import { useEffect, useState } from "react"
import axios from "axios";
import Pokemon from "./pokemon";
import './pokemonli.css'
function Pokemonlist() {
    const [pokemonlist, setpokemonlist] = useState([]);
    const [isloading, setisloading] = useState(true)
    const [pokemonUrl,setpokemonurl] = useState('https://pokeapi.co/api/v2/pokemon')

    const [prevUrl,setprevUrl] = useState('')
    const [nextUrl,setnextUrl] = useState('')

    async function download() {
        setisloading(true)
        const response = await axios.get(pokemonUrl) //this downloads list of 20 pokemon
        const pokemonresult = response.data.results; // we get the array of pokemon from result
        console.log(response)
         //itrating over the array of pokemons and using their url , to create an array of pomises
        // that will downloads 20 pokemon
        const pokemonPromise = pokemonresult.map((pokemon) => axios.get(pokemon.url))
        // passing that promise array to axios.all
        const pokemonData = await axios.all(pokemonPromise);
        console.log(pokemonData)
       
        const res = pokemonData.map((pokeData) => {
            const pokemon = pokeData.data;
            return {
                id: pokemon.id,
                name: pokemon.name,
                Image:(pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default: pokemon.front_shiny,
                types: pokemon.types,
            }
        })
        setnextUrl(response.data.next)
        setprevUrl(response.data.previous)
        console.log(res)
        setpokemonlist(res)
        setisloading(false)
       
    }
    useEffect(() => {
        download()
    }, [pokemonUrl])
    
    return (
        <div className="pokemon">
            <div className="pokemon-list-wrapper">
            {(isloading) ? "loading..." :
            pokemonlist.map((p)=><Pokemon name={p.name} Image={p.Image} key={p.id}id={p.id}/>)}
            </div>
            <div className="controls">
               <button disabled={prevUrl == null} onClick={()=>setpokemonurl(prevUrl)}>Prev</button>
               <button disabled={nextUrl == null} onClick={()=>setpokemonurl(nextUrl)}>Next</button>
            </div>
        </div>
    )
}
export default Pokemonlist
