import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokemonCard from "./PokemonCard";
import { fetchPokemon } from "../action/PokemonAction";
import Search from "./Search";
import Button from "./Button";
const PokemonDetails = () => {
  const dispatch = useDispatch();

  const pokemons = useSelector((state) => state.pokemons);
  const searchedPokemons = useSelector((state) => state.searchedPokemon);


  useEffect(() => {
    dispatch(fetchPokemon());
  }, [dispatch]);



  return (
    <div >
      <div className="header_wrapper" >
         <Search  pokemons={pokemons} />
        <Button  /></div>
      <div className="listing_pokemons ">
        {searchedPokemons.length > 0 ? (
          <>
            {searchedPokemons &&
              searchedPokemons.map((ele, i) => {
                return <PokemonCard name={ele.name} key={i} />;
              })}
          </>
        ) : (
          <>
            {pokemons &&
              pokemons.map((ele, i) => {
                return <PokemonCard name={ele.name} key={i} />;
              })}
          </>
        )}
      </div>
    </div>
  );
};

export default PokemonDetails;
