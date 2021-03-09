import React from 'react';
import { useHistory } from 'react-router';

const Post = (props) => {
    const {id,title,body}=props.post
    let history = useHistory();
    function handleClick(id) {
        const url=(`/post/${id}`);
        history.push(url)
      }

    return (
        <div>
            <h2><strong>Id :{id} Title :{title}</strong></h2>
            <h3>{body}</h3>
            <button onClick={()=> handleClick(id)}>Show detail</button>
        </div>
    );
};

export default Post;