import { createSlice } from "@reduxjs/toolkit";
import { fetchCountries, fetchCities } from "./services";

export const locationReducer = createSlice({
  name: "location",
  initialState: {
    countryList: [],
    cityList: [],
    status: "idle",
    error: null,
  },
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.countryList = action.payload;
    });
    builder.addCase(fetchCountries.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    });
    builder.addCase(fetchCities.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchCities.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.cityList = action.payload;
    });
    builder.addCase(fetchCities.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    });
  },
});

// export const { } = userReducer.actions;
export default locationReducer.reducer;
