import React from 'react';

export default function EditTask({ taskNewEdited, onTaskEdited, taskToEdit, setTasks, onSaveEditedTask, onCancelEdit }) {
    
    const taskEdited = e => {
        onTaskEdited(e.target.value);
    }

    const saveEditedTask = e => {
        console.log("asd: ",e.target.value);
        onSaveEditedTask();
    }

    const cancelEdit = e => {
        onCancelEdit();
    }

    return (
        <div>
            <input 
                type="text"
                value={taskNewEdited.task ? taskNewEdited.task : ''}
                onChange={taskEdited}
            />
            <button onClick={saveEditedTask}>Save</button>
            <button onClick={cancelEdit}>Cancel</button>
        </div>
    );
}