import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Todo from './Todo'
import { getData } from './getData'
const demo = [{
    id: 1,
    name: "123",
    email: "123@123.com",
    title: '123'
}]

function TodoList() {
    const [todos, setTodos] = React.useState(demo)
    React.useEffect(() => {
        getData('todos').then(response => setTodos(response))
    }, [])
    let { id } = useParams()
    const cards = todos.map(todo => {
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
