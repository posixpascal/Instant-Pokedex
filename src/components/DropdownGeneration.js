import React, {useState, useEffect} from "react"

export default function DropdownGeneration(props) {
  const [btnTitle, setBtnTitle] = useState("Generation 1");
  useEffect(() => {
    props.generationHandler(btnTitle.charAt(11));
  });

  return (
    <div className="dropdown">
    <button className="btn btn-lg dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      {btnTitle}
    </button>
    <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
      <button className="dropdown-item" onClick={(e) => {setBtnTitle("Generation 1");}} type="button">Generation 1</button>
      <button className="dropdown-item" onClick={(e) => {setBtnTitle("Generation 2");}} type="button">Generation 2</button>
      <button className="dropdown-item" onClick={(e) => {setBtnTitle("Generation 3");}} type="button">Generation 3</button>
      <button className="dropdown-item" onClick={(e) => {setBtnTitle("Generation 4");}} type="button">Generation 4</button>
      <button className="dropdown-item" onClick={(e) => {setBtnTitle("Generation 5");}} type="button">Generation 5</button>
      <button className="dropdown-item" onClick={(e) => {setBtnTitle("Generation 6");}} type="button">Generation 6</button>
      <button className="dropdown-item" onClick={(e) => {setBtnTitle("Generation 7");}} type="button">Generation 7</button>
      <button className="dropdown-item" onClick={(e) => {setBtnTitle("Generation 8");}} type="button">Generation 8</button>
      <button className="dropdown-item" onClick={(e) => {setBtnTitle("All Generations");}} type="button">All Generations</button>
    </div>
    </div>
  )
}
