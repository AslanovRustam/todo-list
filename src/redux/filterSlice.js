import { createSlice } from "@reduxjs/toolkit";
import { filterVariants } from "../helpers/helpers";

export const filterSlice = createSlice({
  name: "filter",
  initialState: filterVariants.all,
  reducers: {
    changeFilter: (_, { payload }) => {
      return payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export default filterSlice.reducer;
