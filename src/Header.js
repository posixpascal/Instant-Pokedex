import "./Header.css";
import Search from "./Search";
import DropdownGeneration from "./DropdownGeneration";
import PropTypes from "prop-types";

function Header(props) {
    return (
      <div className="header container mt-5 pb-2 ">
        <div className="row align-items-center">
          <div className="col-lg-3 text-center">
            <h1 className="title">Instadex</h1>
          </div>
          <div className="col-lg-2">
            <DropdownGeneration
              generationHandler={props.generationHandler}
            />
          </div>
          <div className="col-lg-7">
            <Search
              textChange={props.textChange}
              inputHandler={props.inputHandler}
            />
          </div>
        </div>
      </div>
    )
}

Header.propTypes = {
  generationHandler: PropTypes.func,
  textChange: PropTypes.func,
  inputHandler: PropTypes.func
}

export default Header
