import Task from './Task';
import styles from './styles.module.scss'

function TaskList(props){


    function deleteTask(task){
        props.action(task);
    }

    const taskItems = props.tasks.map(
        task => <Task key={task.id} id={task.id} value={task.value} onDeleteTask={deleteTask} theme={props.theme}/>
    )

    let reversersedTaks = taskItems.reverse();

    if(reversersedTaks.length==0){
        return(
            <p>No hay tareas!</p>
        )
    }else{
        return(
            <div className={ `${styles.taskList} ${props.theme}`}>
              {reversersedTaks}
            </div>
        )
    }
}

export default TaskList;