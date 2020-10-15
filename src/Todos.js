import React from 'react'
import { NavLink } from 'react-router-dom'

function Todos() {
    return (
        <button >
            <NavLink className="NavLink" to='/'>Home</NavLink>
        </button>
    )
}

export default Todos
