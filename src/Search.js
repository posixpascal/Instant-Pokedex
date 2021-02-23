import React, {PureComponent} from "react"
import PropTypes from "prop-types";

export default class Search extends PureComponent {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }
  static propTypes = {
  textChange: PropTypes.func
  };
  submitHandler(e) {
    e.preventDefault();
  }
  handleChange = event => {
  this.props.textChange(event);
  this.props.handler(this.myRef.current.value)
  };


  render() {
    return (
      <form className="form" onSubmit={this.submitHandler}>
        <input ref={this.myRef} id="search" onChange={this.handleChange} className="form-control form-control-lg" type="text"
        placeholder="Search..." aria-label="Search"/>
    </form>

    )
  }
}
