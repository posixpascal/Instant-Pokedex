import Pokemon from "./Pokemon";
import React, { useState, useEffect } from "react";
import "./EvolutionChain.css";
import PropTypes from "prop-types";
import getEvoTrigger from "../helpers/getEvoTrigger";

function EvolutionChain(props) {
  return (
    <div className="evo-chain d-flex flex-column flex-sm-row">
    <div className="col-sm-3 col-offset-1">
      {createFirstForm(props.firstForm)}
    </div>
    {props.firstEvoTrigger !== undefined && props.firstEvolution != undefined ?
      <div className="col-sm-4">
      {createFirstEvolution(props.firstEvoTrigger,props.firstEvolution)}
      </div>
      : null}


    {props.secondEvoTrigger !== undefined && props.secondEvolution != undefined ?
      <div className="col-sm-4">
      {createSecondEvolution(props.secondEvoTrigger,props.secondEvolution)}
      </div>: null}

    </div>
  );
}

const createFirstForm = (firstForm) =>
       <Pokemon name={firstForm} />;


const createFirstEvolution = (firstEvoTrigger, firstEvolution) =>
  <div className="d-flex flex-column flex-sm-row">
    {firstEvoTrigger !== undefined ?
    <div className="col-sm-3 d-flex justify-content-center align-self-center">
      <p className="trigger pt-3 pt-sm-5 mr-sm-4">{firstEvoTrigger}</p>
    </div>
    : null}
    <div className="col-sm-9">
      <Pokemon name={firstEvolution} />
    </div>
  </div>;

const createSecondEvolution = (secondEvoTrigger,secondEvolution) =>
  <div className="d-flex flex-column flex-sm-row">
    <div className="col-sm-3 d-flex justify-content-center align-self-center">
      <p className="trigger pt-3 pt-sm-5 mr-sm-4">{secondEvoTrigger}</p>
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
