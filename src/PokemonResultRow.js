import React,{Component} from "react"
import "./PokemonResultRow.css"
import Pokemon from "./Pokemon"
import EvolutionChain from "./EvolutionChain"

// <div className="col-3">
//   <Pokemon
//     name={this.props.name}
//     url={this.props.url}
//     />
// </div>
// <div className="col-3">
//   <Pokemon
//     name={this.props.name}
//     url={this.props.url}
//     />
// </div>
// <div className="col-3">
//   <Pokemon
//     name={this.props.name}
//     url={this.props.url}
//     />
//</div>


export default class PokemonRow extends Component {
  render() {
    return (
      <div className ="container">
        <div className="row">
          <h3 className="heading">Are you looking for: <b className=" capitalize">{this.props.name}</b>? </h3>
        </div>
        <div className="row">
          <EvolutionChain
            name={this.props.name}
            url={this.props.url}
            />
        </div>
        <hr></hr>
      </div>
    )
  }
}
