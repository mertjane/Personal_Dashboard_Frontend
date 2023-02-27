import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Register
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (user, { rejectWithValue }) => {
    try {
      const token = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/register`,
        {
          id: user.id,
          name: user.name,
          email: user.email,
          country: user.country,
          city: user.city,
          password: user.password,
          confirmPassword: user.confirmPassword,
        }
      );

      localStorage.setItem("token", token.data);
      return token.data;
    } catch (err) {
      console.log(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

// Login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (user, { rejectWithValue }) => {
    try {
      const token = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login`,
        {
          id: user.id,
          email: user.email,
          password: user.password,
        }
      );
      localStorage.setItem("token", token.data);
      return token.data;
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchCountries = createAsyncThunk(
  "location/getCountries",
  async (countries, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/locations/countries`,
        countries
      );
      return res.data;
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchCities = createAsyncThunk(
  "location/getCities",
  async (cities, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/locations/cities`,
        cities
      );
      return res.data;
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error.response.data);
    }
  }
);
