import React, {Component} from "react"
import "./Pokemon.css"

export default class Pokemon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      types: [],
      id: 0,
    }
  }

  componentDidMount() {
    fetch(this.props.url)
    //fetch('https://pokeapi.co/api/v2/pokemon/' + this.props.name)
    .then(response => response.json())
    .then((data) => (this.setState({
      types: data.types,
      id :data.id
    })))
    }
 render() {
   return (
     <div className="container mt-3">
       <p>{this.props.url}</p>
       <p className="id text-center mb-n1">#{this.state.id}</p>
       <h3 className="name capitalize text-center">{this.props.name}</h3>
       <img className="artwork img-fluid" src={"https://img.pokemondb.net/artwork/" + this.props.name +".jpg"} alt={this.props.name}/>
       <div className="row">
         <ul className="types my-1">
           {this.state.types.map(type => (<li className="capitalize mx-2 col-6 type" key={type.type.name}>{type.type.name}</li>))}
         </ul>
       </div>
     </div>
   )
 }
}
