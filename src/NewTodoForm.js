import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const NewTodoForm = ({createTodo}) => {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        createTodo({ task, id: uuid() });
        setTask("");
    };

    const handleChange = (e) => {
        setTask(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">New Task</label>
                <input
                    id="task"
                    name="task"
                    placeholder="task"
                    type="text"
                    onChange={handleChange}
                    value={task}
                />
                <button>Add Task!</button>
            </form>
        </div>
    )
}
export default NewTodoForm;