import React from 'react';

import classes from './LoginPage.module.css';

const LoginPage = (props) => {
    return (
        <div className={classes.MainContainer}>
            <button onClick={props.onUserLogin}>Login Now!!</button>
        </div>
    );
}

export default LoginPage;