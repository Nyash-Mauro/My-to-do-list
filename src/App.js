import React, { useState } from "react";
import "./App.css";
//Importing components
import Form from "./components/Form";
import ToDolist from "./components/ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  connst [RadioNodeList,setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Maurice Todo list{inputText}</h1>
      </header>
      <Form setInputText={setInputText} />
      <ToDolist />
    </div>
  );
}

export default App;
