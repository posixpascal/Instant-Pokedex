import React, { PureComponent } from "react"
import Header from "./Header"
import PokemonResults from "./PokemonResults"
import filterPokemon from "./filterPokemon"
import './App.css'

//// TODO: handler?
// TODO: handleSearchChange?
// TODO: allpokemon?
// TODO: filteredPokemon?
// TODO:componentDidMount?

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this)
    this.state = {
      allPokemon: [],
      filteredPokemon: [],
      inputLength: 0,
    };
  }
 handleSearchChange = event => {
   this.setState({
     filteredPokemon: filterPokemon(this.state.allPokemon,event.target.value)
   });
 };
  handler(len) {
  this.setState({
    inputLength: len
  })
}

 componentDidMount() {
   fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
   .then(response => response.json())
   .then((data) => { this.setState({allPokemon: data.results})
   })
   .catch(console.log)
 }

render() {
  return (
    <div>
      <Header
        textChange={this.handleSearchChange}
        handler={this.handler}
        />
      <PokemonResults
        pokemonData={this.state.filteredPokemon}
        inputLength={this.state.inputLength}
        />
    </div>
  );
}
}
