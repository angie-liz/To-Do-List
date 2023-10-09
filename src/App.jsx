import './styles/App.css'
import { useState } from 'react'
import TaskList  from './components/TaskList/TaskList'
import './components/Radio/Radio'
import Radio from './components/Radio/Radio'
import NewTask  from './components/NewTask/NewTask'

function App() {

  const [tasks, setTasks] = useState([
    {id:1, value: "Primer tarea"},
    {id:2, value: "Segunda tarea"}
  ]);

  function addTask(newTask) {
    const newTasks = [...tasks, { id: Date.now(), value: newTask }];
    setTasks(newTasks);
  }

  function deleteTask(taskId){
    const newTaskList = tasks.filter(t => t.id != taskId);
    setTasks(newTaskList);
  }

  return (
    <>
      <Radio/>
      <main>
        <header>Angie's To-Do List</header>
        <NewTask onAddTask={addTask} />
        <TaskList tasks={tasks} action={deleteTask}/>
      </main>
    </>
  )
}

export default App
