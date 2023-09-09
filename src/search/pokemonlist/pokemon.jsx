import { Link } from 'react-router-dom'
import './pokemon.css'
function Pokemon({name,Image,id}){
    
    return(
       <Link to={`/pokemon ${id}`}>
        <div className='pokemonn'>
        <div className='pokemon-name'>{name}</div>
         <div>
            <img className='img' src={Image}/></div>
            <link/>  
        </div>
        </Link>
    ) 
}
export default Pokemon