import Task from '../Task/Task.jsx';
import '../../styles/App.css'

function TaskList(props){


    function deleteTask(task){
        props.action(task);
    }

    const taskItems = props.tasks.map(
        task => <Task key={task.id} id={task.id} value={task.value} onDeleteTask={deleteTask}/>
    )

    let reversersedTaks = taskItems.reverse();

    if(reversersedTaks.length==0){
        return(
            <p>No hay tareas!</p>
        )
    }else{
        return(
            <div className='taskList'>
              {reversersedTaks}
            </div>
        )
    }
}

export default TaskList;