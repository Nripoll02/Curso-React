import React from "react";
import '../stylesheets/Button.css';

function Button(props){

  const operator = value => {
    return isNaN(value) && (value !== '.') && (value !== '=');
  };

  return (
    <button className={`button-container ${operator(props.children) ? 'operator' : null}`.trimEnd()}
    onClick={() => props.listenClick(props.children)}>
      {props.children}
    </button>
  )

}

export default Button;