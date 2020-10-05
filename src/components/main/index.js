import React from 'react';
import PropTypes from 'prop-types'


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
Main.propTypes = {
    title: PropTypes.string,
    txt: PropTypes.string,
    propsy: PropTypes.arrayOf(PropTypes.shape({
       name: PropTypes.string,
       age: PropTypes.number,
       isMen: PropTypes.bool
    }))
};
export default Main;