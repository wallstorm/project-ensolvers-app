import React, { useState, useEffect } from "react";
import FolderContainer from '../components/folderContainer';
import axios from 'axios';

export default function Home() {
    const [ folders, setFolders ] = useState();
    const [ newFolder, setNewFolder ] = useState();
    const [ flag, setFlag ] = useState(false);

    // get data
    useEffect(() => {
        axios.get("http://localhost:8080/api/get").then((response) => {
            setFolders(response.data);
        })
    }, [flag]);

    // Add folder
    const handleNewFolderButton = async e => {
        await axios.post("http://localhost:8080/api/insert", 
        { folder: newFolder });
        setNewFolder('');
        setFlag(!flag);
    }
    
    // delete data
    const handleFolderDeleteButton = async id => {
        await axios.delete("http://localhost:8080/api/" + id);
        setFlag(!flag);
    }

    // get value change
    const handleNewFolderChange = async newFold => {
        setNewFolder(newFold);
    }

    return (
        <div className="container">
            <h1>WELCOME ! </h1>
            <FolderContainer 
                dataFolder={folders}
                valueNewFolder={newFolder}
                onNewFolder={handleNewFolderButton}
                onNewFolderChange={handleNewFolderChange}
                onFolderDelete={handleFolderDeleteButton}
            />
        </div>
    );
}