import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await axios.get("http://localhost:5000/todos");
    setTodos(res.data);
  };

  const addTodo = async () => {
    await axios.post("http://localhost:5000/todos", { text });
    setText("");
    fetchTodos();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>MERN DevOps To-Do App</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
