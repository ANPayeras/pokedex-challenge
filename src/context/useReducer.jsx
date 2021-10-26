export default (state, action) => {

    const { payload, type } = action

    switch (type) {
        case 'getData':
            return {
                ...state,
                pokemonsAPI: payload
            };
        case 'getPokemonsWithData':
            return {
                ...state,
                pokemonsWithData: payload
            };
        case 'getAll':
            return {
                ...state,
                pokemonsWithData: [...state.pokemonsWithData, ...payload.slice(20)]
            };
        case 'showDetail':
            return {
                ...state,
                showDetail: !state.showDetail,
                pokemonDetail: payload
            };
        case 'closeDetail':
            return {
                ...state,
                showDetail: false
            };
        case 'searchedPokemons':
            return {
                ...state,
                pokemonsSearch: payload.filteredPokemons,
                searching: payload.searching,
            };
        default:
            return state;
    }
};