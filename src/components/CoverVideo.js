// src/components/CoverVideo.js
import React from "react";
import styled from "styled-components";
import GIF from "../assets/webp/output.mp4";

const VideoContainer = styled.div`
    width: 100%;
    display: grid;
    place-items: center;

    video {
        width: 100%;
        max-width: clamp(320px, 42vw, 560px); /* 桌機控制寬度上限 */
        aspect-ratio: 4 / 5;                   /* 調整比例（更接近你的圖像風格） */
        border-radius: 16px;
        object-fit: cover;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
    }

    @media (max-width: 1024px) {
        video {
            max-width: min(92vw, 520px); /* 手機平板寬一些，但不爆版 */
        }
    }
`;

const CoverVideo = () => {
    return (
        <VideoContainer>
            <video autoPlay loop muted playsInline>
                <source src={GIF} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </VideoContainer>
    );
};

export default CoverVideo;
