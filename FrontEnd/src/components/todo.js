import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

// components
import ItemList from "./itemsList";
import NewItem from "./newItem";
import EditItem from "./editItem";

export default function Todo() {

    const [items, setItem] = useState([]);
    const [ flag, setFlag ] = useState(false);

    const [ newTask, setNewTask ] = useState('');

    const [ edit, setEdit ] = useState({ task: null });
    const [ taskNewEdited, setTaskNewEdited ] = useState({ task: '' });

    const params = useParams();
    
    // get data
    useEffect(() => {
        axios.get(`http://localhost:8080/api/query?folder=${params.folder}`).then((response) => {
            setItem(response.data);
        })
    }, [flag, params]);

    // add task
    const handleAddTaskButton = async () => {
        await axios.post("http://localhost:8080/api/insert/task", 
        { 
            task: newTask,
            done: false,
            folder: params.folder
        });
        setNewTask('');
        setFlag(!flag);
    }

    // get value change
    const handleNewTaskTextChange = newTask => {
        setNewTask(newTask);
    }
    
    // update checkbox
    const handleIsDoneCheckbox = (toggle, id) => {
        let taskDone = {};
        items.forEach(done => {
            if (done.id === parseInt(id)) {
                taskDone = done;
                return
            }
        });
        (async () => {
            await axios.post("http://localhost:8080/api/insert/task", 
            { 
                id: id, 
                task: taskDone.task,
                done: toggle,
                folder: taskDone.folder
            }).then(() => {
                setFlag(!flag);
            });
        })();
    }

    //  
    const handleEditTask = (taskForEdit, id) => {
        setEdit({
            task: taskForEdit,
            id: id
        });
    }

    // get edited task
    const onTaskEdited = taskEdited => {
        setTaskNewEdited({
            task: taskEdited
        });
    }

    // save edited task
    const onSaveEditedTask = async () => {
        await axios.post("http://localhost:8080/api/insert/task", 
        { 
            id: edit.id,
            task: taskNewEdited.task,
            done: false,
            folder: params.folder
        }).then(() => {
            setTaskNewEdited({ task: '' });
            setFlag(!flag);
            setEdit({ task: null});
        });
    }

    // cancel edit task
    const onCancelEdit = () => {
        setEdit({ task: null});
    }
    
    return (
        <div>
            
            {!edit.task ?
                <>
                    <h2><Link to="/">Folders</Link> {">"} {params.folder} </h2>
                    <ItemList 
                        tasks={items} 
                        onIsDoneCheckbox={handleIsDoneCheckbox}
                        onEditTask={handleEditTask}
                    />
                    <NewItem 
                        newTask={newTask}
                        onNewTaskTextChange={handleNewTaskTextChange}
                        onAddTaskButton={handleAddTaskButton}
                    />
                </>
            
            : 
                <>
                    <h2>Editing task "{edit.task}"</h2>
                    <EditItem 
                        taskNewEdited={taskNewEdited}
                        onSaveEditedTask={onSaveEditedTask} 
                        onCancelEdit={onCancelEdit}
                        onTaskEdited={onTaskEdited}
                    />
                </>
            }
            
        </div>
    );
}