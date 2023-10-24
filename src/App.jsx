import styles from './styles/styles.module.scss'
import { Fragment, useState } from 'react'
import TaskList  from './components/TaskList'
import NewTask  from './components/NewTask'
import Divider from './components/Divider'
import ButtonChange from './components/ButtonChange'
import './styles/themes.scss';

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

  const [theme, setTheme] = useState('dark');

  function changeTheme(){
    if(theme == 'light'){
      setTheme(`dark`);
    } else {
      setTheme('light');
    }
  }


  return (
      <main className={`${theme} ${styles.main}`}>
        <div className={styles.header}>
        <header>ToDo List</header>
        <ButtonChange onClick={changeTheme} theme={theme}></ButtonChange>
        </div>
        <NewTask onAddTask={addTask} theme={theme}/>
        <Divider></Divider>
        <TaskList tasks={tasks} action={deleteTask} theme={theme} />
      </main>
  )
}

export default App
