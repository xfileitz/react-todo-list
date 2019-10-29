import React from "react";
//import logo from "./logo.svg";
//import './App.css';
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
//show ingo
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <TodoInput></TodoInput>
          <TodoList></TodoList>
        </div>
      </div>
    </div>
  );
}

export default App;
