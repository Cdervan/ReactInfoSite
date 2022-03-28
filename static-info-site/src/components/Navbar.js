import React from "react"
import reactLogo from "../images/react-logo.png"

export default function Navbar() {
    return (
        <div className="nav">
            <img className="react-logo" src={reactLogo} width="50px"/>
            <h1>React Facts</h1>
            <h2>React Course - Project 1</h2>
        </div>
    )
}