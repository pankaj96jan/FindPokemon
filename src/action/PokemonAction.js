import axios from "axios"

export const fetchPokemon = () => {
    return (dispatch) => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
            .then((res) => {
                const pokemon=res.data.results
                // console.log(pokemon);
                dispatch(pokemonAction(pokemon))
            })
            .catch((err) => alert(err.message))
    }
}

export const pokemonAction = (data) => {
    return {
        type: "POKEMON_FETCH",
        payload: data
    }
}


export const searchPokemonDetail = (data) => {
    return {
        type: "POKEMON_SEARCH",
        payload: data
    }
}
