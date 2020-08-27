import React from 'react';

import classes from './Button.module.css';

class Button extends React.Component {
    state = {
        counter: this.props.totalCount
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Should Button Update??');
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Button Did Update!!')
    }

    render() {
        console.log('Generating Button!!')    
        return(
            <button onClick={this.props.onBtnClick} className={classes.ActionButton}>{this.props.label + ' => ' + this.state.counter} </button>
        )
    }
}

export default Button;