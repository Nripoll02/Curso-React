import React from "react";

function Button({text, clickButton, manejarClick}) {
    return(
        <button className={ clickButton ? 'click-button' : 'reset-button' }
        onClick={manejarClick}>
          {text}
        </button>
    );
}

export default Button;
