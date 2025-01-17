import React from 'react'
import { useState } from "react"

export default function TodoInput(props) {

  const {todoValue, setTodoValue, handleAddTodos} = props
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (todoValue) {
        handleAddTodos(todoValue)
        setTodoValue('');
      }
    }
  }

  return (
    <header>
      <input value={todoValue} onChange={(e) => {setTodoValue(e.target.value)}} onKeyDown={handleKeyDown} placeholder='Enter todo...' />
      <button onClick={() => {
        if(todoValue) {handleAddTodos(todoValue)}
        setTodoValue('')
      }}>Add</button>
    </header>
  )
}
