import React from "react";
import { useDispatch } from "react-redux";
import { Divider } from "semantic-ui-react";
import { setIsNotDropped } from "../../redux/filterSlice/filterSlice";
import ColorList from "./ColorList";
import DailyPriceArea from "./DailyPriceArea";
import FilterButton from "./FilterButton";

function FilterBar() {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        padding: 20,
        background: " #950740",
        marginRight: 30,
        borderRadius: 8,
        height: 400,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3 style={{ color: "white", marginBottom: 0 }}>Filters</h3>{" "}
        <button
          onClick={() => dispatch(setIsNotDropped())}
          className="categoryButton"
          style={{
            background: "#C3073F",
            border: "0px ",
            borderRadius: 8,
            marginRight: 9,
          }}
        >
          <img style={{padding:5, marginTop:2}} alt="filter-icon" width="30" src="https://img.icons8.com/external-prettycons-solid-prettycons/60/ffffff/external-left-arrow-orientation-prettycons-solid-prettycons.png"/>
        </button>
      </div>
      <Divider />
      <ColorList></ColorList>
      <Divider />
      <DailyPriceArea></DailyPriceArea>
      <FilterButton></FilterButton>
    </div>
  );
}

export default FilterBar;
