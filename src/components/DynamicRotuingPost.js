import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const DynamicRoutingPost = (props) => {
    const { id } = useParams()
    const [post, setPost] = useState()
    
    useEffect(() => {
        setPost(props.items.filter(item => (
            item.id === id
        ))[0])
    }, [id])

    if(!post) {
        return <h1>Loading</h1>
    }
    return ( 
        <div>
            <h1>Here is the correct name: {post.name}</h1>
            <h2>Here is the correct description: {post.description}</h2>
            <p>Here is the correct arbitrary number --{">"} {post.number}</p>
        </div>
    );
}
 
export default DynamicRoutingPost;