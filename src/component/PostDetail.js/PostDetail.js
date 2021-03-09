import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const {id} = useParams()
    const [post,setPost] = useState({})
    const [comment,setComment] = useState([])
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url)
        .then((response) =>response.json())
        .then(data => setPost(data))
    },[])
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`
        fetch(url)
        .then(res =>res.json())
        .then(data => setComment(data))
    },[])
    return (
        <div>
            <h1>This is detail {id}</h1>
            <h2>userPost: {post.id}</h2>
            <h2>{post.title}</h2>
            <h3>{post.body}</h3>
            <p>{comment.length} comment</p>
           {
               comment.map((comment) => <Comment comment={comment}></Comment>)
           }
        </div>
    );
};

export default PostDetail;