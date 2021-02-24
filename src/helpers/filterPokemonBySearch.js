export default function filterPokemonBySearch(allPokemon, searchText) {
  return allPokemon
    .filter(pokemon => {
      if (pokemon.name.includes(searchText.toLowerCase())) {
        return true;
      }
      return false;
    })
    .slice(0,1)
    }
