import React from "react";

export default function NewFolder({ 
        value,
        onNewFolderChange,
        onNewFolder }) {

    const handleNewFolderChange = (e) => {
        onNewFolderChange(e.target.value);
    }

    const handleAddButton = () => {
        onNewFolder();
    }
    
    return (
        <div>
            <input 
                type="text"
                placeholder="add a folder"
                value={value || ''}
                onChange={handleNewFolderChange}
            />
            <button onClick={handleAddButton} className="btn btn-success" >Add</button>
        </div>
    );
}