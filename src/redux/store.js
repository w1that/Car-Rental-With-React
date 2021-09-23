import { configureStore } from "@reduxjs/toolkit";
import carSlice from "./carSlice/carSlice";
import colorSlice from "./colorSlice/colorSlice";
import customerSlice from "./customerSlice/customerSlice";
import filterSlice from "./filterSlice/filterSlice";
import rentalSlice from "./rentalSlice/rentalSlice";
import searchBarSlice from "./searchBarSlice/searchBarSlice";

export default configureStore({
  reducer: {
    cars: carSlice,
    color: colorSlice,
    filter: filterSlice,
    search: searchBarSlice,
    customer: customerSlice,
    rental:rentalSlice,
    

  },
});
