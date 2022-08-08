const searchedInitialState = [];

const searchPokemonReducer = (state = searchedInitialState, action) => {
    switch (action.type) {
        case "POKEMON_SEARCH": {
            return [...action.payload];
        }

        default:
            return state
    }
};
export default searchPokemonReducer;