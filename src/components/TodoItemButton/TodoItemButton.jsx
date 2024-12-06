import React from 'react';
import TodoButton from '../UI/TodoButton/TodoButton';
import './TodoItemButton.module.css'

function TodoItemButton({ onClick, status, children }) {
    const className = "btn " + (status === "success" ? "btn-success" : "btn-danger");
    const classString = "btn btn-primary " + className
    

    return (
        <TodoButton classString={classString} onClick={onClick}>{children}</TodoButton>
    );
}

export default TodoItemButton