import React from 'react'
import User from './User'

function UserList(props) {
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
