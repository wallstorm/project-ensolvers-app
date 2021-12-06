import React from "react";

export default function NewTask({ newTask, onNewTaskTextChange, onAddTaskButton }) {

    const handleNewTaskTextChange = e => {
        onNewTaskTextChange(e.target.value);
    }

    const handleAddTaskButton = e => {
        onAddTaskButton();
    }
    
    return (
        <div>
            <input 
                name="newTask"
                placeholder="Add new task"
                type="text"
                value={newTask}
                onChange={handleNewTaskTextChange}
            />
            <button onClick={handleAddTaskButton}>Add</button>
        </div>
    );
}