import React from "react";
import Task from './items';

export default function TaskList({ tasks, onIsDoneCheckbox, onEditTask }) {

    if (!tasks) { return null }

    return (
        <div>
            {tasks.map((task, i) => (
                    <Task
                        key={i}
                        task={task}
                        onIsDoneCheckbox={onIsDoneCheckbox} // checkbox
                        onEditTaskButton={onEditTask} // button
                    />
            ))}
        </div>
    );
}