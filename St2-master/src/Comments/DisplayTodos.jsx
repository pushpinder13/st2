import React from 'react'

const DisplayTodos=({ todo, onDelete })=> {
  return (
    <li className='tot'>
    {todo.txt}
    <button className='com' onClick={() => onDelete(todo)}>Delete</button>
  </li>
  )
}

export default DisplayTodos