import React, {Component} from "react"
import "./PokemonResults.css"
import PokemonResultRow from "./PokemonResultRow"
export default class PokemonResults extends Component {
  render() {
    const data = this.props.pokemonData
    return (
      <div className="container mt-5">
        {this.props.inputLength === 0 ?
          <h1 className="placeholder text-center">Your selected Pokemon's evolution tree will be shown here</h1>
          : data.length > 0 ?
          data.map(data => (
            <div className="row my-3">
              <PokemonResultRow
              name={data.name}
              url={data.url} />
            </div>
          ))
          :
          <h1 className="text-center">No matching pokemon found</h1>
        }
      </div>
    )
  }

}