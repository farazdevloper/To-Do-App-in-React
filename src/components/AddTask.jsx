import React, { useState, useEffect } from 'react'
import ShowTask from './ShowTask'
import todo_icon from '../assets/images/todo-icon.png'

const AddTask = () => {

    //Load Tasks from LocalStorage
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    const [taskTitle, setTaskTitle] = useState('');

    //Save Tasks to LocalStorage Whenever tasks change
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskTitle.trim() === "") return;

        setTasks([
            ...tasks,
            {
                id: Date.now(),
                title: taskTitle,
                completed: false
            }
        ]);

        setTaskTitle('');
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const toggleTask = (id) => {
        setTasks(
            tasks.map(task =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    };

    return (
        <div className="min-h-screen flex justify-center items-center
                        bg-linear-to-br from-emerald-400 via-teal-400 to-cyan-400">

            <div className="w-105 h-150 bg-white/90 backdrop-blur-lg
                            rounded-3xl shadow-2xl p-6">

                {/* Header */}
                <div className="flex items-center justify-center gap-3 mb-6">
                    <img src={todo_icon} className="w-10" alt="todo" />
                    <h1 className="text-3xl font-bold text-gray-800">
                        To-Do List
                    </h1>
                </div>

                {/* Input */}
                <form
                    onSubmit={handleSubmit}
                    className="flex items-center bg-gray-900 rounded-full overflow-hidden shadow-lg"
                >
                    <input
                        type="text"
                        placeholder="Write your task..."
                        className="flex-1 px-5 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                        value={taskTitle}
                        onChange={(e) => setTaskTitle(e.target.value)}
                    />

                    <button
                        type="submit"
                        className="bg-linear-to-r from-pink-500 to-red-500
                        px-6 py-3 text-white font-semibold"
                    >
                        Add +
                    </button>
                </form>

                {/* Tasks */}
                <ShowTask
                    newTasks={tasks}
                    deleteTask={deleteTask}
                    toggleTask={toggleTask}
                />

            </div>
        </div>
    );
};

export default AddTask;
