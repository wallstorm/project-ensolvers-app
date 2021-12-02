import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

// components
import ItemList from "./itemList";
import NewItem from "./newItem";
import EditItem from "./editItem";

export default function Todo() {

    const [ items, setItem ] = useState();

    const params = useParams();
    
    useEffect(() => {
        axios.get("http://localhost:8080/api/get/task").then((response) => {
            setItem(response.data);
        })
    }, []);

    const [ isDone, setIsDone ] = useState(false);
    const [ newTask, setNewTask ] = useState({ newTask: null });

    const [ edit, setEdit ] = useState({ task: null});
    const [ taskNewEdited, setTaskNewEdited ] = useState({  task: null});

    const onNewTaskTextChange = newTask => {
        setNewTask({ newTask: newTask });
    }
    
    const onAddTaskButton = e => {
        const folder = "cocinar";
        // axios.post
        console.log(newTask);
        alert("aun en desarrollo")

    }

    const onIsDoneCheckbox = (toggle, id) => {
        /*setTasks(tasks.map(done => {
            if (done.id === parseInt(id)) {
                done.done = toggle;
            } 
            return done
        }));*/
        axios.post("http://localhost:8080/api/task/" + id, 
        { 
            id: id, 

            done: toggle }).then(() => {
            alert("Successful update");
        })

    }

    const onEditTask = (taskForEdit, id) => {
        setEdit({
            task: taskForEdit,
            id: id
        });
    }

    const onTaskEdited = taskEdited => {
        setTaskNewEdited({
            task: taskEdited
        });
    }

    const onSaveEditedTask = e => {
        alert("se debe llamar a axios y guardar en db");
    }

    // Cancelamos la edición de tarea
    const onCancelEdit = e => {
        setEdit({ task: null});
    }

    return (
        <div>
            {!edit.task ?
                <>
                    <h2>To-Do List</h2>
                    <ItemList 
                        tasks={items} 
                        isDone={isDone}
                        onIsDoneCheckbox={onIsDoneCheckbox}
                        onEditTask={onEditTask}
                    />
                    <NewItem 
                        newTask={newTask}
                        onNewTaskTextChange={onNewTaskTextChange}
                        onAddTaskButton={onAddTaskButton}
                    />
                </>
            
            : 
                <>
                    <h2>Editing task "{edit.task}"</h2>
                    <EditItem 
                        taskToEdit={edit} 
                        taskNewEdited={taskNewEdited}
                        tasks={items} 
                        setTasks={setItem} 
                        onSaveEditedTask={onSaveEditedTask} 
                        onCancelEdit={onCancelEdit}
                        onTaskEdited={onTaskEdited}
                    />
                </>
            }
            
        </div>
    );
}