import React, { useState, useEffect } from "react";
import "./Pokemon.css";
import PropTypes from "prop-types";

function Pokemon(props) {
  const [types, setTypes] = useState(["Type", "Type2"]);
  const [id, setId] = useState(1);

  // isBusy means that the types array is still loading
  const [isBusy, setBusy] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetchPokemonTypesAndId(props.name,setId,setTypes,setBusy,mounted);
    return () => {mounted = false};
  }, [props.name]);

  return (
    <div className="mt-3">
      {!isBusy && types !== undefined ? (
        <div className="h-100">
          <p className="id text-center mb-n1">#{id}</p>
          <h4 className="capitalize text-center">{props.name}</h4>
          <img
            className="artwork"
            src={"https://img.pokemondb.net/artwork/" + props.name + ".jpg"}
            alt={props.name}
            />
          <div className="mt-2 justify-content-center ">
            <p className="types">
              {types.map((type) => (
                <span className={type.type.name} key={type.type.name}>
                  {capitalize(type.type.name)}
                </span>
              ))}
            </p>
          </div>
        </div>
      ) : (
        <div
          className="spinner-border justify-content-center align-self-center"
          role="loadPokemonStatus"
          >
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </div>
  );
}

Pokemon.propTypes = {
  name: PropTypes.string,
  evoTrigger: PropTypes.array,
};

const fetchPokemonTypesAndId = (name,setId,setTypes,setBusy,mounted) => {
  setBusy(true);
  fetch("https://pokeapi.co/api/v2/pokemon/" + name)
    .then((response) => response.json())
    .then((data) => { if (mounted){
      setId(data.id);
      setTypes(data.types);
      setBusy(false);
    }
    });}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default Pokemon;
