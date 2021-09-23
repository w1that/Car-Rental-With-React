import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Icon } from "semantic-ui-react";
import { setInputText } from "../../redux/searchBarSlice/searchBarSlice";

function SearchBar() {
  const dispatch = useDispatch();
  const [localInput, setLocalInput] = useState("");

  const searchChangeHandler = (e) => {
    setLocalInput(e.target.value);
    if (e.target.value === "") {
      dispatch(setInputText(""));
    }
  };

  function clickHandler() {
    dispatch(setInputText(localInput));
  }

  return (
    <div style={{ display: "flex", position: "relative" }}>
      <input
        onChange={searchChangeHandler}
        placeholder="search a brand"
        style={{ height: 35.2, width: 330, padding: 10 }}
      ></input>
      <div
        className="searchIconDiv"
        onClick={clickHandler}
        style={{
          position: "absolute",
          right: 5,
          top: 2,
          padding: 5,
          border: "1px solid black",
          borderRadius: 6,
        }}
      >
        <Icon name="search"></Icon>
      </div>
    </div>
  );
}

export default SearchBar;
