import React, { Component } from "react";
import ReactPlayer from 'react-player'

class Video1 extends Component {
    render () {
        return (
        <div className='player-wrapper'>
            <ReactPlayer
            className='react-player'
            url= 'https://www.facebook.com/seektheworld2015/videos/1106083129773207/'
            type='video/mp4'
            width='100%'
            height='100%'
            controls = {true}
            />
        </div>
        )
    }
}

export default Video1;