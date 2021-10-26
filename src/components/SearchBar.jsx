import React, { useContext } from 'react'
import pokedexContext from '../context/useContext'

const SearchBar = () => {

    const { searchPokemons } = useContext(pokedexContext)

    const onChange = (e) => {
        searchPokemons(e.target.value)
    }

    return (
        <div className='searchBarContainer'>
            <input type="text" placeholder='Buscar Pokemon' onChange={onChange} />
        </div>
    )
}

export default SearchBar
