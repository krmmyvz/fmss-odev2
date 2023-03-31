import { useState, useEffect } from 'react'
import { MdDelete, MdDeleteOutline, MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';

// Form bileşeni oluşturuyoruz ve setDone, tasks props'larını alıyoruz
function List({ setDone, tasks }) {

   // Fare, butonun üzerindeyken göstermek için durum değişkeni
   const [isHovered, setIsHovered] = useState(false);

  // Fare delete butonun üstündeyken değişkeni true,
  // butondan ayrıldığında false yapar
  const handleMouseEnter = () => {
    setIsHovered(true);
  }
  const handleMouseLeave = () => {
    setIsHovered(false);
  }

   // Görevin tamamlandığını gösteren checkbox işaretini değiştirir ve günceller
  const handleCheckboxChange = (id) => {
    const updatedTasks = tasks.map((item) => {
      if (item.id === id) {
        return { ...item, status: !item.status };
      }
      return item;
    });
    setDone(updatedTasks);    
    setFilteredTasks(updatedTasks);
  }

  // Görevi listeden siler ve günceller
  const handleDeleteClick = (id) => {
    const updatedTasks = tasks.filter((item) => item.id !== id);
    setDone(updatedTasks);
    setFilteredTasks(updatedTasks);
  }

  // Filtrelenmiş görevleri listelemek için durum değişkeni
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  // Tüm görevleri listeler
  const handleAllTasks = () => {
    setFilteredTasks(tasks);
  };

  // Tamamlanmamış görevleri filtreler ve listeler
  const handleActiveTasks = () => {
    const activeTasks = tasks.filter(task => !task.status);
    setFilteredTasks(activeTasks);
  };
  // Tamamlanmış görevleri filtreler ve listeler
  const handleCompletedTasks = () => {
    const completedTasks = tasks.filter(task => task.status);
    setFilteredTasks(completedTasks);
  };

  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

  return (
    <>
      <div id='lists'>
      {/* Filtreleme butonları */}
      <div className='filter-container'>
        <button onClick={handleAllTasks}>All<span>{tasks.length}</span></button>
        <button onClick={handleActiveTasks}>Active<span>{tasks.filter(task => !task.status).length}</span></button>
        <button onClick={handleCompletedTasks}>Completed<span>{tasks.filter(task => task.status).length}</span></button>
      </div>
        {/* Görev listesi */}
        <ul className='list'>
          {filteredTasks.map((item, i) => (
            <li key={i}  >

              {/* Görev etiketi, tamamlanmış mı, değil mi? */}
              <label className="todo-label">
                <input
                  type='checkbox'
                  checked={item.status}
                  onChange={() => handleCheckboxChange(item.id)}

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

                {/* Görevi silmek için buton */}
                <button className='delete-button' onClick={() => handleDeleteClick(item.id)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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