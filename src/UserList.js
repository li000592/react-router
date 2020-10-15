import React from 'react'
import UserCard from './UserCard'

function UserList(props) {
    const cards = props.users.map(user => {
        return <UserCard key={user.id} user={user} />
    })
    return (
        <div>
            <div className='card-container'>{cards}</div>
        </div>
    )
}

export default UserList
