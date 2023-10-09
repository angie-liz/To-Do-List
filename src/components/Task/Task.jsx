import '../../styles/App.css'

function Task(props){
    function handleClick(){
        props.onDeleteTask(props.id);
    }

    return(
        <div className='task'>
            <input type="checkbox" />
            <label htmlFor="checkbox"> {props.value} </label>
            <button id='delete' onClick={handleClick}></button>
          </div>
    )
}

export default Task;