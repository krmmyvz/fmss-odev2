import { useState, useEffect } from 'react'
import List from './List';
import Form from './Form';
import './styles.css'
import Header from './Header';




function TodoApp() {
  const [tasks, setTasks] = useState(() => {
    // LocalStorage'dan verileri alır
    const savedTasks = localStorage.getItem('tasks');

    if (savedTasks) {
      return JSON.parse(savedTasks);
    } else {
      return [{
        task_name: "Welcome to To Do App!",
        status: false
      },
      {
        task_name: "Let's add a task to handle!",
        status: false
      },
      {
        task_name: "Your tasks won't forget you even if you close your browser!",
        status: true
      }
      ];
    }
  });

  // Veriler her güncellendiğinde LocalStorage'a kaydeder
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <Header /> {/*Header bileşenini çağırır*/}
      <List setDone={setTasks} tasks={tasks} /> {/*List bileşenini çağırır ve props olarak setTasks ve tasks değerlerini geçirir*/}
      <Form addTask={setTasks} tasks={tasks} /> {/*Form bileşenini çağırır ve props olarak setTasks ve tasks değerlerini geçirir*/}
    </>
  )
}

export default TodoApp