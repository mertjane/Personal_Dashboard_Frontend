import { createSlice } from "@reduxjs/toolkit";
import { getUser, fetchWeather, fetchQuotes, fetchMantras, fetchImg} from "./services";

export const userReducer = createSlice({
  name: "user",
  initialState: {
    currentUser: {},
    forecast: [],
    quotes: [],
    mantras: [],
    background: [],
    status: "idle",
    error: null,
  },
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.currentUser = action.payload[0];
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    });
    builder.addCase(fetchWeather.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.forecast = action.payload;
    });
    builder.addCase(fetchWeather.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    });
    builder.addCase(fetchQuotes.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchQuotes.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.quotes = action.payload;
    });
    builder.addCase(fetchQuotes.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    });
    builder.addCase(fetchImg.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchImg.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.background = action.payload;
    });
    builder.addCase(fetchImg.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    });
    builder.addCase(fetchMantras.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchMantras.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.mantras = action.payload;
    });
    builder.addCase(fetchMantras.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    });
  },
});

// export const { } = userReducer.actions;
export default userReducer.reducer;
