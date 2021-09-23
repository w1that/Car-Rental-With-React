import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getBrands = createAsyncThunk(
  'brands/getBrands',
  async()=>{
    const response = await axios.get("https://springrestapi-carrental.herokuapp.com/api/brands/getAll")
    return response.data.data
  }
)

export const filterSlice = createSlice({
  name: "filterSlice",
  initialState: {
    isDropped: false,
    minPrice: 0,
    maxPrice: 0,
    colors: [],
    brands:[],
    filterButtonPressed: false,
  },
  reducers: {
    setIsDropped: (state) => {
      state.isDropped = true;
    },
    setIsNotDropped: (state) => {
      state.isDropped = false;
    },
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setColor: (state, action) => {
      state.colors.push(action.payload);
    },
    removeColor: (state, action) => {
      state.colors.splice(state.colors.indexOf(action.payload), 1);
    },
    clearColors: (state) => {
      state.colors = [];
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    clearPrices:(state)=>{
      state.maxPrice=0
      state.minPrice=0
    }
    ,
    setFilterButtonPressed: (state) => {
      state.filterButtonPressed = true;
    },
    setFilterButtonUnpressed: (state) => {
      state.filterButtonPressed = false;
    },
  },
  extraReducers:{
    [getBrands.fulfilled] :(state,action)=>{
      state.brands = action.payload
    }
  }
});

export const {
  setIsDropped,
  setIsNotDropped,
  setMinPrice,
  setMaxPrice,
  setFilterButtonPressed,
  setFilterButtonUnpressed,
  setColor,
  removeColor,
  clearColors,
  clearPrices
} = filterSlice.actions;
export default filterSlice.reducer;
