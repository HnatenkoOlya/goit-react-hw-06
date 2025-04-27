import { createSlice } from "@reduxjs/toolkit";

const sliceFilter = createSlice({
    name: "filters",
    initialState: {
        name: "",
    },
    reducers: {
        filterChange(state, action) {
            state.name = action.payload
           /* return {
                ...state,
                filters: {
                  name: action.payload,
                },
              };*/
        },
    },
});
export const {filterChange} = sliceFilter.actions;
export default sliceFilter.reducer;
  