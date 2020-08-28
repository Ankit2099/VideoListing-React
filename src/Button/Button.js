import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
    return(
        <button onClick={props.onBtnClick} className={classes.ActionButton}>{props.label} </button>
    )
}

export default Button;