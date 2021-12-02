import React from "react";

export default function Input({ 
        onNewFolderChange,
        onNewFolderButton }) {

    const handleNewFolderChange = (e) => {
        onNewFolderChange(e.target.value);
    }

    const handleAddButton = () => {
        onNewFolderButton();
    }
    
    return (
        <div>
            <input 
                type="text"
                placeholder="add a folder"
                onChange={handleNewFolderChange}
            />
            <button onClick={handleAddButton} className="btn btn-success" >Add</button>
        </div>
    );
}