import React, { useContext } from "react"
import pokedexContext from "../context/useContext"

const PokemonDetail = () => {
    const { showDetail, pokemonDetail, closeDetail } = useContext(pokedexContext)

    return (
        < div className={`${!showDetail ? 'pokemonDetailHide' : 'pokemonDetailShow'}`}>
            {showDetail &&
                <div className='wrapper'>
                    <div className='detailContainer1'>
                        <img src={pokemonDetail.sprites.front_default} alt={pokemonDetail.id} />
                        <h1>{pokemonDetail.name[0].toUpperCase() + pokemonDetail.name.substring(1)}</h1>
                        <span>
                            #{pokemonDetail.id < 10 ? '00' + pokemonDetail.id :
                                pokemonDetail.id > 9 && pokemonDetail.id < 100 ? '0' + pokemonDetail.id :
                                    pokemonDetail.id > 99 && pokemonDetail.id
                            }
                        </span>
                    </div>
                    <div className='detailContainer2'>
                        <div>
                            <h4>Height</h4>
                            <span>
                                {pokemonDetail.height < 10 && 0}
                                {String(pokemonDetail.height).substring(0, String(pokemonDetail.height).length - 1)}.
                                {String(pokemonDetail.height).slice(String(pokemonDetail.height).length - 1)}m
                            </span>
                        </div>
                        <div>
                            <h4>Weight</h4>
                            <span>
                                {String(pokemonDetail.weight).substring(0, String(pokemonDetail.weight).length - 1)}.
                                {String(pokemonDetail.weight).slice(String(pokemonDetail.weight).length - 1)}kg
                            </span>
                        </div>
                    </div>
                    <div className='detailContainer3'>
                        <div>
                            <h4>Types</h4>
                            {pokemonDetail.types.map(e => (
                                <span>
                                    {e.type.name[0].toUpperCase() + e.type.name.substring(1)}
                                </span>
                            ))}
                        </div>
                        <div>
                            <h4>Abilities</h4>
                            {pokemonDetail.abilities.map(e => (
                                <span>
                                    {e.ability.name}
                                </span>
                            ))}
                        </div>
                    </div>
                    <button className='returnDetail' onClick={closeDetail}>Volver</button>
                </div>
            }
        </div >
    )
}

export default PokemonDetail
