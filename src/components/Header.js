import "./Header.css";
import Search from "./Search";
import PropTypes from "prop-types";

function Header(props) {
  return (
    <div className="mx-2 row header my-5 align-items-center justify-content-center">
      <div className="col-lg-3 pb-2 text-center">
        <a href="">
          <h1 className="title">Instadex</h1>
        </a>
      </div>
      <div className="col-lg-9 pb-2">
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
  inputHandler: PropTypes.func,
};

export default Header;
