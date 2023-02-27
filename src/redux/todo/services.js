import { createAsyncThunk } from "@reduxjs/toolkit";
import { addTodo, moveTodoToDone} from "./todoReducer";
import axios from "axios";

export const fetchTodos = createAsyncThunk(
  "todos/getTodoList",
  async ({ auth }) => {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/todos/${auth.id}`
    );
    return res.data;
  }
);

export const addNewTodo = async ({auth, newTodo}, dispatch) => {
  try {
    const payload = {
      id: auth.id,
      newTodo
    }
    const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/todos`, payload);
    dispatch(addTodo(res.data));
  } catch (error) {
    console.log(error)
  }
};

export const moveToDone = async ({auth, todo}, dispatch) => {
  try {
    const payload = {
      id: auth.id,
      todo,
    }
    const res = await axios.put(`${process.env.REACT_APP_BASE_URL}/todos/done`, payload);
    dispatch(moveTodoToDone(res.data));
  } catch(error){
    console.log(error)
  }
}


