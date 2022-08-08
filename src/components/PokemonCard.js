import axios from "axios";
import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

const PokemonCard = ({ name }) => {
  const [toggle, setToggle] = useState(false);
  const [pokemonDetail, setPokemonDetail] = useState({});
  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };
  // const pokemonDetail = useSelector((state) => state.pokemonDetail)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //     dispatch(fetchPokemonDetails(name))
  // }, [])
  // const handleCardBackground = () => {
  //     let pokemonType = pokemonDetail.types[0].type.name
  //     if (pokemonType === "grass") {
  //         return "lightgreen"
  //     } else if (pokemonType === "fire") {
  //         return "white"
  //     }
  // }
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => {
        setPokemonDetail(res.data);
        // dispatch(pokemonDetailAction(res.data))
      })
      .catch((err) => alert(err.message));
  }, [name]);
  console.log(toggle);
  return (
    <div className="pokemon_card ">
      {toggle ? (
        <div
          style={{
            background: "black",
            borderRadius: "inherit",
            color: "white",
          }}
        // onMouseOver={handleToggle}
        // onMouseOut={handleToggle}
        >
          {pokemonDetail && (
            <div
              // onMouseOver={handleToggle}
              onMouseOut={handleToggle}
            >
              {pokemonDetail.stats.map((stat, i) => (
                <div key={i} style={{ display: "flex" }}>
                  <div style={{ flex: 0.3 }}>{stat.stat.name}</div>
                  <div style={{ flex: 0.4, padding: "10px" }}>
                    <ProgressBar value={stat.base_stat} />
                  </div>
                  <div style={{ flex: 0.3 }}> {stat.base_stat}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div 
        style={{
          background: "lightblue",
          borderRadius: "inherit",
          color: "white",
        }}
        >
          {pokemonDetail &&
            pokemonDetail.types &&
            pokemonDetail.types[0] &&
            pokemonDetail?.sprites && (
              <>
                <div>
                  <img
                    onMouseOver={handleToggle}
                    //  onMouseOut={handleToggle}
                    style={{ width: "80px", height: "80px" }}
                    alt="pokemon"
                    src={
                      pokemonDetail.sprites?.other?.dream_world?.front_default
                    }
                  />
                </div>
                <div>#{pokemonDetail.id}</div>
                <div>{pokemonDetail.name}</div>
                <div>{pokemonDetail?.types[0]?.type?.name}</div>
              </>
            )}
        </div>
      )}
    </div>
  );
};

export default PokemonCard;
