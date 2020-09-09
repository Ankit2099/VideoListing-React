import React from 'react';
import axios from 'axios';

import ProgressLoader from '../ProgressLoader/ProgressLoader';
import ProgressLoaderPerc from '../ProgressLoaderPerc/ProgressLoaderPerc';

import classes from './LoginPage.module.css';

class LoginPage extends React.Component {
    state = {
        showLoader: false,
        usernameVal: '',
        passwordVal: '',
    }

    handleLoginSubmit = (e) => {
        e.preventDefault();

        const data = {
            username: this.state.usernameVal,
            password: this.state.passwordVal
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

    handleInputChanges = (e, name) => {
        switch(name) {
            case "username":
                this.setState({usernameVal: e.target.value});
                break;
            case "password":
                this.setState({passwordVal: e.target.value});
                break;
            default:
                console.log('Name not identified!!')
        }
    }

    render() {
        return (
            <div className={classes.MainContainer}>
                {this.state.showLoader ? <ProgressLoader /> : null}
                {/* <ProgressLoaderPerc /> */}
                <form onSubmit={this.handleLoginSubmit}>
                    <input type="name" name="username" placeholder="Username" value={this.state.usernameVal} onInput={(e) => this.handleInputChanges(e, "username")} />
                    <input type="password" name="password" placeholder="Password" value={this.state.passwordVal} onInput={(e) => this.handleInputChanges(e, "password")} />

                    <input type="submit" value="Login" />
                </form>
                {/* <button onClick={props.onUserLogin}>Login Now!!</button> */}
            </div>
        );

    }
}

export default LoginPage;