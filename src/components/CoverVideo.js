import React, { useRef, useState } from "react";
import styled from "styled-components";
import GIF from "../assets/webp/output.mp4";

const VideoContainer = styled.div`
    position: relative;
    display: grid;
    place-items: center;

    video {
        width: 100%;
        max-width: clamp(320px, 42vw, 560px);
        aspect-ratio: 4 / 5;
        border-radius: 16px;
        object-fit: cover;
        box-shadow: 0 8px 24px rgba(0,0,0,.45);
        z-index: 1;
    }

    /* 外圍暈光：預設隱藏 */
    &::before {
        content: "";
        position: absolute;
        inset: -24px; /* 暈光擴散範圍 */
        border-radius: 24px;
        background: radial-gradient(
                circle,
                rgba(168,85,247,0.75) 20%,   /* 更亮、更集中 */
                rgba(34,211,238,0.45) 50%,   /* 中段過渡 */
                transparent 80%               /* 拖尾拉長 */
        );

        filter: blur(40px);
        opacity: 0;
        transition: opacity .35s ease;
        z-index: 0;
    }

    /* 當 paused 時顯示暈光 */
    &.paused::before {
        opacity: 1;
        animation: pulseGlow 3s ease-in-out infinite;
    }

    @keyframes pulseGlow {
        0%, 100% { transform: scale(1); opacity: 0.9; }
        50% { transform: scale(1.08); opacity: 1; }
    }

    @media (max-width: 1024px) {
        video {
            max-width: min(92vw, 520px);
        }
    }
`;

const CoverVideo = () => {
    const videoRef = useRef(null);
    const [paused, setPaused] = useState(false);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            setPaused(true);
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setPaused(false);
        }
    };

    return (
        <VideoContainer className={paused ? "paused" : ""}>
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <source src={GIF} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </VideoContainer>
    );
};

export default CoverVideo;
