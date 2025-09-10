import React from "react";
import styled from "styled-components";
import BgVideo from "../../assets/author.mp4";

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
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
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
  text-shadow: 0 0 3px rgba(255,255,255,0.3);
`;

const AuthorCard = () => {
    return (
        <Section>
            <NeonBackground />
            <Card>
                <Left>
                    <video autoPlay loop muted playsInline>
                        <source src={BgVideo} type="video/mp4" />
                    </video>
                </Left>
                <Right>
                    <Name>@Crypto_two_face</Name>
                    <Position>Founder / Web Developer</Position>
                    <Bio>創作者、網頁工程師與 NFT 愛好者</Bio>
                    <Bio>熱衷於區塊鏈、藝術與技術的交匯</Bio>
                    <Bio>夢想是賺錢，賺到足以讓世界變得更好的錢</Bio>
                </Right>
            </Card>
        </Section>
    );
};

export default AuthorCard;
