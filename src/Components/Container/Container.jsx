import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import Context from "../../Context";
import DoneMenu from "./DoneMenu/DoneMenu";
import InfoMenu from "./InfoMenu/InfoMenu";
import TodoMenu from "./TodoMenu/TodoMenu";
import classes from "./Container.module.css"

    const Container = () => {

        const value = useContext(Context)

        const menu = value.menu

        useEffect(() => {
        }, [menu])

        if (menu.todo) {
            return (
                <div className={classes.container}>
                    <TodoMenu/>
                </div>
            )
        }

        if (menu.done) {
            return (
                <div className={classes.container}>
                    <DoneMenu/>
                </div>
            )
        }

        if (menu.info) {
            return (
                <div className={classes.container}>
                    <InfoMenu/>
                </div>
            )
        }
    }

export default Container