import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pokemonSlice, setPokemons } from './store/slices/pokemon/pokemonSlice';
import { getPokemons } from './store/slices/pokemon/thunks';


export const PokemonApp = () => {

    const dispatch = useDispatch();

    const { isLoading, pokemons = [], page } = useSelector( state => state.pokemons )

    useEffect(() => {

        dispatch( getPokemons() )
    }, [])

    console.log(pokemons);

  return (
    <>
        <h1>Pokemon App</h1>
        Loading: { isLoading ? 'True' : 'False' }
        <hr />
        
        <ul>
          {
            pokemons.map(pokemon =>(
              <li key={pokemon.name} >{pokemon.name} </li>
            ))
          }
            
        </ul>

        <button
          disabled= { isLoading }
          onClick={ () => dispatch( getPokemons(page) ) }
        >
          Siguiente
        </button>
    </>
  )
}
