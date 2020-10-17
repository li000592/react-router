import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Post from './Post'
import { getData } from './getData'

function PostsList() {
    let { id } = useParams()
    const [posts, setPosts] = React.useState()
    React.useEffect(() => {
        getData('posts', id).then(response => setPosts(response))
    }, [id])

    if (!posts) return <h1 className='loading'>Loading Users</h1>
    const cards = posts.map(post => {
        return <Post key={post.id} post={post} />
    })
    return (
        <div>
            <NavLink className="NavLink" to='/'>Home</NavLink>
            <div className='card-container'>{cards}</div>
        </div>
    )
}

export default PostsList
