import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

import Button from './Button/Button';

import classes from './App.module.css';
import Homepage from './Homepage/Homepage';
import VideoWatchPage from './VideoWatchPage/VideoWatchPage';
import Topbar from './Topbar/Topbar';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import LoginPage from './LoginPage/LoginPage';

class App extends React.Component {
  state = {
    isUserLoggedIn: false,
  }

  onUserLogin = () => {
    this.setState({ isUserLoggedIn: true });
  }

  onUserLogout = () => {
    this.setState({ isUserLoggedIn: false });
  }

  render() {
    return (
      <BrowserRouter>
        <div className={classes.App}>
          <Topbar loginStatus={this.state.isUserLoggedIn} logoutClick={this.onUserLogout} />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/video/watch/:videoId" component={VideoWatchPage} />
            <Route path="/login" render={() => this.state.isUserLoggedIn ? <Redirect to="/" /> : <LoginPage onUserLogin={this.onUserLogin} />} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;