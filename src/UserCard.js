import React from 'react'
import { Link } from 'react-router-dom'
import './Users.css'
import img from './img/pic-k-100.png'

function UserCard(props) {
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
                        <Link className="NavLink" to='posts'>Load Posts</Link>
                    </button>
                    <button>
                        <Link className="NavLink" to='todos'>Load todos</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UserCard