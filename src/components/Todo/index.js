import { useState, useEffect } from 'react'
import List from './List';
import Form from './Form';
import './styles.css'
import Header from './Header';




function TodoApp() {
    const [tasks, setTasks] = useState(() => {
        // LocalStorage'dan verileri al
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
            status: false
          }
        ];
        }
      });
    
      // Veriler her güncellendiğinde LocalStorage'a kaydet
      useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }, [tasks]);


    return (
        <div >
            <Header />
            <List setDone={setTasks} tasks={tasks} />
            <Form addTask={setTasks} tasks={tasks} />
        </div>
    )
}

export default TodoApp