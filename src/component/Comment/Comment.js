import React from 'react';

const Comment = (props) => {
    const {id,name,email,body}= props.comment
    return (
        <div>
            <h1>id:{id} </h1>
            <h2>{name} {email}</h2>
            <h3>{body}</h3>
        </div>
    );
};

export default Comment;