import React from "react";
import { Link } from 'react-router-dom';
import './folder.css';

export default function Folders({ data, onFolderDeleteButton }) {

    const handleRemoveButton = (e) => {
        onFolderDeleteButton(e.target.value);
    } 

    if(!data) { return null }

    return (
        <div>
            {data.map((folder, i) => (
                <ul className="lista-folder" key={i} >
                    <li>- {folder.folder}</li>
                    <li><Link to={`/${folder.folder}`}>View items</Link></li>
                    <li><button onClick={handleRemoveButton} value={folder.id} className="btn btn-danger">Remove</button></li>
                </ul>
            ))}
        </div>
    );
}