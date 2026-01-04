import React from 'react'
import unCheck from '../assets/images/unCheck.png'
import check from '../assets/images/check.png'

const ShowTask = ({ newTasks, deleteTask, toggleTask }) => {

    return (
        <div className="mt-5 h-95 overflow-y-auto no-scrollbar">

            {newTasks.length === 0 ? (
                <p className="text-center text-gray-500 mt-10">
                    No tasks added yet 🌱
                </p>
            ) : (
                newTasks.map((task) => (
                    <div
                        key={task.id}
                        className="flex items-center justify-between gap-3 bg-linear-to-r from-rose-100 to-pink-100 p-4 rounded-2xl mb-3 shadow-md hover:scale-[1.02] transition"
                    >
                        <img
                            src={task.completed ? check : unCheck}
                            alt="tick"
                            className="w-5 cursor-pointer"
                            onClick={() => toggleTask(task.id)}
                        />

                        <p
                            className={`flex-1 text-sm
                            ${task.completed
                                ? "line-through text-gray-400"
                                : "text-gray-800"
                            }`}
                        >
                            {task.title}
                        </p>

                        <img
                            src="https://cdn-icons-png.flaticon.com/512/1828/1828778.png"
                            alt="delete"
                            className="w-4 cursor-pointer opacity-70 hover:opacity-100"
                            onClick={() => deleteTask(task.id)}
                        />
                    </div>
                ))
            )}
        </div>
    );
};

export default ShowTask;
