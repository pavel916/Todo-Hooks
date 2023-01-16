import React,{useState} from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'


import TaskDescription from './TaskDescription'

const TaskList = ({todoData, deleteTask,  setTodoData,  filtered, counter1, setFlag, setLefttodos, leftTodos}) => {

  const [isEditing, setIsEditing] = useState(null)
  const [editedValue, setEditedValue] = useState('')

  const date = formatDistanceToNow(Date.now(), { includeSeconds: true, addSuffix: true })

  function editTodo(id){
    setIsEditing(id)
  }

  function onSubmit(id){
    let newTodo = [...todoData].map((item) => {
      if(item.id === id) {
        item.name = editedValue
      }
      return item
    })
    setTodoData(newTodo)
    setIsEditing(null)
    setEditedValue('')
  }

  function onTaskClick(id){
    let newTodo = [...todoData].filter(item => {
      if(item.id === id) {
        item.done = !item.done
      } 
      if(item.done === false && item.id === id){
        console.log('done false')
        setLefttodos(leftTodos - 1)
      }
      if(item.done === true && item.id === id){
        setLefttodos((leftTodos) => leftTodos + 1)
      } 
      return item
    })
    setTodoData(newTodo)
  
    
  }

  return (
    <ul className='todo-list'>
      {filtered.map((task) => (
        <li className={task.done ? 'view' : 'completed'} key={task.id}>
          <input
            className='toggle'
            type='checkbox'
            onChange={() => onTaskClick(task.id)}
          />
          <label>
            <span className='title'>{task.name}</span>
            <TaskDescription  counter1={counter1} setFlag={setFlag}/>
            <span className='description'>{date}</span>
            <button className='icon icon-edit' onClick={() => editTodo(task.id)} />
            <button className='icon icon-destroy' onClick={() => deleteTask(task.id)}/>
          </label>
          {isEditing === task.id ? 
            <form >
              <input 
                type='text'
                value={editedValue}
                onChange={(e) => setEditedValue(e.target.value)}
              ></input>
              <button onClick={() => onSubmit(task.id)} >сохранить</button>
            </form> : null}
        </li>
      ))}
    </ul>
  )
}


export default TaskList
