import React, {PureComponent} from "react"
import "./Header.css"
import Search from "./Search"

export default class Header extends PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
    <header>
      <div className="container mt-5 ">
        <div className="row">
            <div className="col-lg-3 text-center">
              <h1 className="title">Instadex</h1>
            </div>
            <div className="col-lg-9 align-self-center">
              <Search
                textChange={this.props.textChange}
                handler={this.props.handler}
                />
            </div>
        </div>
      </div>
    </header>
    )
  }
}
