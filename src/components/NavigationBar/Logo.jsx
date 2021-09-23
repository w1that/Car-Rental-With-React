import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setInputText } from "../../redux/searchBarSlice/searchBarSlice";
import logo from "./logo.png";

function Logo() {
  const history = useHistory();
  const dispatch = useDispatch();
  function clickHandler() {
    dispatch(setInputText(""));
    history.push('/')
  }
  return (
    <div>
      <img
      alt="logo"
        onClick={clickHandler}
        className="logoImage"
        style={{ marginTop: 4 }}
        src={logo}
      ></img>
    </div>
  );
}

export default Logo;
