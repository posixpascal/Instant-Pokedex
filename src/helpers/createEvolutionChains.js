import EvolutionChain from "../components/EvolutionChain"

export const createPokemonWithoutEvolution = (allPokemon,firstForm) =>
  <EvolutionChain
    allPokemon={allPokemon}
    firstForm={firstForm}
    />

export const createShortEvolutionChain = (allPokemon,firstForm,firstEvoTrigger,firstEvolution) =>
    <EvolutionChain
      allPokemon={allPokemon}
      firstForm={firstForm}
      firstEvoTrigger={firstEvoTrigger}
      firstEvolution={firstEvolution}
    />

export const createLongEvolutionChain = (allPokemon,firstForm,firstEvoTrigger,firstEvolution,secondEvoTrigger,secondEvolution) =>
  <EvolutionChain
    allPokemon={allPokemon}
    firstForm={firstForm}
    firstEvoTrigger={firstEvoTrigger}
    firstEvolution={firstEvolution}
    secondEvoTrigger={secondEvoTrigger}
    secondEvolution={secondEvolution}
  />

const pokemonInGeneration = (allPokemon, name) => {
  return allPokemon.map((p) => p.name).includes(name);
};
