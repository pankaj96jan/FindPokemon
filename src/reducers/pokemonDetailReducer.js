let pokemonsDetailInitialState = [];

const pokemonsDetailReducer = (state = pokemonsDetailInitialState, action) => {
    switch (action.type) {
        case "POKEMON_DETAIL_FETCH": {
            return {...action.payload}
        }
        default:
            return state
    }
};
export default pokemonsDetailReducer;


