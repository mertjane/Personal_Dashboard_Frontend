import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser } from "./services";
import jwtDecode from "jwt-decode";

const initialState = {
  token: localStorage.getItem("token"),
  id: "",
  email: "",
  registerStatus: "idle",
  registerError: null,
  loginStatus: "idle",
  loginError: null,
  userLoaded: false,
};

export const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUser(state) {
      const token = state.token;

      if (token) {
        const user = jwtDecode(token);
        return {
          ...state,
          token,
          id: user.id,
          email: user.email,
          userLoaded: true,
        };
      }
    },
    logoutUser(state) {
      localStorage.removeItem("token");

      return {
        ...state,
        token: "",
        id: "",
        email: "",
        userLoaded: false,
        registerStatus: "idle",
        registerError: null,
        loginStatus: "idle",
        loginError: null,
      };
    },
  },
  extraReducers: (builder) => {
    // USER REGISTER
    builder.addCase(registerUser.pending, (state) => {
      return { ...state, registerStatus: "pending" };
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);

        return {
          ...state,
          token: action.payload,
          id: user.id,
          email: user.email,
          password: user.password,
          confirmPassword: user.confirmPassword,
          registerStatus: "success",
        };
      } else return state;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      return {
        ...state,
        registerStatus: "rejected",
        registerError: action.payload,
      };
    });

    // USER LOGIN
    builder.addCase(loginUser.pending, (state) => {
      return { ...state, loginStatus: "pending" };
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);
        return {
          ...state,
          token: action.payload,
          id: user.id,
          email: user.email,
          password: user.password,
          loginStatus: "success",
        };
      } else return state;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      return {
        ...state,
        loginStatus: "rejected",
        loginError: action.payload,
      };
    });
  },
});

export const { loadUser, logoutUser } = authReducer.actions;
export default authReducer.reducer;
