import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

// Material UI 
import { Button, TextField } from "@material-ui/core";

function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    function handleChange(e) {
        setTodo({...todo, task: e.target.value })
    };

    function handleSubmit(e) {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({...todo, id: uuidv4() });
            setTodo({...todo, task: "" });
        }
    };
    return ( 
        <form onSubmit={handleSubmit}>
        <TextField 
        color = "secondary"
        label = "Task"
        name = "task"
        type = "text"
        value = { todo.task }
        onChange = { handleChange }
        /> 
        <Button type = "submit">Submit</Button>
        </form>
    );
}

export default TodoForm;