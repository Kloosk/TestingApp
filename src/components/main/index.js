import React from 'react';

const Main = ({title,txt}) => {
    if(!title){
        return null
    }
    return (
        <div data-test="out">
            <h1 data-test="title">{title}</h1>
            <p data-test="desc">{txt}</p>
        </div>
    );
};

export default Main;