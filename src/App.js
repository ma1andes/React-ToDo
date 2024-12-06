import React, { useState } from "react";
import './App.css';
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList/TodoList";

function App() {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState("");

    // Функция для добавления задачи
    const addTask = () => {
        if (taskInput.trim() === "") return;
        setTasks([...tasks, { id: Date.now().toString(), description: taskInput }]);
        setTaskInput("");
    };

    // Функция для удаления задачи
    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    // Обработчик для нажатия клавиши Enter
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    };

    const taskComplete = (id) => {
        setTasks((prevTasks) =>
            prevTasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    return (
        <>
            <TodoHeader
                taskInput={taskInput}
                setTaskInput={setTaskInput}
                addTask={addTask}
                handleKeyDown={handleKeyDown}
            />
            <TodoList 
            list={tasks} 
            removeTask={removeTask} 
            taskComplete={taskComplete}
            />
        </>
    );
}

export default App;