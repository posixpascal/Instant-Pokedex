import Pokemon from "./Pokemon";
import React, { useState, useEffect } from "react";
import "./EvolutionChain.css";
import PropTypes from "prop-types";
import getEvoTrigger from "../helpers/getEvoTrigger";

function EvolutionChain(props) {
  return (
    <div className="d-flex flex-column flex-sm-row">
    <div className="col-sm-3">
      <Pokemon name={props.firstForm}/>
    </div>
    <div className="col-sm-4">
    {props.firstEvoTrigger !== undefined && props.firstEvolution != undefined ?
      createFirstEvolution(props.firstEvoTrigger,props.firstEvolution)
      : null}
    </div>
    <div className="col-sm-4">
    {props.secondEvoTrigger !== undefined && props.secondEvolution != undefined ?
      createSecondEvolution(props.secondEvoTrigger,props.secondEvolution) : null}
    </div>
    </div>
  );
}

const createFirstEvolution = (firstEvoTrigger, firstEvolution) =>
  <div className="d-flex flex-column flex-sm-row">
    <div className="col-sm-3 align-self-center">
      <p className="trigger">{firstEvoTrigger}</p>
    </div>
    <div className="col-sm-9">
      <Pokemon name={firstEvolution} />
    </div>
  </div>;

const createSecondEvolution = (secondEvoTrigger,secondEvolution) =>
  <div className="d-flex flex-column flex-sm-row">
    <div className="col-sm-3 align-self-center">
      <p className="trigger">{secondEvoTrigger}</p>
    </div>
    <div className="col-sm-9">
      <Pokemon name={secondEvolution}/>
    </div>
  </div>;

EvolutionChain.propTypes = {
  name: PropTypes.string,
  allPokemon: PropTypes.array,
};

export default EvolutionChain;
