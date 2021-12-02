import React from "react";
import Task from './items';

export default function TaskList({ tasks, onIsDoneCheckbox, onEditTask }) {

    if (!tasks) { return }

    return (
        <div>
            {tasks.map((task, i) => (
                    <Task
                        key={i}
                        task={task} 
                        isDone={task.done} 
                        onIsDoneCheckbox={onIsDoneCheckbox} // checkbox
                        onEditTaskButton={onEditTask} // button
                    />
            ))}
        </div>
    );
}