import React, {useState} from "react";

function Todo({ task = "default", id = "1", remove, update }) {
    const [editTask, setEditTask] = useState(task);
    const [isEditing, setIsEditing] = useState(false);

    const toggleEdit = () => {
        setIsEditing(val => !val);
    };

    const handleChange = (e) => {
        setEditTask(e.target.value);
    }
    const handleRemove = () => remove(id);

    const handleUpdate = (e) => {
        e.preventDefault();
        update(id, editTask);
        setIsEditing(false);
    };

    //view todo
    let jsx = (
        <div>
            <li>{task}</li>
            <button onClick={toggleEdit}>Edit Todo</button>
            <button onClick={handleRemove}>X</button>
        </div>
    );

    //view edit todo form
    if (isEditing) {
        jsx = (
            <div>
                <form onSubmit={handleUpdate}>
                    <input type="text" value={editTask} onChange={handleChange} />
                    <button>Update Task</button>
                </form>
            </div>
        );
    }
    return jsx;
}
export default Todo;