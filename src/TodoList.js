import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Todo from './Todo'
import { getData } from './getData'

function TodoList() {
    const [todos, setTodos] = React.useState()
    let { id } = useParams()
    React.useEffect(() => {
        getData('todos', id).then(response => setTodos(response))
    }, [id])
    if (!todos) return <h1 className='loading'>Loading Users</h1>
    const cards = todos.map(todo => {
        return <Todo key={todo.id} todo={todo} />
        return null
    })
    return (
        <div>
            <NavLink className="NavLink" to='/'>Home</NavLink>
            <div className='card-container'>{cards}</div>
        </div>
    )
}

export default TodoList
