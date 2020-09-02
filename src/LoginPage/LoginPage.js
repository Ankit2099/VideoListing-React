import React from 'react';
import axios from 'axios';

import ProgressLoader from '../ProgressLoader/ProgressLoader';
import ProgressLoaderPerc from '../ProgressLoaderPerc/ProgressLoaderPerc';

import classes from './LoginPage.module.css';

class LoginPage extends React.Component {
    state = {
        showLoader: false,
    }

    handleLoginSubmit = (e) => {
        e.preventDefault();

        console.log(e.target.username.value);
        console.log(e.target.password.value);

        const data = {
            username: e.target.username.value,
            password: e.target.password.value
        }

        this.setState({ showLoader: true });

        axios.post("https://5d76bf96515d1a0014085cf9.mockapi.io/login", data)
            .then(response => {
                alert('Login Successful');
                this.props.onUserLogin();
                this.props.history.push("/");

                this.setState({ showLoader: false })
            })
            .catch(err => {
                alert('Login Failed!!');
                this.setState({ showLoader: false })
            })
    }

    render() {
        return (
            <div className={classes.MainContainer}>
                {this.state.showLoader ? <ProgressLoader /> : null}
                {/* <ProgressLoaderPerc /> */}
                <form onSubmit={this.handleLoginSubmit}>
                    <input type="name" name="username" placeholder="Username" />
                    <input type="password" name="password" placeholder="Password" />

                    <input type="submit" value="Login" />
                </form>
                {/* <button onClick={props.onUserLogin}>Login Now!!</button> */}
            </div>
        );

    }
}

export default LoginPage;