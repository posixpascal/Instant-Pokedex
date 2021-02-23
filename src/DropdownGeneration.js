import React, {useState} from "react"

export default function DropdownGeneration() {
  const [btnTitle, setbtnTitle] = useState("Generation 12");
  return (
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {btnTitle}
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <button class="dropdown-item" type="button" onclick={() => setbtnTitle("Generation 1")}>Generation 1</button>
        <button class="dropdown-item" type="button" onclick={() => setbtnTitle("Generation 2")}>Generation 2</button>
        <button class="dropdown-item" type="button" onclick="showGeneration(this)">Generation 3</button>
        <button class="dropdown-item" type="button" onclick="showGeneration(this)">Generation 4</button>
        <button class="dropdown-item" type="button" onclick="showGeneration(this)">Generation 5</button>
        <button class="dropdown-item" type="button" onclick="showGeneration(this)">Generation 6</button>
        <button class="dropdown-item" type="button" onclick="showGeneration(this)">Generation 7</button>
        <button class="dropdown-item" type="button" onclick="showGeneration(this)">Generation 8</button>
      </div>
    </div>
  );
}
