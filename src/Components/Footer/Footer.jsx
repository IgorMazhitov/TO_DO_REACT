import React from "react"
import classes from "./Footer.module.css"

    const Footer = () => {
        return (
            <div className={classes.footer}>
                <h3>CREATED WITH REACT</h3>
                <p>Used: Asynchronous JS | UseState() | UseEffect() | LocalStorage</p>
                <p> Made by Mazhitov Igor </p>
            </div>
        )
    }

export default Footer