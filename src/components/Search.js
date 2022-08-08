import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPokemonDetail } from "../action/PokemonAction";

const Search = ({ pokemons }) => {
    const dispatch = useDispatch();
    const [searchInput, setSearchInput] = useState("");

    const handleSearch = (e) => {
        setSearchInput(e.target.value);
        if (e.target.value !== "") {
            const filterData = pokemons.filter((ele) =>
                ele.name.includes(e.target.value)
            );
            dispatch(searchPokemonDetail(filterData));
        } else {
            dispatch(searchPokemonDetail([]));
        }
    };

    return (
        <div className="searchCompo">
            <input
                value={searchInput}
                onChange={handleSearch}
                id="searchInput"
                placeholder="search name"
                type="text"
                value={searchInput}
            ></input>
        </div>
    );
};

export default Search;
