import { useState } from "react";
import "./style.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleClick = () => {
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((todo, i) => index !== i);
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>TODO LIST</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button onClick={handleClick}>Add</button>
      </div>

      <div>
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <div key={index}>
              {todo}
              <button
                onClick={() => {
                  handleDelete(index);
                }}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No hay todos</p>
        )}
      </div>
    </>
  );
};

export default App;
