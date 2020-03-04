import React from 'react'
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className='output'>
            <p> I am a paragraph</p>
            <p> I am a paragraph</p>
            <p> My user is {props.name}</p>
        </div>
    )
}

export default userOutput
