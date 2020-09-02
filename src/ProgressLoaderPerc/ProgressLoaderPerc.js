import React from 'react';

import classes from './ProgressLoaderPerc.module.css';
import { render } from '@testing-library/react';

class ProgressLoaderPerc extends React.Component {
    state = {
        width: 0,
    }

    componentDidMount() {
        const intervalId = setInterval(() => {
            console.log('Set interval Callback!!')
            if (this.state.width < 100) {
                const updatedWidth = this.state.width + 10;
                this.setState({ width: updatedWidth })
            } else {
                clearInterval(intervalId);
            }
        }, 1000);
    }

    render() {
        return (
            <div className={classes.ProgressWrapper}>
                <div className={classes.ProgressBar} style={{ width: `${this.state.width}%` }}></div>
            </div>
        );
    }
}

export default ProgressLoaderPerc;