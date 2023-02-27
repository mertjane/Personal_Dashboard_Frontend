import { configureStore } from "@reduxjs/toolkit";
import { loadUser } from "./auth/authReducer";
import locationReducer from "./auth/locationReducer";
import authReducer from "./auth/authReducer";
import userReducer from "./user/userReducer";
import todoReducer from "./todo/todoReducer";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    location: locationReducer,
    todos: todoReducer,
  },
});

store.dispatch(loadUser(null));
export default store;
