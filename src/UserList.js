import React from 'react'
import User from './User'

function UserList(props) {
    if (!props.users) return <h1 className='loading'>Loading Users</h1>
    const cards = props.users.map(user => {
        return <User key={user.id} user={user} />
    })
    return (
        <div>
            <div className='card-container'>{cards}</div>
        </div>
    )
}

export default UserList
