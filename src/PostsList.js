import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Post from './Post'
import { getData } from './getData'
const demo = [{
    id: 1,
    name: "123",
    email: "123@123.com",
    title: '123'
}]
function PostsList() {
    const [posts, setPosts] = React.useState(demo)
    React.useEffect(() => {
        getData('posts').then(response => setPosts(response))
    }, [])
    let { id } = useParams()
    const cards = posts.map(post => {
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
