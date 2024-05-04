import React ,{useState}from 'react'
import AddTodo from './AddTodo'
import Todo from './Todo'
import './Comment.css'

const Comment=()=> {
  const[todos,setTodos]=useState([]);
const handler=(todo)=>{
   
    setTodos([...todos,todo])
  };
  const handleDeleteTodo = (todoToDelete) => {
    setTodos(todos.filter(todo => todo !== todoToDelete));
  };
  return (
    <div>
        <br></br>
      <AddTodo onAddTodo={handler}/>
      <Todo todos={todos} onDelete={handleDeleteTodo}/>
    </div>
  )
}

export default Comment