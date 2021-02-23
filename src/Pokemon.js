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


  fetchData(name) {
    fetch("https://pokeapi.co/api/v2/pokemon/" + name)
    .then(response => response.json())
    .then((data) => (this.setState({
      types: data.types,
      id :data.id,
    })))
  }

  componentDidMount() {
      this.fetchData(this.props.name)
    }

  componentDidUpdate(prevProps) {
    if(this.props.name !== prevProps.name || this.props.evoTrigger !== prevProps.evoTrigger)
      this.fetchData(this.props.name)
  }

//{this.state.types.map(type => (<li className="">{type.type.name}</li>))}
 render() {
   if (this.state.types === undefined) return null
   return (
     <div className="container mt-3">
       <div className="row">
      <div className="col-3 align-self-center">
      <p className="">{this.props.evoTrigger}</p>
      <span className="arrow-right"></span>
      </div>
      <div className="col-9">
       <div className="row justify-content-center">
         <p className="id text-center mb-n1">#{this.state.id}</p>
       </div>
       <div className="row justify-content-center">
         <h3 className="name capitalize text-center">{this.props.name}</h3>
       </div>
       <div className="row justify-content-center">
         <img className="artwork img-responsive" src={"https://img.pokemondb.net/artwork/" + this.props.name +".jpg"} alt={this.props.name}/>
       </div>
        <div className="row mt-2 justify-content-center">
          <p className="types">{this.state.types.map(type => (<span className={type.type.name} >{type.type.name} </span>))}</p>
       </div>
       </div>
       </div>
     </div>
   )
 }
}
