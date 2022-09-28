import React from "react";
import { useContext } from "react";
import Context from "../../../Context";
import classes from "./DoneMenu.module.css"

    const DoneItem = ({title, id}) => {

        const {doneValue} = useContext(Context)

        const doneTask = doneValue.doneTask
        const setDoneTask = doneValue.setDoneTask

        const deleteDone = () => {

            setTimeout(() => {

                setDoneTask(doneTask.filter(done => done.id !== id))

            }, 500)
            
        }


        return (

            <li className={classes.doneEl}>
                    <div className={classes.parentDoneEl}>
                        <span
                        className={classes.textDoneEl}
                        >
                            {title}
                        </span>
                        <button
                        onClick={deleteDone}
                        className={classes.buttonDoneEl}
                        >
                        </button>
                    </div>
            </li>

        )
    }

export default DoneItem