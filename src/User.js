import React from 'react'
import { Link } from 'react-router-dom'
import './User.css'
import img from './img/pic-k-100.png'
import { AvatarGenerator } from 'random-avatar-generator';



function User(props) {
    const generator = new AvatarGenerator()
    let kk = generator.generateRandomAvatar()
    return (
        <div className="UserList">
            <div className="UserCard">
                <div className="avatarDiv" >
                    <img className="avatar" src={kk} alt="avatar" />
                </div>
                <div className="info">
                    <p>{props.user.name}</p>
                    <p>{props.user.email}</p>
                </div>
                <div className="buttons">
                    <Link className="NavLink" to={'/posts/' + props.user.id}>Posts</Link>
                    <Link className="NavLink" to={'/todos/' + props.user.id}>Todos</Link>
                </div>
            </div>
        </div>
    )
}

export default User