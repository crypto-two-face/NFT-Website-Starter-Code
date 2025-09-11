import React from "react";
import styled from "styled-components";
import {FaInstagram, FaThreads, FaXTwitter} from "react-icons/fa6";

const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0d0d0d; /* 深色基底 */
    position: relative;
    overflow: hidden;
`;

// 動態漸層背景
const NeonBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(-45deg, #ff00ff, #00ffff, #1e90ff, #ff1493);
    background-size: 400% 400%;
    animation: neonGradient 12s ease infinite;
    opacity: 0.25; /* 不要太亮，做氛圍 */
    z-index: -2;

    @keyframes neonGradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`;

const Card = styled.div`
    width: 80%;
    max-width: 900px;
    height: 420px;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    position: relative;
    backdrop-filter: blur(12px);
    background: rgba(0, 0, 0, 0.5);
    border: 2px solid transparent;
    background-clip: padding-box;
    box-shadow: 0 0 25px rgba(255, 0, 255, 0.4),
    0 0 50px rgba(0, 255, 255, 0.3);

    /* 平時就有輕微漂浮 */
    animation: subtleFloat 6s ease-in-out infinite alternate;

    /* hover 更明顯 + 加 transition */
    transition: all 0.6s cubic-bezier(0.25, 1, 0.3, 1);

    &:hover {
        transform: translateY(-10px) scale(1.05);
        box-shadow: 0 0 50px rgba(255, 0, 255, 0.7),
        0 0 100px rgba(0, 255, 255, 0.5);
    }
`;


// 左邊影片
const Left = styled.div`
    flex: 1;
    position: relative;
    overflow: hidden;
    clip-path: polygon(0 0, 100% 0, 0 100%);

    video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

// 右邊資訊
const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    color: white;
`;

const Name = styled.h1`
    font-size: 2.2rem;
    margin-bottom: 1rem;
    color: #fff;
    text-shadow: 0 0 5px #ff00ff, 0 0 15px #00ffff;
`;

const Position = styled.h2`
    font-size: 1.2rem;
    font-weight: normal;
    margin-bottom: 1.5rem;
    color: #ddd;
    text-shadow: 0 0 5px #00ffff;
`;

const Bio = styled.p`
    font-size: 1rem;
    line-height: 1.6;
    color: #ccc;
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.3);
`;


const SocialLinks = styled.div`
    margin-top: 1.5rem;
    display: flex;
    gap: 1.2rem;

    a {
        color: #fff;
        font-size: 1.6rem;
        transition: all 0.3s ease;

        &:hover {
            color: #00ffff;
            transform: scale(1.2);
            text-shadow: 0 0 10px #ff00ff, 0 0 20px #00ffff;
        }
    }
`;


const AuthorCard = () => {
    return (
        <Section>
            <NeonBackground/>
            <Card>

                <Left>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        poster={`${process.env.PUBLIC_URL}/pics/home_video_preload.webp`}
                    >
                        {/* 高畫質 (桌面) */}
                        <source
                            src={`${process.env.PUBLIC_URL}/videos/author/author_av1.webm`}
                            type="video/webm; codecs=av01"
                            media="(min-width: 1025px)"
                        />
                        <source
                            src={`${process.env.PUBLIC_URL}/videos/author/author_vp9.webm`}
                            type="video/webm; codecs=vp9"
                            media="(min-width: 1025px)"
                        />
                        <source
                            src={`${process.env.PUBLIC_URL}/videos/author/author.mp4`}
                            type="video/mp4"
                            media="(min-width: 1025px)"
                        />

                        {/* 手機高階 (平板 / 大螢幕手機) */}
                        <source
                            src={`${process.env.PUBLIC_URL}/videos/author/author_720.mp4`}
                            type="video/mp4"
                            media="(min-width: 481px) and (max-width: 1024px)"
                        />

                        {/* 手機低階 (小螢幕 / 省流量) */}
                        <source
                            src={`${process.env.PUBLIC_URL}/videos/author/author_480.mp4`}
                            type="video/mp4"
                            media="(max-width: 480px)"
                        />

                    </video>
                </Left>

                <Right>
                    <Name>@Crypto_two_face</Name>
                    <Position>Founder / Web Developer</Position>
                    <Bio>創作者、網頁工程師與 NFT 愛好者</Bio>
                    <Bio>熱衷於區塊鏈、藝術與技術的交匯</Bio>
                    <Bio>夢想是賺錢，賺到足以讓世界變得更好的錢</Bio>
                    <SocialLinks>
                        <a href="https://www.instagram.com/crypto_two_face/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram/>
                        </a>
                        <a href="https://www.threads.com/@crypto_two_face" target="_blank" rel="noopener noreferrer">
                            <FaThreads/>
                        </a>
                        <a href="https://x.com/crypto_two_face" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter/>
                        </a>
                    </SocialLinks>
                </Right>
            </Card>
        </Section>
    );
};

export default AuthorCard;
