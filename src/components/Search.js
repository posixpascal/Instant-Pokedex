import React from "react";
import PropTypes from "prop-types";

function Search(props) {
    return (
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <input
          id="search"
          onChange={e => props.inputHandler(e.target.value)}
          className="form-control"
          type="text"
          placeholder="Search..."
          aria-label="Search"
        />
      </form>

    )
  }

Search.propTypes = {
  searchChangeHandler: PropTypes.func,
  inputHandler: PropTypes.func,
  name: PropTypes.func
};

export default Search;
