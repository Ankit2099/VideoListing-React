import React from 'react';
import axios from 'axios';

import Button from './Button/Button';

import classes from './App.module.css';

class App extends React.Component {
  state = {
    totalCount: 0,
    totalLikeCount: 1,
    totalDislikeCount: 1,
  }

  handleIncrementClick = () => {
    this.setState((oldState) => {
      return {
        totalCount: oldState.totalCount + 1, 
      }
    });
  }
  
  handleDecrementClick = () => {
    this.setState({
      totalCount: this.state.totalCount - 1, 
    });
  }

  componentDidUpdate() {
    console.log('App Updated!!')
  }

  render() {
    console.log('Render App')
    return (
      <div className={classes.App}>
        <h1>Current Count: {this.state.totalCount}</h1>
        <p>Min count:0 and Max count: 5</p>
        <Button onBtnClick={this.handleIncrementClick} label={"Count++"} totalCount={this.state.totalCount} />
        <Button onBtnClick={this.handleDecrementClick} label={"Count--"} totalCount={this.state.totalCount} />
      </div>
    );
  }
}

export default App;