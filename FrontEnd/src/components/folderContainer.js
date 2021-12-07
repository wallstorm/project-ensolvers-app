import React from "react";
import NewFolder from "./newFolder";
import Folder from "./folder";

export default function FolderContainer({ 
    dataFolder, 
    valueNewFolder,
    onNewFolder, 
    onNewFolderChange,
    onFolderDelete }) {

    return (
        <div>
            <h2>Folders</h2>
            <Folder 
                data={dataFolder}
                onFolderDeleteButton={onFolderDelete}
            />
            <NewFolder
                onNewFolder={onNewFolder} 
                onNewFolderChange={onNewFolderChange}
                value={valueNewFolder}
            />            
        </div>        
    );
}