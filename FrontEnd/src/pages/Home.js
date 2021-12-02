import React, { useState, useEffect } from "react";
import FolderContainer from './FolderContainer';
import axios from 'axios';

export default function Home() {
    const [ folders, setFolders ] = useState();
    const [ newFolder, setNewFolder ] = useState();

    // get data
    useEffect(() => {
        axios.get("http://localhost:8080/api/get").then((response) => {
            setFolders(response.data);
        })
    }, [newFolder]);

    // set data
    const onNewFolderChange = async newFold => {
        setNewFolder(newFold);
    }

    // delete data
    const onFolderDeleteButton = id => {
        axios.delete("http://localhost:8080/api/" + id);
        alert("deleted folder");
        setNewFolder("");
    }

    // functions
    const onNewFolderButton = async e => {
        await axios.post("http://localhost:8080/api/insert", 
        { folder: newFolder }).then(() => {
            alert("Successful insert");
        })
    }
    console.log(folders);
    return (
        <div>
            <h1>WELCOME ! </h1>
            <FolderContainer 
                dataFolder={folders}
                onNewFolderButton={onNewFolderButton}
                onNewFolderChange={onNewFolderChange}
                onFolderDeleteButton={onFolderDeleteButton}
            />
        </div>
    );
}