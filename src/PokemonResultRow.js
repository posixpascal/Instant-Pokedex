import React,{Component} from "react"
import "./PokemonResultRow.css"
import Pokemon from "./Pokemon"
import EvolutionChain from "./EvolutionChain"

export default class PokemonRow extends Component {

  render() {
    const input = this.props.input

    return (

      <div className ="container">
        <div className="row">
          <h3 className="heading">Are you looking for: <b className="capitalize">
            {this.props.name}</b>?</h3>
        </div>
        <div className="row">
          <EvolutionChain
            name={this.props.name}
            />
        </div>
        <hr></hr>
      </div>
    )
  }
}
