const filterPokemonBySearch = (allPokemon, searchText) =>
  allPokemon.filter((pokemon) => pokemon.name.includes(searchText.toLowerCase()))
  .slice(0,20)
;

export default filterPokemonBySearch
