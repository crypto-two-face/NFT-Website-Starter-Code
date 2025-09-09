import React from 'react'
import styled from "styled-components";
import GIF from '../assets/Home Video.mp4'


const VideoContainer = styled.div`
    width: 100%;

    video {
        width: 100%;
        height: auto;
    }
`


const CoverVideo = () => {
    return (
        <VideoContainer>
            <video autoPlay loop muted>
                <source src={GIF} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </VideoContainer>
    )
}

export default CoverVideo
