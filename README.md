# Instant-Pokedex

## Demo:
https://keen-mccarthy-187089.netlify.app/

## Vorgehensweise:

1. (App.js) Lade die Namen und URLS aller Pokemon von "https://pokeapi.co/api/v2/pokemon/?limit=900" und speichere sie in "allPokemon".
2. (Search.js) Bei einer Eingabe in das Textfeld werden mithilfe der helper function filterPokemonBySearch alle Pokemon entfernt, die nicht den Suchtext enthalten.
3. (Pokemonresults.js) Erstelle eine eigene Zeile zur Darstellung aller Evolutionslinien für jedes Pokemon, das nicht vom Filter entfernt wurde. Falls durch den Filter alle Pokemon entfernt wurden, wird stattdessen ein Platzhaltertext angezeigt.
4. (PokemonResultRow.js) Das Grundgerüst für jede Zeile besteht aus einer Überschrift ("Are you looking for X?") und allen Evolutionslinien.
5. (AllEvolutionChains.js) Zunächst zieht man sich die URL der Evolutionskette für jedes Pokemon von "https://pokeapi.co/api/v2/pokemon-species/X". Anschließend kann man alle Pokemon zuzüglich ihrer jeweiligen Evolutionstrigger aus der URL holen. Je nachdem, ob die Kette aus nur einem Pokemon (ohne Evolutionen) besteht, eine kurze Evolutionskette (die Evolutionen sind nur eine Stufe tief) ist oder es sich um eine lange Evolutionskette handelt (die Evolutionen haben wiederum Evolutionen), werden diese Evolutionsketten nun mithilfe der helper functionen in createEvolutionChains.js erstellt.
6. (EvolutionChain.js) Stellt die jeweilige Evolutionskette im Format: Basis Pokemon -> Erster Evolutionstrigger -> Erste Evolution -> Zweiter Evolutionstrigger -> Zweite Evolution dar (falls diese vorhanden sind)
7. (Pokemon.js) Hier werden die restlichen Informationen eines Pokemons (Bild, ID, Typen)... von "https://pokeapi.co/api/v2/pokemon/ + name" geladen und zusammen mit dem Namen dargestellt.
