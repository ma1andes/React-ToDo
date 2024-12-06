import React from 'react';
import TodoButton from '../UI/TodoButton/TodoButton';

function ButtonSend({ onAddTodoItem }) {
    return (
        <TodoButton classString={"btn btn-primary"} onClick={onAddTodoItem}>  ➤ </TodoButton>
    );
}
export default ButtonSend;