
import { Link } from "react-router-dom"
import CustomRouter from "./assets/routers/pokemonDetails/customrouter"

function App() { 
 return (
    <div>
      <Link to={"/"}>
      <h1 id="h1">Pokedex</h1>
      </Link>
    <CustomRouter/>
    </div>   
  )
}

export default App
