import React, { useEffect, useState } from 'react'

import './App.css'

import NewTaskForm from './components/NewTaskForm'
import Footer from './components/Footer'
import TaskList from './components/TaskList'

const App = () => {
  const [todoData, setTodoData] = useState([
    {
      id: 1,
      name: 'Completed task',
      done: true,
      counter1: 9,
    },
    {
      id: 2,
      name: 'Editing task',
      done: true,
      counter1: 5,
    },
    {
      id: 3,
      name: 'Active task',
      done: true,
      counter1: 7,
    },
  ])

  const [counter1, setCounter1] = useState(0)

  const [leftTodos, setLefttodos] = useState(3)

  const [filtered, setFiltered] = useState(todoData)

  const [flag, setFlag] = useState(false)

  // console.log(counter1)

  useEffect(() => {
    setFiltered(todoData)
  }, [todoData])

  const deleteTask = (id) => {
    let newTodo = [...todoData].filter((item) => item.id !== id)
    setTodoData(newTodo)
    setLefttodos(leftTodos - 1)
  }

  const clearCompletedTasks = () => {
    let newTodo = [...todoData].filter((item) => item.done === true)
    setTodoData(newTodo)
    setLefttodos(0)
  }

  function change(done) {
    if (done === 'all') {
      setFiltered(todoData)
    } else {
      let newTodo = [...todoData].filter((item) => item.done === done)
      setFiltered(newTodo)
    }
  }

  return (
    <section className='todoapp'>
      <header className='header'>
        <h1>todos</h1>
        <NewTaskForm
          setTodoData={setTodoData}
          todoData={todoData}
          leftTodos={leftTodos}
          setLefttodos={setLefttodos}
          setCounter1={setCounter1}
          flag={flag}
          setFlag={setFlag}
        />
      </header>
      <section className='main'>
        <TaskList
          deleteTask={deleteTask}
          todoData={todoData}
          setTodoData={setTodoData}
          filtered={filtered}
          counter1={counter1}
          flag={flag}
          setFlag={setFlag}
          setLefttodos={setLefttodos}
          leftTodos={leftTodos}
        />
        <Footer
          todoData={todoData}
          setTodoData={setTodoData}
          leftTodos={leftTodos}
          setLefttodos={setLefttodos}
          clearCompletedTasks={clearCompletedTasks}
          change={change}
        />
      </section>
    </section>
  )
}

export default App
