import React, { useState } from "react";
import TodoItemButton from '../TodoItemButton/TodoItemButton';

function TodoItem({ todo, removeTask, taskComplete }) {
    const [isCompleted, setIsCompleted] = useState(false); 

    const handleComplete = () => {
        setIsCompleted(!isCompleted);
        taskComplete(todo.id); 
    };

    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            <span className={isCompleted ? 'text-decoration-line-through' : ''}>
                {todo.description}
            </span>
            <div className='btn-group btn-group-sm'>
                <TodoItemButton
                    status={"success"}
                    onClick={handleComplete}>🗸</TodoItemButton>

                <TodoItemButton 
                    status={"decline"} 
                    onClick={() => removeTask(todo.id)}>×</TodoItemButton>
            </div>
        </li>
    );
}

export default TodoItem;
