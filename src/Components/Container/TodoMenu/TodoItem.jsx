import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import Context from "../../../Context";
import classes from "./TodoMenu.module.css"


    const TodoItem = ({title, id, completed}) => {

        const {task, setTask} = useContext(Context)

        const {doneValue} = useContext(Context)

        const doneTask = doneValue.doneTask
        const setDoneTask = doneValue.setDoneTask

        const deleteItem = () => {

            setTimeout(() => {

                setDoneTask([
                    task.filter(el => el.id === id).concat(doneTask)
                ].flat())
                setTask(task.filter(el => el.id !== id))
            }, 500)

        }

        const [line, setLine] = useState('none')
        const [opacity, setOpacity] = useState(1)

        const checkItem = () => {

            if (line === 'none') {

                setLine('line-through')
                setOpacity(0.7)

            } else {

                setLine('none')
                setOpacity(1)

            }

        }

        useEffect(() => {

            const lineStore = localStorage.getItem('line') || 'none'
            const opacityStor = localStorage.getItem('opacity') || 1
            setOpacity(JSON.parse(opacityStor))
            setLine(JSON.parse(lineStore))


        }, [])
        
        useEffect(() => {
            
            localStorage.setItem('line', JSON.stringify(line))
            localStorage.setItem('opacity', JSON.stringify(opacity))

        }, [opacity])


        return (
            <li className={classes.listEl}>
                    <div className={classes.parentListEl}>
                        <button 
                        onClick={checkItem}
                        className={classes.checkListEl}
                        />
                        <span
                        style={{'textDecorationLine': line, 'opacity': opacity}}
                        className={classes.textListEl}
                        >
                            {title}
                        </span>
                        <button
                        onClick={deleteItem}
                        className={classes.buttonListEl}
                        >
                        </button>
                    </div>
            </li>
        )
    }

export default TodoItem