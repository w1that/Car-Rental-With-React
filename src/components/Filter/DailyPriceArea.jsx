import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {  clearPrices, setMaxPrice, setMinPrice } from "../../redux/filterSlice/filterSlice";

function DailyPriceArea() {
  const dispatch = useDispatch();

  function onMinChange(e) {
    dispatch(setMinPrice(e.target.value));
  }

  function onMaxChange(e) {
    dispatch(setMaxPrice(e.target.value));
  }

  useEffect(() => {
    dispatch(clearPrices())
  }, [dispatch])

  return (
    <div>
      <h3 style={{ color: "white" }}>Daily Price</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <input
          onChange={onMinChange}
          className="minMaxInput"
          type="number"
          step="50"
          min="0"
          placeholder="min"
        ></input>
        <input
          onChange={onMaxChange}
          className="minMaxInput"
          type="number"
          step="50"
          min="0"
          placeholder="max"
        ></input>
      </div>
    </div>
  );
}

export default DailyPriceArea;
