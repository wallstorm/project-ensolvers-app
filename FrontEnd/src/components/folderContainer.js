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
            {dataFolder ? 
                dataFolder.map((folder, i) => (
                    <Folder 
                        folder={folder} 
                        onFolderDeleteButton={onFolderDelete}
                        key={i} />
                ))
            : null}

            <NewFolder
                onNewFolder={onNewFolder} 
                onNewFolderChange={onNewFolderChange}
                value={valueNewFolder}
            />            
        </div>        
    );
}