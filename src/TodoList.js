import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Todo from './Todo'

function TodoList(props) {
    let { id } = useParams()
    console.log("ID:===", id);
    const cards = props.todos.map(todo => {
        if (todo.userId == id) return <Todo key={todo.id} todo={todo} />
    })
    return (
        <div>
            <NavLink className="NavLink" to='/'>Home</NavLink>
            <div className='card-container'>{cards}</div>
        </div>
    )
}

export default TodoList
