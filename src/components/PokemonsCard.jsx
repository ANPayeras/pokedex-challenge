import React, { useContext } from "react"
import pokedexContext from "../context/useContext"

const PokemonCard = ({ pokemons }) => {

    const { showDetailFunc } = useContext(pokedexContext)


    const showPokemonDetail = (pokemon) => {
        showDetailFunc(pokemon)
    }

    return (
        <div className='pokemonCard' onClick={() => showPokemonDetail(pokemons)}>
            <div className='pokemonCard1'>
                <img src={pokemons.sprites.front_default} alt={pokemons.id} />
            </div>
            <div className='pokemonCard2'>
                <h5>{pokemons.name[0].toUpperCase() + pokemons.name.substring(1)}</h5>
                <h5>
                    #{pokemons.id < 10 ? '00' + pokemons.id :
                        pokemons.id > 9 && pokemons.id < 100 ? '0' + pokemons.id :
                            pokemons.id > 99 && pokemons.id
                    }
                </h5>
            </div>
        </div>
    )
}

export default PokemonCard
