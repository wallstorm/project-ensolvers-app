import React from 'react';

export default function EditTask({ taskNewEdited, onTaskEdited, onSaveEditedTask, onCancelEdit }) {
    
    const taskEdited = e => {
        onTaskEdited(e.target.value);
    }

    const saveEditedTask = () => {
        onSaveEditedTask();
    }

    const cancelEdit = () => {
        onCancelEdit();
    }

    return (
        <div>
            <input 
                type="text"
                value={taskNewEdited.task}
                onChange={taskEdited}
            />
            <button onClick={saveEditedTask} className="btn btn-success">Save</button>
            <button onClick={cancelEdit} className="btn btn-light">Cancel</button>
        </div>
    );
}