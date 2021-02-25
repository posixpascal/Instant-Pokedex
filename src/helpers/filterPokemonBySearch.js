const filterPokemonBySearch = (allPokemon, searchText) =>
  allPokemon.filter((pokemon) => pokemon.name.includes(searchText.toLowerCase()))
;

export default filterPokemonBySearch
