import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [post,setpost]=useState([])
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        fetch(url)
        .then(res=>res.json())
        .then(data => setpost(data))
    },[])
    return (
        <div>
            <h1>this is home</h1>
            <h2>This is post{post.length}</h2>
            {
                post.map(post => <Post post={post}></Post>)
            }
        </div>
    );
};

export default Home;