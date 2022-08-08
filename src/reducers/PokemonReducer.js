let pokemonsInitialState = [];

const pokemonReducer = (state = pokemonsInitialState, action) => {
    switch (action.type) {
        case "POKEMON_FETCH":{
            return [...action.payload];
        }
        default:
            return state
    }
};
export default pokemonReducer;


