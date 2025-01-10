import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  searchTodos: [],
  incompleteTodos: [],
  completeTodos: [],
  option: "all",
  isSearching: false,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      const todo = {
        id: nanoid(),
        task: action.payload,
        complete: false,
        incomplete: true,
      };
      state.todos.push(todo);
    },
    removeToDo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    selectedFilterOption: (state, action) => {
      state.option = action.payload;
      if (state.option === "complete") {
        state.completeTodos = state.todos.filter((todo) => todo.complete);
      } else if (state.option === "incomplete") {
        state.incompleteTodos = state.todos.filter((todo) => todo.incomplete);
      }
    },
    completeToDo: (state, action) => {
      console.log("complte todo");
      state.todos.forEach((todo) => {
        if (todo.id === action.payload) {
          todo.complete = true;
          todo.incomplete = false;
        }
      });
    },
    incompleteToDo: (state, action) => {
      console.log("incomplte todo");
      state.todos.forEach((todo) => {
        if (todo.id === action.payload) {
          todo.incomplete = true;
          todo.complete = false;
        }
      });
    },
    markAllAsCompleteToDo: (state) => {
      state.todos.forEach((todo) => {
        todo.complete = true;
        todo.incomplete = false;
      });
    },
    searchToDo: (state, action) => {
      if (action.payload) {
        state.isSearching = true;
        state.searchTodos = state.todos.filter(
          (todo) =>
            todo.task.toLowerCase().includes(action.payload.toLowerCase()) &&
            (state.option === "all" ||
              (state.option === "complete" && todo.complete) ||
              (state.option === "incomplete" && todo.incomplete))
        );
      } else {
        state.isSearching = false;
      }
    },
    editToDo: (state, action) => {
      const editedTask = action.payload;
      if (editedTask.task) {
        state.todos.forEach((todo) => {
          if (todo.id === editedTask.id) {
            todo.task = editedTask.task;
          }
        });
      }
    },
  },
});

export const {
  addToDo,
  removeToDo,
  selectedFilterOption,
  completeToDo,
  incompleteToDo,
  markAllAsCompleteToDo,
  searchToDo,
  editToDo,
} = todoSlice.actions;

export default todoSlice.reducer;
