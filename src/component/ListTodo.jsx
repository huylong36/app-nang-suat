import React from "react";
import { useSnackbar } from "notistack";
export const ListTodo = ({ todos, setTodos , setEditTodos }) => {
const { enqueueSnackbar } = useSnackbar();
  const handleDelete = ({ id }) => {
      console.log('id' , {id});
    let person = prompt("Nhập ok để xóa");
    if(person.trim().toLocaleLowerCase() === "ok"){
        setTodos(todos.filter((todo) => todo.id !== id));
        enqueueSnackbar("Xóa thành công ! ", {
            variant: "success",
          })
    }
  };

  const handleEdit = ({ id }) =>{
    const findTodo = todos.find((todo) =>todo.id === id)
    setEditTodos(findTodo)
  }
  return (
    <div>
      {todos.map((todo, key) => (
        <li key={key} style={{listStyle:"none"}}>
          {todo.title}
          <button style={{margin:'7px'}} onClick={() =>handleEdit(todo)}>edit</button>
          <button style={{margin:'7px'}}  onClick={() =>handleDelete(todo)}>delete</button>
        </li>
      ))}
    </div>
  );
};
