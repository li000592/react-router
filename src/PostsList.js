import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Post from './Post'
import { getData } from './getData'

function PostsList() {
    const [posts, setPosts] = React.useState()
    React.useEffect(() => {
        getData('posts').then(response => setPosts(response))
    }, [])
    let { id } = useParams()
    if (!posts) return <h1 className='loading'>Loading Users</h1>
    const cards = posts.map(post => {
        if (`${post.userId}` === id) return <Post key={post.id} post={post} />
        return null
    })
    return (
        <div>
            <NavLink className="NavLink" to='/'>Home</NavLink>
            <div className='card-container'>{cards}</div>
        </div>
    )
}

export default PostsList
