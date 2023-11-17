import { Fragment } from 'react';
import styles from './styles.module.scss';
import '../../../styles/themes.scss';

function Task(props){
    function handleClick(){
        props.onDeleteTask(props.id);
    }

    return(
        <div className={`${styles.task} ${props.theme}`}>
            <div className={styles.checkLabel}>
            
            <input type="checkbox" checked={props.complete} className={`${styles.check} ${props.theme}`}/>
            <label className={`${styles.label} ${props.theme}`}>{props.value} </label>
            </div>
            <div className={styles.buttons}>
            <button  className={`${styles.copy} ${props.theme}`} ></button>
            <button className={`${styles.share} ${props.theme}`} ></button>
            <button id='delete' className={`${styles.delete} ${props.theme}`} onClick={handleClick}></button>
            </div>
          </div>
    )
}

export default Task;