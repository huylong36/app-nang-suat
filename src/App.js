import { useState } from "react";
import Form from "./component/Form";
import { ListTodo } from "./component/ListTodo";

function App() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])
  const [editTodos, setEditTodos] = useState(null)
  return (
    <div className="App" style={{width:'500px' , margin:'auto'  , background:'orange' , textAlign:'center' , padding:'20px'}}>
     <Form
      input={input}
      setInput={setInput}
      todos={todos}
      setTodos={setTodos}
      editTodos={editTodos}
      setEditTodos={setEditTodos}
     />
     <ListTodo todos={todos} setTodos={setTodos}  setEditTodos={setEditTodos} />
    </div>
  );
}

export default App;
