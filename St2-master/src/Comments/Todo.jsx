import React,{useState} from 'react'
import DisplayTodos from './DisplayTodos'

const Todo=({ todos, onDelete })=> {
    
  return (
    <ol className='n'>
    {todos.map((todo, index) => (
      <DisplayTodos key={index} todo={todo} onDelete={onDelete} />
    ))}
  </ol>
  )
}

export default Todo