import { useState } from 'react';
import '../../styles/App.css'

function NewTask({onAddTask}){
  const [task, setTask] = useState('');

  function handleClick(){
    event.preventDefault();
    if(task.trim()!=''){
      onAddTask(task);
      setTask('');
    }
  }

    return(
        <form className="new-task">
          <input
            type="text"
            id="taskInput"
            placeholder="Write your task here!"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button type='submit' id="addButton" onClick={handleClick}>Add</button>
        </form>
    )
}

export default NewTask;