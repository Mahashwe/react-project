import React from 'react'
import './style.css'

function Main() {
    return (
        <div className='card'>
            <h4>Title of Task</h4>
            <input type="text" placeholder='Enter Task Title' />
            <button>Add Task</button>
            <button>Delete Task</button>
        </div>
    )
}

export default Main
