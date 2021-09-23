import { nanoid } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllColors } from "../../redux/colorSlice/colorSlice";
import ColorItem from "./ColorItem";

function ColorList() {
  const colors = useSelector((state) => state.color.items);
  const dispatch = useDispatch();

 useEffect(() => {
   dispatch(getAllColors())
 }, [dispatch])

  return (
    <div>
      <h3 style={{ color: "white" }}>Colors</h3>
      <div
        style={{
          background: "#F7F7F7",
          height: 110,
          borderRadius: 9,
          width: 150,
          overflow: "auto",
        }}
      >
        {colors.map((color) => (
          <li key={nanoid()}>
            <ColorItem color={color}></ColorItem>
          </li>
        ))}
      </div>
    </div>
  );
}

export default ColorList;
