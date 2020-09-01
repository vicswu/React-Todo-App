import React from "react";

// Material UI 
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

function Todo({todo, toggleComplete, removeTodo}) {
    function handleCheckboxClick() {
        toggleComplete(todo.id);
      }
    
      function handleRemoveClick() {
        removeTodo(todo.id);
      }
    return(
        <ListItem style={{display: "flex"}}>
            <Checkbox color="secondary" checked={todo.completed} onClick={handleCheckboxClick} />
            <Typography
                variant="body1"
                style={{
                textDecoration: todo.completed ? "line-through" : null
                }}
            >
            {todo.task}
            </Typography>
            <IconButton onClick={handleRemoveClick}>
            <CloseIcon />
            </IconButton>
        </ListItem>
    )
}

export default Todo;
