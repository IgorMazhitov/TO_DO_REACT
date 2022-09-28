import React from "react";
import classes from "./InfoMenu.module.css"

    const InfoMenu = () => {
        return (
            <div>
                <div className={classes.text}> 
                    <h1>This is my first react app.</h1>
                    <h3>What have i learned? </h3>
                    <p>How to use useState hook, useEffect hook as well as localStorage</p>
                    <p> A lot of small CSS/HTML tags/tricks/properties </p>
                    <p> How to compose an app with components </p>
                </div>
            </div>
        )
    }

export default InfoMenu