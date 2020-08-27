import React from 'react';
import classes from './VideoCard.module.css';

const VideoCard = (props) => {

    return(
        <div className={classes.VideoCard} onClick={() => alert(`Clicked for ${props.id}`)}>
            <img className={classes.Thumbnail} src={props.thumbnail} alt="Video Thumbnail" />
            <h3 className={classes.Title}>{props.title}</h3>
        </div>
    );
}

export default VideoCard;