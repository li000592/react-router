import React from 'react'
import { Link } from 'react-router-dom'
import './User.css'
import img from './img/pic-k-100.png'

function User(props) {
    return (
        <div className="UserList">
            <div className="UserCard">
                <div className="avatar">
                    <img src={img} alt="avatar" />
                </div>
                <div className="info">
                    <p>{props.user.name}</p>
                    <p>{props.user.email}</p>
                </div>
                <div className="buttons">
                    <button>
                        <Link className="NavLink" to={'/posts/' + props.user.id}>Load Posts</Link>
                    </button>
                    <button>
                        <Link className="NavLink" to={'/todos/' + props.user.id}>Load todos</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default User