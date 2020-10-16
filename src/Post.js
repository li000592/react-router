import React from 'react'
import './Post.css'

function Post(props) {


    return (
        <div className="PostList">
            <div className="PostCard">
                <div className="avatar">
                    {/* <img src={img} alt="avatar" /> */}
                </div>
                <div className="info">
                    <h3>{props.post.title}</h3>
                    <p>{props.post.body}</p>
                </div>
            </div>
        </div>
    )
}

export default Post
