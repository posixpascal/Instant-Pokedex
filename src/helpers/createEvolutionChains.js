import EvolutionChain from "../components/EvolutionChain"


// if the filtered pokemon doesn't have any evolutions
export const createPokemonWithoutEvolution = (allPokemon,firstForm) =>
  <EvolutionChain
    allPokemon={allPokemon}
    firstForm={firstForm}
    />

//if the first form has at least one evolution
export const createShortEvolutionChain = (allPokemon,firstForm,firstEvoTrigger,firstEvolution) =>
    <EvolutionChain
      allPokemon={allPokemon}
      firstForm={firstForm}
      firstEvoTrigger={firstEvoTrigger}
      firstEvolution={firstEvolution}
    />

//if the first evolution has at least one evolution
export const createLongEvolutionChain = (allPokemon,firstForm,firstEvoTrigger,firstEvolution,secondEvoTrigger,secondEvolution) =>
  <EvolutionChain
    allPokemon={allPokemon}
    firstForm={firstForm}
    firstEvoTrigger={firstEvoTrigger}
    firstEvolution={firstEvolution}
    secondEvoTrigger={secondEvoTrigger}
    secondEvolution={secondEvolution}
  />

// const pokemonInGeneration = (allPokemon, name) => {
//   return allPokemon.map((p) => p.name).includes(name);
// };
