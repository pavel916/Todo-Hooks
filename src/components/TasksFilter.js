import React from 'react'

const TasksFilter = ({change}) => {

  return(
    <ul className="filters">
      <li>
        <button onClick={()=> change('all')}>All</button>
      </li>
      <li>
        <button onClick={()=> change(true)}>Activ</button>
      </li>
      <li>
        <button onClick={()=> change(false)}>Completed</button>
      </li>
    </ul>
  )

}

export default TasksFilter
