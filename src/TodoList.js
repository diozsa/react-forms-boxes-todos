import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
const TodoList = () => {
    const init = [];
    const [todos, setTodos] = useState(init);

// Create, Update, Delete functions
    const create = (newTodo) => {
        setTodos(todos => [...todos, newTodo]);
    }
    const update = (id, updatedTask) => {
        setTodos(todos => (
            todos.map(todo => (
                todo.id === id ? { ...todo, task: updatedTask } : todo
            ))
        ))
    }
    const remove = (id) => {
        setTodos(todos => (
            todos.filter(todo => todo.id !== id)
        ))
    }
    const todoComponents = todos.map(todo => (
        <Todo
            remove={remove}
            key={todo.id}
            id={todo.id}
            task={todo.task}
            update={update}
        />
    ));

    return (
        <div>
            <ul>
                {todoComponents}
                <NewTodoForm createTodo={create} />
            </ul>
        </div>
    );
}
export default TodoList;