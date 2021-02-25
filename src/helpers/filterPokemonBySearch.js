const filterPokemonBySearch = (allPokemon, searchText) => {
  return allPokemon
    .filter((pokemon) => pokemon.name.includes(searchText.toLowerCase()))
    .slice(0, 1);
};

export default filterPokemonBySearch
