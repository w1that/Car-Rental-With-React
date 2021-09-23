import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Checkbox } from "semantic-ui-react";
import {
  clearColors,
  removeColor,
  setColor,
} from "../../redux/filterSlice/filterSlice";

function ColorItem({ color }) {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);
  function changeHandler() {
    setChecked(!checked);
    if (!checked) {
      dispatch(setColor(color));
    } else {
      dispatch(removeColor(color));
    }
  }
  useEffect(() => {
    dispatch(clearColors());
  }, [dispatch]);

  return (
    <div>
      <div
        style={{
          background: "#E8E8E8",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 10,
          marginBottom: 10,
          padding: 3,
          width: 120,
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: 4,
        }}
      >
        <Checkbox checked={checked} onChange={changeHandler}></Checkbox>
        <h4 style={{ marginTop: 0 }}>{color.name}</h4>
      </div>
    </div>
  );
}

export default ColorItem;
