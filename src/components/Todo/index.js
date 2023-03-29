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
            task_name: "To Do Uygulamasına Hoş Geldin!",
            status: false
          },
          {
            task_name: "Aşağıdan kendine yeni bir görev ekleyebilirsin!",
            status: false
          },
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