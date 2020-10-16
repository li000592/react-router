import React from 'react'
import './Todo.css'

function Todo(props) {
    return (
        <div className="TodoList">
            <div className="TodoCard">
                <div className="avatar">
                    {/* <img src={img} alt="avatar" /> */}
                </div>
                <div className="info">
                    <h3>{props.todo.title}</h3>
                    <p>pending</p>
                </div>
            </div>
        </div>
    )
}

export default Todo
