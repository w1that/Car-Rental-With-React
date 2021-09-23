import React from "react";
import { useDispatch } from "react-redux";
import { setIsDropped } from "../../redux/filterSlice/filterSlice";

function CategoryIcon() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => dispatch(setIsDropped())}
        className="categoryButton"
        style={{
          background: "#C3073F",
          border: "0px ",
          borderRadius: 8,
          marginRight: 9,
        }}
      >
<img width="30" style={{padding:5, marginTop:2}} alt="filter-icon" src="https://img.icons8.com/external-prettycons-solid-prettycons/60/ffffff/external-right-arrow-orientation-prettycons-solid-prettycons.png"/>      </button>
    </div>
  );
}

export default CategoryIcon;
