import React from "react";
import TodoItem from "./TodoItem";
import classes from "./TodoMenu.module.css"
    
    const TodoList = ({tasklist}) => {

        return (
            <div className={classes.listOfItems}>
                {tasklist.map(task => <TodoItem key={task.id} {...task} />)}
            </div>
        )

    }

export default TodoList