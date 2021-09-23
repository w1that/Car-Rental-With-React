import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ColorService from "../../api/colorService";

const colorService = new ColorService();

export const getAllColors = createAsyncThunk(
  "colors/getAllColors",
  async () => {
    const response = await colorService.getAllColors();
    return response.data.data;
  }
);

export const colorSlice = createSlice({
  name: "color",
  initialState: {
    items: [],
  },
  reducers: {
    
  },
  extraReducers: {
    [getAllColors.fulfilled]: (state, action) => {
     state.items = action.payload;
    },
  },
});

export default colorSlice.reducer;
