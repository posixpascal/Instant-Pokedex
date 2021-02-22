import React, {Component} from "react"
import Pokemon from "./"

export default class EvolutionChain extends Component {
  // props: name,url

  constructor(props) {
    super(props)
    const url = this.props.url
    this.state = {
      id: url.slice(url.length-2,url.length-1),
      evolutionDetails: [],
      trigger: "",
      evolutions: [],
    }
  }
          //<h1>{this.state.evolutions[0]}</h1>

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/evolution-chain/' + this.state.id)
    .then(response => response.json())
    .then((data) => (this.setState({
      evolutions: data.chain.evolves_to.species.name
      // evolutionDetails: data.evolves_to.evolutionDetails,
      // trigger: data.evolves_to.evolutionDetails.trigger,
      // evolvesTo: data.evolves_to.evolutionDetails.trigger
    })))
    }

  getEvolutionChainId() {
    
  }

    render() {
      return(

        <h1>{this.state.id}</h1>
      )
    }

}
