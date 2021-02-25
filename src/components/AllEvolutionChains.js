import React, {useState, useEffect} from "react"

function AllEvolutionChains(props) {
  const [firstForm, setFirstForm] = useState("")
  const [firstEvolutions, setFirstEvolutions] = useState([])
  const [secondEvolutions, setSecondEvolutions] = useState([])

  useEffect(() => {
    fetchData(setFirstForm,setFirstEvolutions,props.name)
  })


  return (
    <EvolutionChain
     firstForm={firstForm}
     firstEvoTrigger={firstEvoTrigger}
     firstEvolution={firstEvolution}
     secondEvoTrigger={secondEvoTrigger}
     secondEvolution={secondEvolution}/>
  )
}

function fetchData(setFirstForm,setFirstEvolutions,name) {
  fetch('https://pokeapi.co/api/v2/pokemon-species/' + name)
  .then(response => response.json())
  .then((data) => { fetch(data.evolution_chain.url)
    .then(response => response.json())
    .then((data) => {
      setFirstForm(data.chain.species.name);
      setFirstEvolutions(data.chain.evolves_to);
      data.chain.evolves_to.map((firstEvos) =>
        setSecondEvolutions(firstEvos.evolves_to)
      );
    })});
}

export default AllEvolutionChains;
