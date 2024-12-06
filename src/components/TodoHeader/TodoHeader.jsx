import React from "react";
import ButtonSend from "../ButtonSend/ButtonSend";
import styles from './TodoHeader.module.css'

function TodoHeader({ taskInput, setTaskInput, addTask, handleKeyDown }) {
    return (
        <div className={styles.todoHeader}>
            <input className={styles.taskInput}
                type="text"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Введите задачу"
            />
            <ButtonSend onAddTodoItem={addTask}></ButtonSend>
        </div>
    );
}

export default TodoHeader;  