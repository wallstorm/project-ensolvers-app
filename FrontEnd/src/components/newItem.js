import React from "react";

export default function NewTask({ newTask, onNewTaskTextChange, onAddTaskButton }) {

    const handleNewTaskTextChange = e => {
        onNewTaskTextChange(e.target.value);
    }

    const handleAddTaskButton = e => {
        console.log(e.target.value);
        onAddTaskButton(e.target.value);
    }
    
    return (
        <div>
            <input 
                name="newTask"
                placeholder="Add new task"
                type="text"
                value={newTask.newTask ? newTask.newTask : ''}
                onChange={handleNewTaskTextChange}
            />
            <button onClick={handleAddTaskButton}>Add</button>
        </div>
    );
}