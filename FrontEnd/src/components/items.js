import React from "react";

export default function Task({ task, onIsDoneCheckbox, onEditTaskButton }) {

    const handleIsDoneCheckbox = e => {
        onIsDoneCheckbox(e.target.checked, e.target.name);
    }

    const handleEditTask = e => {
        onEditTaskButton(e.target.value, e.target.id);
    }

    return (
        <div>
            <input
                name={task.id}
                type="checkbox"
                onChange={handleIsDoneCheckbox}
            />
            <p>{task.task}</p>
            <button onClick={handleEditTask} value={task.task} id={task.id} >Edit</button>
        </div>
    );
}