import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import classes from './VideoWatchPage.module.css';

class VideoWatchPage extends React.Component {
    state = {
        videoData: {},
    }

    componentDidMount() {
        const videoId = this.props.match.params.videoId;
        axios.get(`https://5d76bf96515d1a0014085cf9.mockapi.io/video/${videoId}`)
            .then(response => {
                console.log(response.data);
                this.setState({ videoData: { ...response.data } })
            })
            .catch(err => {
                console.log('Details API Load Failed!!')
            })
    }

    render() {
        return (
            <div className={classes.MainContainer}>
                <Link to="/">Goto Homepage</Link>
                <iframe src={`https://player.vimeo.com/video/${this.state.videoData.vimeoId}`}></iframe>
                <h1>{this.state.videoData.title}</h1>
            </div>
        );
    }
}

export default VideoWatchPage;