import React from "react";
import { useContext } from "react";
import Context from "../../../Context";
import DoneList from "./DoneList";

    const DoneMenu = () => {

        const {doneValue} = useContext(Context)

        const doneTask = doneValue.doneTask
        const setDoneTask = doneValue.setDoneTask


        return (
            <div>
                <DoneList doneTaskArr={doneTask}/>
            </div>
        )
    }

export default DoneMenu