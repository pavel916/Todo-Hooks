import React, { useState } from 'react'

const NewTaskForm = ({setTodoData, todoData, leftTodos, setLefttodos,setCounter1, setFlag}) => {
  

  const [label, setLabel] = useState('')
  const [labelMin, setLabelMin] = useState('')
  const [labelSec, setLabelSec] = useState('')

  function onLabelSubmit(e) {
    e.preventDefault()
    if(label)
      setTodoData(
        [...todoData, {
          id: Math.random(1, 500),
          name: label,
          done: true,
          min: labelMin,
          sec: labelSec,
        // counter1: Number(labelMin * 60 + Number(labelSec))
        }]
      )
    setCounter1(Number(labelMin * 60 + Number(labelSec)))
    setFlag(true)
    setLabel('')
    setLabelMin('')
    setLabelSec('')
    setLefttodos(leftTodos + 1)
  }


  return (
    <form className='new-todo-form' onSubmit={onLabelSubmit}>
      <input
        className='new-todo'
        placeholder='What needs to be done?'
        value={label}
        onChange={(e) => setLabel(e.target.value)}
      />
      <input
        className='new-todo-form__timer'
        placeholder='Min'
        value={labelMin}
        onChange={(e) => setLabelMin(e.target.value)}
      />
      <input
        className='new-todo-form__timer'
        placeholder='Sec'
        value={labelSec}
        onChange={(e) => setLabelSec(e.target.value)}
      />
      <button  onClick={onLabelSubmit} />
    </form>
  )
}



export default NewTaskForm