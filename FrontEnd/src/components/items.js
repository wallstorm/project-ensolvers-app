import React from "react";
import './folder';

export default function Task({ task, onIsDoneCheckbox, onEditTaskButton }) {

    const handleIsDoneCheckbox = e => {
        onIsDoneCheckbox(e.target.checked, e.target.name);
    }

    const handleEditTask = e => {
        onEditTaskButton(e.target.value, e.target.id);
    }

    return (
        <div>
            <ul className="lista-folder"> 
                <li>
                    <input
                        type="checkbox"
                        name={task.id}
                        checked={task.done}
                        onChange={handleIsDoneCheckbox}
                    />
                </li>
                <li>
                    <p>{task.task}</p>
                </li>
                <li>
                    <button 
                        onClick={handleEditTask} 
                        value={task.task} 
                        id={task.id}  
                        className="btn btn-primary"   
                    >Edit</button>
                </li>
            </ul>
        </div>
    );
}