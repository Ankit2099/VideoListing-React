import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Topbar.module.css';

const Topbar = (props) => {
    return (
        <div className={classes.Topbar}>
            <p className={classes.MenuItem}><Link to="/">Home</Link></p>
            <p className={classes.MenuItem}>
                {
                    props.loginStatus ?
                        <span onClick={props.logoutClick}>Logout</span>
                        :
                        <Link to="/login">Login</Link>
                }
            </p>
        </div>
    );
}

export default Topbar;