import React from "react";
import { useNavigate, Link } from 'react-router-dom';
import './folder.css';

export default function Folders({ folder, onFolderDeleteButton }) {
    const navigate = useNavigate();

    const handleRemoveButton = (e) => {
        onFolderDeleteButton(e.target.value);
    } 
    return (
        <div>
            <ul className="lista-folder" >
                <li>- {folder.folder}</li>
                <li><button onClick={() => navigate("/" + folder.folder)} className="btn btn-primary">View items</button></li>
                <li><button onClick={handleRemoveButton} value={folder.id} className="btn btn-danger">Remove</button></li>
            </ul>
        </div>
    );
}