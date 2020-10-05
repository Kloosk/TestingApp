import React from 'react';
import PropTypes from 'prop-types'

const Btn = ({func,txt}) => {
    if(!txt){
        return null
    }
    return (
        <button onClick={func} data-test="btn">{txt}</button>
    );
};
Btn.propTypes={
  func: PropTypes.func,
  txt: PropTypes.string
};

export default Btn;