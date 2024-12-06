import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import styles from './TodoList.module.css'


function TodoList({ list, taskComplete, removeTask }) {

    return (
        <ul className={styles.listgroup}>
            {list.map(todo => {
                return (<TodoItem key={todo.id} todo={todo} removeTask={removeTask} taskComplete={taskComplete}/>)
            })}
        </ul>
    )
}


export default TodoList;