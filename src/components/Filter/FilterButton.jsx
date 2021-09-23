import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { toast } from "react-toastify";
import { setFilterButtonPressed } from "../../redux/filterSlice/filterSlice";

function FilterButton() {
  const dispatch = useDispatch();
  const history = useHistory()
  const maxPrice = useSelector((state) => state.filter.maxPrice);
  const minPrice = useSelector((state) => state.filter.minPrice);
  const colors = useSelector((state) => state.filter.colors);

  function clickFilterHandler() {
    if(maxPrice>0 || minPrice>0|| colors.length>0){
      dispatch(setFilterButtonPressed());
      history.push("/filter")
    }
    else{
      toast.dark('You selected no filter', {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
  }

  return (
    
      <button onClick={clickFilterHandler} className="filterButton">
        Filter
      </button>
    
  );
}

export default FilterButton;
