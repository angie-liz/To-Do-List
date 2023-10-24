import styles from './styles.module.scss';
import '../../styles/themes.scss';

function ButtonChange({ onClick }, theme){
    function handleClick(){
        onClick();
    }

    return(
        <button className={` ${styles.button} ${theme}`} onClick={handleClick}>
            <i className={styles.icon}></i>

        </button>
    )
}

export default ButtonChange;