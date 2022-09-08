import React from 'react';
import '../stylesheets/Clear.css';

const Clear = (props) => {
  return (
    <button className='clear-button' onClick={props.listenClear}>
      {props.children}
    </button>
  )
};

export default Clear;