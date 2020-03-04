import React from 'react'
import './UserInput.css'

const userInput = (props) => {
    return (
        <div className="wrapper">
             <input className="userInput" onChange={props.change} value= {props.name}></input>
        </div>
    )
}

export default userInput;