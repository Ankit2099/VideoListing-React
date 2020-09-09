import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import classes from './VideoWatchPage.module.css';
import VideoCard from '../VideoCard/VideoCard';

class VideoWatchPage extends React.Component {
    state = {
        videoData: {},
        isBookmarked: false,
        playlist: []
    }

    checkIfBookmarked = () => {
        const videoArr = localStorage.getItem('videoData') === null ? [] : JSON.parse(localStorage.getItem('videoData'));
        let isBookmarkedInStorage = false;
        const updatedArr = videoArr.map(item => {
            if (item.id === this.state.videoData.id && item.isBookmarked) {
                isBookmarkedInStorage = true;
            }
        })
        this.setState({ isBookmarked: isBookmarkedInStorage });
    }

    fetchVideoDetails = () => {
        const videoId = this.props.match.params.videoId;
        axios.get(`https://5d76bf96515d1a0014085cf9.mockapi.io/video/${videoId}`)
            .then(response => {
                console.log(response.data);
                this.setState({ videoData: { ...response.data } })
                this.checkIfBookmarked();
            })
            .catch(err => {
                console.log('Details API Load Failed!!')
            })
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     if (this.props.match.params.videoId !== nextProps.match.params.videoId) {
    //         return true
    //     }

    //     if(this.state.playlist !== nextState.playlist) {
    //         return true;
    //     }

    //     if (this.state.isBookmarked !== nextState.isBookmarked) {
    //         return true
    //     }

    //     return false;
    // }

    componentDidMount() {
        axios.get('https://5d76bf96515d1a0014085cf9.mockapi.io/playlist')
            .then(response => {
                console.log(response.data);
                this.setState({ playlist: response.data });
                this.fetchVideoDetails();
            })
            .catch()
    }

    componentDidUpdate() {
        const videoId = this.props.match.params.videoId;
        console.log('Component Updated!!')
        if (videoId !== this.state.videoData.id) {
            this.fetchVideoDetails();
        }
    }

    onBookmarkClicked = () => {
        const videoArr = localStorage.getItem('videoData') === null ? [] : JSON.parse(localStorage.getItem('videoData'));

        const vData = {
            id: this.state.videoData.id,
            isBookmarked: true
        }
        let isExist = false;
        const updatedArr = videoArr.map(item => {
            if (item.id === vData.id) {
                item.isBookmarked = !item.isBookmarked;
                isExist = true;

                this.setState({ isBookmarked: item.isBookmarked });
            }

            return item;
        })
        if (!isExist) {
            updatedArr.push(vData);
            this.setState({ isBookmarked: true });
        }

        localStorage.setItem('videoData', JSON.stringify(updatedArr));
    }

    render() {
        return (
            <div className={classes.MainContainer}>
                <div className={classes.PlayerSection}>
                    <iframe src={`https://player.vimeo.com/video/${this.state.videoData.vimeoId}`}></iframe>
                    <h1>{this.state.videoData.title} <i onClick={this.onBookmarkClicked} className={["far", "fa-bookmark", this.state.isBookmarked ? classes.Bookmarked : null].join(' ')}></i></h1>
                </div>

                <div className={classes.PlaylistSection}>
                    {
                        this.state.playlist.map(item => {
                            return <VideoCard key={item.id} id={item.id} thumbnail={item.thumbnail} title={item.title} isActive={item.id === this.state.videoData.id} />
                        })
                    }
                </div>
            </div>
        );
    }
}

export default VideoWatchPage;