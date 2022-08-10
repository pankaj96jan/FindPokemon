import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPokemonDetail } from "../action/PokemonAction";

const Search = ({ pokemons, handleWrongSearch }) => {
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
        <div className="search_box">
            <input
                value={searchInput}
                onChange={handleSearch}
                placeholder="Search here ..."
                type="text"
            ></input>
        </div>
    );
};

export default Search;
