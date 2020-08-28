import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import classes from './VideoWatchPage.module.css';

class VideoWatchPage extends React.Component {
    // Video Details API: https://5d76bf96515d1a0014085cf9.mockapi.io/video/1

    render() {
        return(
            <div className={classes.MainContainer}>
                <Link to="/">Goto Homepage</Link>
                <h1>Video Watch Page for ID: {this.props.match.params.videoId}!!</h1>
            </div>
        );
    }
}

export default VideoWatchPage;