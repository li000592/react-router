import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Todo from './Todo'
import { getData } from './getData'

function TodoList() {
    const [todos, setTodos] = React.useState()
    React.useEffect(() => {
        getData('todos').then(response => setTodos(response))
    }, [])
    let { id } = useParams()
    if (!todos) return <h1 className='loading'>Loading Users</h1>
    const cards = todos.map(todo => {
        if (`${todo.userId}` === id) return <Todo key={todo.id} todo={todo} />
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
