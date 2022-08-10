import axios from "axios"

export const fetchPokemon = () => {
    return (dispatch) => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0")
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
export const fetchPokemonDetails = (name) => {
    return (dispatch) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((res) => {
                const pokemonDetails=res.data
                dispatch(pokemonDetailsAction(pokemonDetails))
            })
            .catch((err) => alert(err.message))
    }
}

export const pokemonDetailsAction = (data) => {
    return {
        type: "POKEMON_DETAIL_FETCH",
        payload: data
    }
}


export const searchPokemonDetail = (data) => {
    return {
        type: "POKEMON_SEARCH",
        payload: data
    }
}
