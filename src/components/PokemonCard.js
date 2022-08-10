import axios from "axios";
import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

const PokemonCard = ({ name }) => {
  const [toggle, setToggle] = useState(false);
  const [pokemonDetail, setPokemonDetail] = useState({});

  const handleToggle = (id) => {
    setToggle(id);
  };

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => {
        setPokemonDetail(res.data);
      })
      .catch((err) => alert(err.message));
  }, [name]);
  const typeName = pokemonDetail &&
    pokemonDetail.types &&
    pokemonDetail.types[0]?.type?.name

  const wrapperClass = !toggle ? `card_wrapper ${typeName}` : `progress_wrapper`;
  return (
    <div
      className={wrapperClass}
      onMouseOver={() => handleToggle(pokemonDetail?.id)}
      onMouseOut={() => handleToggle(!pokemonDetail?.id)}
    >
      {toggle ? (
        <>
          {pokemonDetail && (
            <div>
              {pokemonDetail.stats.map((stat, i) => (
                <div className="stat_wrapper " key={i}>
                  <div className="stat_name color" >{stat.stat.name}</div>
                  <div className="progress_bar">
                    <div style={{ width: `${stat.base_stat}%`, backgroundColor: "#D14D36", height: "10px" }}></div>
                  </div>
                  <div className="stat-number color"> {stat.base_stat}</div>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <>
          {typeName &&
            pokemonDetail?.sprites && (
              <>
                <div className="image_container">
                  <div className="image_wrapper">
                    <img
                      className="pokemon_image"
                      alt="pokemon"
                      src={
                        pokemonDetail.sprites?.other?.dream_world?.front_default
                      }
                    />
                  </div>
                </div>
                <div className="pokemon_details_wrapper">
                  <div className="pokemon_id">#{pokemonDetail.id}</div>
                  <div className="text color margin">{pokemonDetail.name}</div>
                  <div className="text color margin">{pokemonDetail?.types[0]?.type?.name}</div>
                </div>
              </>
            )}
        </>
      )}
    </div>
  );
};

export default PokemonCard;
