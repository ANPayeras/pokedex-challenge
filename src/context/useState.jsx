import React, { useReducer } from 'react';
import pokedexReducer from './useReducer';
import pokedexContext from './useContext';
import axios from 'axios';

const PokedexState = (props) => {

    const initialState = {
        pokemonsAPI: [],
        pokemonsWithData: [],
        allPokemons: [],
        showDetail: false,
        pokemonDetail: {},
        pokemonsSearch: [],
        searching: false
    }

    const [state, dispatch] = useReducer(pokedexReducer, initialState);

    const getPokemons = async (page) => {
        try {
            if (page === 'next') {
                const next = state.pokemonsAPI.next
                if (next === null) return
                const { data } = await axios.get(`${next}`)
                dispatch({
                    type: 'getData',
                    payload: data
                })
            } else if (page === 'prev') {
                const prev = state.pokemonsAPI.previous
                if (prev === null) return
                const { data } = await axios.get(`${prev}`)
                dispatch({
                    type: 'getData',
                    payload: data
                })
            } else {
                const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${data.count}&offset=0`)
                getAll(res.data.results)
                dispatch({
                    type: 'getData',
                    payload: data
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getPokemonsWithData = async () => {
        const pokemons = state.pokemonsAPI.results
        if (!pokemons) return
        const pokemonsLength = state.pokemonsAPI.results.length
        let arr = []
        for (let i = 0; i < pokemonsLength; i++) {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemons[i].name}`)
            arr.push(data)
        }
        console.log(arr)
        dispatch({
            type: 'getPokemonsWithData',
            payload: arr
        })
    }

    const getAll = async (allPokemons) => {
        const pokemonsLength = allPokemons.length
        let arr = []
        for (let i = 0; i < pokemonsLength; i++) {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${allPokemons[i].name}`)
            arr.push(data)
        }
        dispatch({
            type: 'getAll',
            payload: arr
        })
    }

    const searchPokemons = (value) => {
        const filteredPokemons = state.pokemonsWithData.filter(pokemon => pokemon.name.includes(value))
        let searching = false
        if (value) searching = true;
        else searching = false
        const obj = {
            filteredPokemons: filteredPokemons,
            searching: searching
        }
        dispatch({
            type: 'searchedPokemons',
            payload: obj
        })
    }

    const showDetailFunc = (pokemon) => {
        dispatch({
            type: 'showDetail',
            payload: pokemon
        })
    }

    const closeDetail = () => {
        dispatch({
            type: 'closeDetail'
        })
    }

    return (
        <pokedexContext.Provider value={{
            pokemonsAPI: state.pokemonsAPI,
            pokemonsWithData: state.pokemonsWithData,
            allPokemons: state.allPokemons,
            showDetail: state.showDetail,
            pokemonDetail: state.pokemonDetail,
            pokemonsSearch: state.pokemonsSearch,
            searching: state.searching,
            getPokemons,
            getPokemonsWithData,
            showDetailFunc,
            closeDetail,
            searchPokemons
        }}>
            {props.children}
        </pokedexContext.Provider>
    )
}

export default PokedexState;