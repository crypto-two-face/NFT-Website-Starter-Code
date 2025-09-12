// CoverVideo.jsx
import React, {useEffect, useRef, useState} from "react";
import styled, {css} from "styled-components";

const VideoContainer = styled.div`
    position: relative;
    display: grid;
    place-items: center;

    /* $fill = true 時，容器必須吃滿父層高度 */
    ${({ $fill }) =>
            $fill &&
            css`
      width: 100%;
      height: 100%;
      /* 疊層時更穩定 */
      grid-area: stack;
    `}

        /* 背景暈光（卡片模式用），填滿模式關閉 */
    &::before {
        content: "";
        position: absolute;
        inset: -24px;
        border-radius: 24px;
        background: radial-gradient(
                circle,
                rgba(168, 85, 247, 0.75) 20%,
                rgba(34, 211, 238, 0.45) 50%,
                transparent 80%
        );
        filter: blur(40px);
        opacity: 0;
        transition: opacity 0.35s ease;
        z-index: 0;
        ${({$fill}) => $fill && "display:none;"} /* 背景模式不需要暈光 */
    }

    &.paused::before {
        opacity: 1;
        animation: pulseGlow 3s ease-in-out infinite;
    }

    @keyframes pulseGlow {
        0%, 100% { transform: scale(1); opacity: .9; }
        50%      { transform: scale(1.08); opacity: 1; }
    }

    video {
        width: 100%;
        display: block;
        object-fit: cover;

        /* 卡片模式（預設） */
        max-width: clamp(200px, 42vw, 560px);
        aspect-ratio: 4 / 5;
        border-radius: 16px;
        box-shadow: 0 8px 24px rgba(0,0,0,.45);
        z-index: 1;

        /* 填滿模式：鋪滿父層 */
        ${({ $fill }) =>
                $fill &&
                css`
        position: absolute;
        inset: 0;
        height: 100%;
        max-width: none;
        aspect-ratio: auto;
        border-radius: 0;
        box-shadow: none;
        z-index: 0;
      `}
    }

    @media (max-width: 1024px) {
        video {
            max-width: min(92vw, 520px);
            ${({$fill}) => $fill && "max-width:none;"} /* 填滿忽略此限制 */
        }
    }
`;

const CoverVideo = ({$fill = false}) => {
    const videoRef = useRef(null);
    const [paused, setPaused] = useState(false);
    const [isTouch, setIsTouch] = useState(true);

    // 避免 SSR / 非瀏覽器環境存取 window 直接爆
    useEffect(() => {
        const touch =
            (typeof window !== "undefined" && "ontouchstart" in window) ||
            (typeof navigator !== "undefined" && navigator.maxTouchPoints > 0);
        setIsTouch(!!touch);
    }, []);

    const handleMouseEnter = () => {
        if (!isTouch && videoRef.current) {
            videoRef.current.pause();
            setPaused(true);
        }
    };
    const handleMouseLeave = () => {
        if (!isTouch && videoRef.current) {
            videoRef.current.play();
            setPaused(false);
        }
    };

    return (
        <VideoContainer className={paused ? "paused" : ""} $fill={$fill}>
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                preload="auto"
                poster={`${process.env.PUBLIC_URL}/pics/home_video_preload.webp`}
            >
                {/* 桌機優先：webm */}
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
                {/* 平板 / 大手機 */}
                <source
                    src={`${process.env.PUBLIC_URL}/videos/home_video/home_video_1080.mp4`}
                    type="video/mp4"
                    media="(min-width: 481px) and (max-width: 1024px)"
                />
                {/* 小手機 / 省流量 */}
                <source
                    src={`${process.env.PUBLIC_URL}/videos/home_video/home_video_1080.mp4`}
                    type="video/mp4"
                    media="(max-width: 480px)"
                />
                Your browser does not support the video tag.
            </video>
        </VideoContainer>
    );
};

export default CoverVideo;
