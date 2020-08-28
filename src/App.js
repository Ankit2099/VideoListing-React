import React from 'react';
import { Route,  BrowserRouter } from 'react-router-dom';

import Button from './Button/Button';

import classes from './App.module.css';
import Homepage from './Homepage/Homepage';
import VideoWatchPage from './VideoWatchPage/VideoWatchPage';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className={classes.App}>
          <Route exact path="/" component={Homepage} />
          <Route path="/video/watch/:videoId" component={VideoWatchPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;