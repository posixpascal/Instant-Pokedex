import "./Header.css";
import Search from "./Search";
import DropdownGeneration from "./DropdownGeneration";
import PropTypes from "prop-types";

function Header(props) {
    return (
        <div className=" mx-2 row header my-5 align-items-center justify-content-center">
          <div className="col-lg-3 text-center">
            <a href=""><h1 className="title">Instadex</h1></a>
          </div>
          <div className="text-center  pb-2 col-lg-2">
            <DropdownGeneration
              generationHandler={props.generationHandler}
            />
          </div>
          <div className="col-lg-7 pb-2 ">
            <Search
              searchChangeHandler={props.searchChangeHandler}
              inputHandler={props.inputHandler}
            />
          </div>
        </div>
    );
}

Header.propTypes = {
  generationHandler: PropTypes.func,
  searchChangeHandler: PropTypes.func,
  inputHandler: PropTypes.func
}

export default Header;
