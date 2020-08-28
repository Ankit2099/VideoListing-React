import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import VideoCard from '../VideoCard/VideoCard';

import classes from './Homepage.module.css';

class Homepage extends React.Component {
    state = {
        videoList: [],
    }

    componentDidMount() {
        axios.get("https://5d76bf96515d1a0014085cf9.mockapi.io/playlist")
        .then(response => {
            this.setState({videoList: [...response.data]});
        })
        .catch(err => {
            console.log('Call Failed!!');
        });
    }

    render() {
        return(
            <div className={classes.MainContainer}>
                <h1 className={classes.MainHeading}>Video Listing!!</h1>
                <div className={classes.VideoGrid}>
                    {
                        this.state.videoList.map(item => {
                            return <VideoCard key={item.id} id={item.id} title={item.title} thumbnail={item.thumbnail} />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Homepage;