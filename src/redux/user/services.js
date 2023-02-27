import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk("user/getUser", async ({ auth }) => {
  const res = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/users/${auth.id}`
  );
  return res.data;
});

export const fetchQuotes = createAsyncThunk("user/getQuotes", async () => {
  const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/quotes`);
  return res.data;
});

export const fetchMantras = createAsyncThunk("user/getMantras", async () => {
  const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/mantra`);
  return res.data;
});

export const fetchImg = createAsyncThunk("user/getBackground", async () => {
  const res = await axios.get(
    `https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_IMAGE_KEY}&query=nature&orientation=landscape`
  );
  return res.data;
});

export const fetchWeather = createAsyncThunk(
  "user/getWeather",
  async ({ currentUser }) => {
    const res = await axios.get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${currentUser?.city?.city}?unitGroup=metric&key=${process.env.REACT_APP_WEATHER_KEY}&contentType=json`
    );
    return res.data;
  }
);
