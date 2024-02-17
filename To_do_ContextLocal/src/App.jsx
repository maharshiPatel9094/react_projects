import { useEffect, useState } from "react";
import { TodoProvider } from "./context";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  // defining methods of todos
  const addTodo = (todo) => {
    // ...todo => this is called spreading the todo it resembles the other value of todo
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (todo, id) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  // ======================================================================local storage=============================================================
  // has main two items only getItem and setItem
  // local storage data is dent in the form of string so we have to convert it into json format
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);
// setItem takes two values key and value 
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])





  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <>
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">
              Manage Your Todos
            </h1>
            <div className="mb-4">{/* Todo form goes here */}</div>
            <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
            </div>
          </div>
        </div>
      </>
    </TodoProvider>
  );
}

export default App;
