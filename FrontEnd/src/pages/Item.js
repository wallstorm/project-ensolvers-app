import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

import ItemList from '../components/itemList'
import EditTask from "../components/editItem";

export default function Item() {
    const [ items, setItem ] = useState();


    const params = useParams();
    
    useEffect(() => {
        axios.get("http://localhost:8080/api/get/task").then((response) => {
            setItem(response.data);
        })
    }, []);

    const onIsDoneCheckbox = e => {
        alert("en des..")
    }

    const onEditTask = e => {
        alert("en des..")
    }

    return (
        <div>
            <h1> Folders {">"} {params.folder} </h1>
            <ItemList 
                dataItems={items} 
                onIsDoneCheckbox={onIsDoneCheckbox}
                onEditTask={onEditTask}

            />
        </div>
    );
}