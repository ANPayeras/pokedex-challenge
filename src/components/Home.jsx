import React, { useContext, useEffect, useState } from 'react'
import pokedexContext from '../context/useContext'
import PokemonsCard from './PokemonsCard'

const Home = () => {
    const { pokemonsAPI, pokemonsWithData, getPokemons, getPokemonsWithData, pokemonsSearch, searching } = useContext(pokedexContext)

    const [pagination, setPagination] = useState({
        prev: 0,
        next: 1
    })
    const { prev, next } = pagination

    useEffect(() => {
        getPokemons()
    }, [])

    useEffect(() => {
        getPokemonsWithData()
    }, [pokemonsAPI])

    const changePage = (e) => {
        const direction = e.target.name
        if (!searching) {
            getPokemons(direction)
        } else {
            if (direction === 'next') {
                next < Math.ceil(pokemonsSearch.length / 20) &&
                    setPagination({ ...pagination, prev: prev + 20, next: next + 1 })
            } else {
                prev !== 0 &&
                    setPagination({ ...pagination, prev: prev - 20, next: next - 1 })
            }
        }
    }

    return (
        <div className='pokemonsContainer'>
            {
                !pokemonsSearch.length && searching && <h1>No se encontraron Pokemons</h1>
            }
            {
                pokemonsSearch && searching && pokemonsSearch.slice(prev, next * 20).map(e => (
                    <PokemonsCard pokemons={e} key={e.id} />
                ))
            }
            {
                !searching && pokemonsWithData?.slice(0, 20).map(e => (
                    <PokemonsCard pokemons={e} key={e.id} />
                ))
            }

            <div className='btnContainer'>
                <button name='prev' disabled={pokemonsSearch.length < 20 && searching ? true : false} onClick={changePage}>Anterior</button>
                <button name='next' disabled={pokemonsSearch.length < 20 && searching ? true : false} onClick={changePage}>Siguiente</button>
            </div>
        </div>
    )
}

export default Home
