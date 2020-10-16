import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Post from './Post'


function PostsList(props) {
    console.log(props)
    let { id } = useParams()
    console.log("ID:===", id);
    const cards = props.posts.map(post => {
        if (post.userId == id.toString()) return <Post key={post.id} post={post} />
    })
    return (
        <div>

            <NavLink className="NavLink" to='/'>Home</NavLink>

            <div className='card-container'>{cards}</div>
        </div>

    )
}

export default PostsList
