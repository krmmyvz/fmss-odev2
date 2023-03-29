import React from 'react'

function List({ setDone, tasks }) {

  const handleCheckboxChange = (index) => {
    const updatedTasks = tasks.map((item, i) => {
      if (i === index) {
        return { ...item, status: !item.status };
      }
      return item;
    });
    setDone(updatedTasks);
  }

  const handleDeleteClick = (index) => {
    const updatedTasks = tasks.filter((item, i) => i !== index);
    setDone(updatedTasks);
  }


  return (

    <div id='lists' style={{ height: 'var(--container-height)' }}>
      <ul className='list'>
        {tasks.map((item, i) => (
          <li key={i}>
            <label className="todo-label">
              <input
                type='checkbox'
                checked={item.status}
                onChange={() => handleCheckboxChange(i)}
              />

              <i className="check"></i>

              <span>{item.task_name}</span>
              <button onClick={() => handleDeleteClick(i)}>Delete</button>
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List