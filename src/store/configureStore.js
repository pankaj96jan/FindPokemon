import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import pokemonReducer from "../reducers/PokemonReducer"
import searchPokemonReducer from "../reducers/SearchedPokemonReducer";


const configureStore = () => {
  const store = createStore(
    combineReducers({
      pokemons: pokemonReducer,
      searchedPokemon: searchPokemonReducer
    }),
    applyMiddleware(thunk)
  );
  return store;
};
export default configureStore;
