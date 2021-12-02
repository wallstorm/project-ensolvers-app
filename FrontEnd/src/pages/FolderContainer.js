import React from "react";
import Input from "../components/input";
import Folder from "../components/folder";

export default function FolderContainer({ 
    dataFolder, 
    onNewFolderButton, 
    onNewFolderChange,
    onFolderDeleteButton }) {

    return (
        <div>
            <h2>Folders</h2>
            {dataFolder ? 
                dataFolder.map((folder, i) => (
                    <Folder 
                        folder={folder} 
                        onFolderDeleteButton={onFolderDeleteButton}
                        key={i} />
                ))
            : null}

            <Input
                onNewFolderButton={onNewFolderButton} 
                onNewFolderChange={onNewFolderChange}
            />            
        </div>        
    );
}