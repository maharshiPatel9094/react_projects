import {createContext,useContext} from React;

export const TodoContext = createContext({
    // properties
    todos: [
        {
            id:1,
            todo:"Todo msg",
            completed: false,
        }
    ],
    // functions
    // functions definations are written in the app.jsx
    // all the functions that you need for the app we will define them here and there defination will be wriitten in app.jsx
    addTodo: (todo) => {},
    updateTodo: (todo,id) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
