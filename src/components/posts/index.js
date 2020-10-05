import React from 'react';

const Posts = ({post}) => {
    const {name,email} = post;
    return (
       <div>
           <h1>{name}</h1>
           <h1>{email}</h1>
       </div>
    );
};

export default Posts;