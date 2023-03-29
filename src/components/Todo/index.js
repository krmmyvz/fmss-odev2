import { useState } from 'react'
import List from './List';
import Form from './Form';
import './styles.css'
import Header from './Header';


function TodoApp() {
    const [tasks, setTasks] = useState([{
        task_name: "Learn React",
        status: false
    }]);

    return (
        <div >
            <Header />
            <List setDone={setTasks} tasks={tasks} />
            <Form addTask={setTasks} tasks={tasks} />
        </div>
    )
}

export default TodoApp