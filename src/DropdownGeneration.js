import React, {useState} from "react"

export default function DropdownGeneration(props) {
  const [btnTitle, setBtnTitle] = useState("Generation 1");
  props.generationHandler(btnTitle.charAt(11))
  return (
    <div class="dropdown">
    <button class="btn btn-lg dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      {btnTitle}
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
      <button class="dropdown-item" onClick={(e) => {setBtnTitle("Generation 1");}} type="button">Generation 1</button>
      <button class="dropdown-item" onClick={(e) => {setBtnTitle("Generation 2");}} type="button">Generation 2</button>
      <button class="dropdown-item" onClick={(e) => {setBtnTitle("Generation 3");}} type="button">Generation 3</button>
      <button class="dropdown-item" onClick={(e) => {setBtnTitle("Generation 4");}} type="button">Generation 4</button>
      <button class="dropdown-item" onClick={(e) => {setBtnTitle("Generation 5");}} type="button">Generation 5</button>
      <button class="dropdown-item" onClick={(e) => {setBtnTitle("Generation 6");}} type="button">Generation 6</button>
      <button class="dropdown-item" onClick={(e) => {setBtnTitle("Generation 7");}} type="button">Generation 7</button>
      <button class="dropdown-item" onClick={(e) => {setBtnTitle("Generation 8");}} type="button">Generation 8</button>
    </div>
    </div>
  )
}
