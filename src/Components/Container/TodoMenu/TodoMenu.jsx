import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import TodoList from "./TodoList";
import classes from "./TodoMenu.module.css"
import Context from "../../../Context";
import { useContext } from "react";

    const TodoMenu = () => {

        const [task, setTask] = useState([])

        useEffect(() => {
            const raw2 = localStorage.getItem('task') || []
            setTask(JSON.parse(raw2))
          }, [])
        
        useEffect(() => {
            localStorage.setItem('task', JSON.stringify(task))
          }, [task])

        const [taskTitle, setTaskTitle] = useState('')

        const {doneValue} = useContext(Context)

        const addTask = event => {
            if (event.key === 'Enter') {
                setTask([
                    ...task,
                    {
                        id: Date.now(),
                        title: taskTitle,
                        completed: false
                    }
                ])
                setTaskTitle('')
            }
        }


        return (
            <Context.Provider value={{
                task, setTask, doneValue
            }}>
                <div className={classes.todomenu}>
                    <div className={classes.todoinput}>
                        <input
                        value={taskTitle}
                        id="todoInput"
                        placeholder="Remind me what to do . . . "
                        type='text' 
                        className={classes.input}
                        onChange={event => setTaskTitle(event.target.value)}
                        onKeyPress={addTask}
                        >
                        </input>
                    </div>
                    <div>
                        <TodoList tasklist={task}/>
                    </div>
                </div>
            </Context.Provider>
        )
    }

export default TodoMenu