import { createSlice } from "@reduxjs/toolkit";

export const searchBarSlice = createSlice({
  name: "searchBarSlice",
  initialState: {
    inputText: "",
  },
  reducers: {
    setInputText: (state, action) => {
      state.inputText = action.payload;
    },
  },
});

export const { setInputText } = searchBarSlice.actions;
export default searchBarSlice.reducer;
