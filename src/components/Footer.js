import React from 'react'

import TasksFilter from './TasksFilter'

const Footer = ({leftTodos, clearCompletedTasks, todoData, setTodoData, change}) => {




  return (
    <footer className="footer">
      <span className="todo-count">{leftTodos} items left</span>
      <TasksFilter todoData={todoData} setTodoData={setTodoData} change={change}/>
      <button onClick={() => clearCompletedTasks()} className="clear-completed">Clear completed</button>
    </footer>
  )
}

export default Footer
