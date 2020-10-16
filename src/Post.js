import React from 'react'
import { useParams } from 'react-router-dom'
import './Post.css'

function Post(props) {
    let { id } = useParams()
    console.log("ID", id);
    console.log("123", props);
    return (
        <div className="PostList">
            <div className="PostCard">
                <div className="avatar">
                    {/* <img src={img} alt="avatar" /> */}
                </div>
                <div className="info">
                    <p>{props.post.title}</p>
                    <p>{props.post.body}</p>
                </div>
            </div>
        </div>
    )
}

export default Post
