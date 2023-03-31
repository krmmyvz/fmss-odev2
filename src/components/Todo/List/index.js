import { useState } from 'react'
import { MdDelete, MdDeleteOutline, MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';

function List({ setDone, tasks }) {

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  }
  const handleMouseLeave = () => {
    setIsHovered(false);
  }

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
    const updatedTasks = tasks.filter((item,i) => i !== index);
    setDone(updatedTasks);
  }

  const [filteredTasks, setFilteredTasks] = useState(tasks); // default filter: show all tasks

  const handleAllTasks = () => {
    setFilteredTasks(tasks);
  };

  const handleActiveTasks = () => {
    const activeTasks = tasks.filter(task => !task.status);
    setFilteredTasks(activeTasks);
  };

  const handleCompletedTasks = () => {
    const completedTasks = tasks.filter(task => task.status);
    setFilteredTasks(completedTasks);
  };

  return (
    <>
      <div id='lists'>
      <div className='filter-container'>
        <button onClick={handleAllTasks}>All</button>
        <button onClick={handleActiveTasks}>Active</button>
        <button onClick={handleCompletedTasks}>Completed</button>
      </div>
        <ul className='list'>
          {tasks.map((item, i) => (
            <li key={i}  >
              <label className="todo-label">
                <input
                  type='checkbox'
                  checked={item.status}
                  onChange={() => handleCheckboxChange(i)}

                />
                {item.status ? (
                  <div className='md-filled' >
                    <MdCheckBox />
                  </div>

                ) : (
                  <div className='md-outline'>
                    <MdCheckBoxOutlineBlank />
                  </div>

                )}

                <span>{item.task_name}</span>
                <button className='delete-button' onClick={() => handleDeleteClick(i)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  {isHovered ? <MdDelete /> : <MdDeleteOutline />}
                </button>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </>

  )
}

export default List