import React from 'react'


function Todo(props) {
    return (
        <div className="TodoList">
            <div className="TodoCard">
                <div className="avatar">
                    {/* <img src={img} alt="avatar" /> */}
                </div>
                <div className="info">
                    <p>{props.todo.title}</p>
                    <p>123</p>
                </div>
            </div>
        </div>
    )
}

export default Todo
