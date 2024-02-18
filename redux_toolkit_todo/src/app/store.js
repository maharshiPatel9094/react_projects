// creating a store is our first step 
import {configureStore} from "@reduxjs/toolkit";

// add our reducers 
import todoReducer from "../features/todo/todoSlice"

// it takes object 
export const store = configureStore({
    reducer: todoReducer
})