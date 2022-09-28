import React from "react";
import { useContext } from "react";
import Context from "../../../Context";
import DoneItem from "./DoneItem";
import classes from "./DoneMenu.module.css"

    const DoneList = ({doneTaskArr}) => {

        const {doneValue} = useContext(Context)

        const doneTask = doneValue.doneTask
        const setDoneTask = doneValue.setDoneTask
        
        return (
            <div className={classes.doneListEl}>
                {doneTaskArr.map(done => <DoneItem key={done.id} {...done} />)}
            </div>
        )
    }

export default DoneList