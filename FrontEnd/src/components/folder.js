import React from "react";
import { Link } from 'react-router-dom';
import './folder.css';

export default function Folders({ folder, onFolderDeleteButton }) {

    const handleRemoveButton = (e) => {
        onFolderDeleteButton(e.target.value);
    } 
    return (
        <div>
            <ul className="lista-folder" >
                <li>- {folder.folder}</li>
                <li><Link to={`/${folder.folder}`}>View items</Link></li>
                <li><button onClick={handleRemoveButton} value={folder.id} className="btn btn-danger">Remove</button></li>
            </ul>
        </div>
    );
}