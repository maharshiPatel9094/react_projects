// creating our slices
// nanoid main job is to generate the unique id thats it
import { createSlice, nanoid } from "@reduxjs/toolkit";

// initial state
// how our app will look at our initial state
const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

// crating our slice
// createSlice is a method and it take object
// slices also have names with a property name
// every slice has an initial state
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  // making reducers - property
  // reducers contain property and functions
  // in redux toolkit we also have to write the function defination which makes it diffrent from the context api which are state and actrion
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      }
      state.todos.push(todo)
    },
    removeTodo: (state,action) => {
        state.todos = state.todos.filter((todo) => todo.id != action.payload)
    },
  },
});

export const {addTodo, removeTodo} = todoSlice.actions

// add every reducre to the store because it needs all the reducers 
export default todoSlice.reducer
