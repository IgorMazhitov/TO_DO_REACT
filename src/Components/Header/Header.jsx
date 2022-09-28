import React from "react";
import { useContext } from "react";
import Context from "../../Context";
import classes from "./Header.module.css"

const Header = () => {

    const value = useContext(Context)

    const menu = value.menu
    const setMenu = value.setMenu

    const changeTodo = () => {
        setMenu({
            done: false,
            info: false,
            todo: true
        })
    }

    const changeDone = () => {
        setMenu({
            done: true,
            info: false,
            todo: false
        })
    }

    const changeInfo = () => {
        setMenu({
            done: false,
            info: true,
            todo: false
        })
    }


    return (
        <div className={classes.header}>
            <div 
            onClick={() => changeTodo()}
            className={classes.todoEl}> TO DO </div>
            <div onClick={() => changeDone()}
            className={classes.todoEl}> DONE </div>
            <div onClick={() => changeInfo()}
            className={classes.todoEl}> INFO </div>
        </div>
    )
}

export default Header