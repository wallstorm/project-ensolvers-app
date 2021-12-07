import React from "react";
import Task from './items';

export default function TaskList({ tasks, onIsDoneCheckbox, onEditTask }) {

    if (!tasks) { return null }

    return (
        <Task 
            tasks={tasks}
            onIsDoneCheckbox={onIsDoneCheckbox} // checkbox
            onEditTaskButton={onEditTask} // button
        />
    );
}