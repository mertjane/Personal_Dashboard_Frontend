import { createSlice } from "@reduxjs/toolkit";
import { fetchTodos } from "./services";

const initialState = {
  todoList: {
    today: [],
  },
  status: "idle",
  error: null,
};

export const todoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = action.payload;
      return {
        ...state,
        todoList: {
          ...state.todoList[0],
          today: [...state.todoList[0].today, newTodo],
        },
      };
    },
    moveTodoToDone: (state, action) => {
      const { selectedTodo } = action.payload;
      const updatedToday = state.todoList[0].today.filter(
        (todo) => todo !== selectedTodo
      );
      const updatedDone = [...state.todoList[0].done, selectedTodo];
      const updatedTodoList = {
        ...state.todoList,
        today: updatedToday,
        done: updatedDone,
      };
      return {
        ...state,
        todoList: updatedTodoList,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.todoList = action.payload;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    });
  },
});

export const { addTodo, moveTodoToDone } = todoReducer.actions;
export default todoReducer.reducer;
