import EvolutionArrow from "./EvolutionArrow"
import Pokemon from "./Pokemon"
import React from "react"
import "./EvolutionChain.css"
export default class EvolutionChain extends React.Component {
  // props: name,url

  constructor(props) {
    super(props)
    this.state = {
      firstForm: "",
      firstEvolutions: [],
    }
  }

fetchChainData(chainUrl) {
  let second = []
  fetch(chainUrl)
  .then(response => response.json())
  .then((data) => (
    this.setState({
      firstForm: data.chain.species.name,
      firstEvolutions: data.chain.evolves_to,
  })))
}

  fetchChainURL(name) {
    fetch('https://pokeapi.co/api/v2/pokemon-species/' + name)
    .then(response => response.json())
    .then((data) => {this.setState({
      chainUrl: data.evolution_chain.url})
      return this.fetchChainData(this.state.chainUrl)
    })
  }

  componentDidMount() {
    this.fetchChainURL(this.props.name)
    }

  componentDidUpdate(prevProps) {
    if (this.props.name !== prevProps.name) {
      this.fetchChainURL(this.props.name)
    }
  }

  getEvoTrigger(evo) {
    const triggerName = evo.evolution_details[0].trigger.name
    let triggers = Object.entries(evo.evolution_details[0])
      .filter(([k, v]) => v != null && v != "" && k != "trigger");
    switch (triggerName) {
      case "level-up":
        return triggers.map(t => (t[0].replace("_"," ") + " " + t[1]));
      case "use-item":
        return  triggers.map(t => (triggerName.replace("-"," ") + " " + t[1].name.replace("-"," ")))
      case "trade":
        return triggers.map(t => (triggerName.replace("-"," ") + " while holding " + t[1].name.replace("-"," ")))
    }
    return "lul";
  }
                //
    render() {
      return(
        <div className="container">
          <div className="flex-column d-flex flex-sm-row align-items-center">
            <div className="col-4 align-self-center">
              <Pokemon name={this.state.firstForm}/>
            </div>
            <div className ="col-4 col-xs-12 align-self-center">
            {this.state.firstEvolutions.map(evo =>
              (evo.species.url.split("/")[6] <= 151) ?
                (
                  <Pokemon evoTrigger={this.getEvoTrigger(evo)} name={evo.species.name}/>
                )
                : (null)
            )}
            </div>
            <div className="col-4">
            {this.state.firstEvolutions.map(firstEvo =>
              (firstEvo.evolves_to.map(secondEvo => <Pokemon evoTrigger={this.getEvoTrigger(secondEvo)} name={secondEvo.species.name}/>)))}
            </div>
        </div>
      </div>
      )
    }

  }
