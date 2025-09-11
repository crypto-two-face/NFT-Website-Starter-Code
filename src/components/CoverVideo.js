import React, {useRef, useState} from "react";
import styled from "styled-components";

const VideoContainer = styled.div`
    position: relative;
    display: grid;
    place-items: center;

    video {
        width: 100%;
        max-width: clamp(200px, 42vw, 560px);
        aspect-ratio: 4 / 5;
        border-radius: 16px;
        object-fit: cover;
        box-shadow: 0 8px 24px rgba(0, 0, 0, .45);
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
                rgba(168, 85, 247, 0.75) 20%, /* 更亮、更集中 */ rgba(34, 211, 238, 0.45) 50%, /* 中段過渡 */ transparent 80% /* 拖尾拉長 */
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
        0%, 100% {
            transform: scale(1);
            opacity: 0.9;
        }
        50% {
            transform: scale(1.08);
            opacity: 1;
        }
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

    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    return (
        <VideoContainer className={paused ? "paused" : ""}>
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                {...(!isTouchDevice && {
                    onMouseEnter: handleMouseEnter,
                    onMouseLeave: handleMouseLeave,
                })}
                preload="auto"
                poster={`${process.env.PUBLIC_URL}/pics/home_video_preload.webp`}
            >
                {/* 高畫質 (桌面) */}
                <source
                    src={`${process.env.PUBLIC_URL}/videos/home_video/home_video_av1.webm`}
                    type="video/webm; codecs=av01"
                    media="(min-width: 1025px)"
                />
                <source
                    src={`${process.env.PUBLIC_URL}/videos/home_video/home_video_vp9.webm`}
                    type="video/webm; codecs=vp9"
                    media="(min-width: 1025px)"
                />
                <source
                    src={`${process.env.PUBLIC_URL}/videos/home_video/home_video.mp4`}
                    type="video/mp4"
                    media="(min-width: 1025px)"
                />

                {/* 手機高階 (平板 / 大螢幕手機) */}
                <source
                    src={`${process.env.PUBLIC_URL}/videos/home_video/home_video_720.mp4`}
                    type="video/mp4"
                    media="(min-width: 481px) and (max-width: 1024px)"
                />

                {/* 手機低階 (小螢幕 / 省流量) */}
                <source
                    src={`${process.env.PUBLIC_URL}/videos/home_video/home_video_480.mp4`}
                    type="video/mp4"
                    media="(max-width: 480px)"
                />

                Your browser does not support the video tag.
            </video>
        </VideoContainer>
    );
};

export default CoverVideo;
