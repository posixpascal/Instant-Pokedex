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
      input: "",
      evolutionChainData: [],
    };
  }
 handleSearchChange = event => {
   this.setState({
     filteredPokemon: filterPokemon(this.state.allPokemon,event.target.value)
   });
 };
  handler(inp) {
  this.setState({
    input: inp
  })
}

 componentDidMount() {
   fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
   .then(response => response.json())
   .then((data) => { this.setState({allPokemon: data.results})
   })
   .catch(console.log)
   fetch("https://pokeapi.co/api/v2/evolution-chain/?limit=78")
   .then(response => response.json())
   .then((data) => {this.setState({evolutionChainData: data.results})})
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
        input={this.state.input}
        />
    </div>
  );
}
}
