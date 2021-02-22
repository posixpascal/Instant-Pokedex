// // TODO: in react function umwandeln

export default function filterPokemon(allPokemon, searchText) {
  return allPokemon
    .filter(pokemon => {
      if (pokemon.name.includes(searchText.toLowerCase())) {
        return true;
      }
      return false;
    })
}
