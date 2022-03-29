import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const Form = ({
  input,
  setInput,
  todos,
  setTodos,
  editTodos,
  setEditTodos,
}) => {
    const [countTodo, setCountTodo] = useState(0)
  const changeInput = (e) => {
    setInput(e.target.value);
  };
  const updateTodo = (title, id) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id } : todo
    );
    setTodos(newTodo);
    setEditTodos("");
  };
  useEffect(() => {
    if (editTodos) {
      setInput(editTodos.title);
    } else {
      setInput("");
    }
  }, [editTodos, setInput]);
  const onFormSubmit = (event) => {
      if(!editTodos){
          setCountTodo(countTodo + 1)
      }
    event.preventDefault();
    if (!editTodos) {
      setTodos([...todos, { id: uuidv4(), title: input }]);
      setInput("");
    } else {
      updateTodo(input, editTodos.id);
    }
    localStorage.setItem('todo', input);
  };
  return (
    <div >
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          value={input}
          onChange={changeInput}
          placeholder="add todo"
          />
        <button type="submit">{editTodos ? " edit" : "add"}</button>
      </form>
          Số Công việc :{countTodo}
    </div>
  );
};

export default Form;
