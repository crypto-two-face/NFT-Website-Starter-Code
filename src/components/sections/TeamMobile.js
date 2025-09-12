// src/components/TeamMobile.jsx
import React from "react";
import styled from "styled-components";
import {FaInstagram, FaThreads, FaXTwitter} from "react-icons/fa6";

/* === 色票（要改整體風格只調這裡） === */
const C = {
    bg: "#0a0b0f",
    cyan: "#22d3ee",
    magenta: "#ff00ff",
    purple: "#7c3aed",
    white: "#ffffff",
    dim: "#cfd3dc",
};

/* === 外層 === */
const Section = styled.section`
    min-height: 100svh;
    width: 100%;
    display: grid;
    place-items: center;
    background: ${C.bg};
    overflow: hidden;
`;

/* === 融合卡：影片底、圖片半透明 + 邊緣物化 === */
const FusionCard = styled.article`
    position: relative;
    width: min(94vw, 560px);
    aspect-ratio: 4 / 5; /* 手機穩定比例 */
    border-radius: 22px;
    overflow: clip;
    isolation: isolate;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.45);
`;

/* 影片主體 */
const VideoBase = styled.video`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    filter: brightness(.96) contrast(1.05) saturate(1.1);
    transform: translateZ(0);
`;

/* 圖層：主圖半透明 + 與影片相加亮融合 */
const ArtLayer = styled.div`
    position: absolute;
    inset: 0;
    background: center / cover no-repeat;
    background-image: var(--art);
    opacity: .82; /* 主體微透明 */
    mix-blend-mode: screen; /* 融合關鍵 */
    pointer-events: none;
`;

// 放在 styled 區塊
const MediaGroup = styled.div`
    position: absolute;
    inset: 0;

    /* 兩端淡出量（百分比，自己調） */
    --fade-top: 14%;
    --fade-bottom: 16%;

    /* 上下同時漸隱，Safari 需 -webkit- 前綴 */
    -webkit-mask-image: linear-gradient(
            to bottom,
            rgba(0,0,0,0) 0%,
            #000 var(--fade-top),
            #000 calc(100% - var(--fade-bottom)),
            rgba(0,0,0,0) 100%
    );
    mask-image: linear-gradient(
            to bottom,
            rgba(0,0,0,0) 0%,
            #000 var(--fade-top),
            #000 calc(100% - var(--fade-bottom)),
            rgba(0,0,0,0) 100%
    );
    -webkit-mask-mode: alpha;
    mask-mode: alpha;
`;


/* 邊框霓虹裝飾 + 側邊刻痕 */
const FrameFx = styled.div`
    position: absolute;
    inset: 0;
    pointer-events: none;
    mix-blend-mode: screen;
    opacity: .7;
    background: radial-gradient(120px 120px at 6% 6%, rgba(124, 58, 237, .35), transparent 60%),
    radial-gradient(120px 120px at 94% 6%, rgba(34, 211, 238, .32), transparent 60%),
    radial-gradient(120px 120px at 6% 94%, rgba(255, 0, 255, .28), transparent 60%),
    radial-gradient(120px 120px at 94% 94%, rgba(34, 211, 238, .32), transparent 60%),
    repeating-linear-gradient(90deg, rgba(34, 211, 238, .55) 0 2px, transparent 2px 12px) left / 2px 70% no-repeat,
    repeating-linear-gradient(90deg, rgba(255, 0, 255, .55) 0 2px, transparent 2px 12px) right / 2px 70% no-repeat;
`;

/* 底部黑到透：讓文字可讀 */
const ReadMask = styled.div`
    position: absolute;
    inset: auto 0 0 0;
    height: 38%;
    background: linear-gradient(to top, rgba(8, 10, 14, .96), transparent);
    pointer-events: none;
`;

/* 內容層（放名字、介紹、社群） */
const Content = styled.div`
    position: absolute;
    inset: 0;
    color: ${C.white};
`;

/* 名稱/職稱：底部左側的霓虹膠囊 */
const NameTag = styled.div`
    position: absolute;
    left: 12px;
    bottom: 84px;
    display: grid;
    gap: 4px;
    padding: 10px 14px;
    border-radius: 14px;
    background: linear-gradient(180deg, rgba(255, 255, 255, .10), rgba(255, 255, 255, .04));
    backdrop-filter: blur(8px) saturate(120%);
    border: 1px solid rgba(255, 255, 255, .14);
    box-shadow: 0 10px 22px rgba(0, 0, 0, .22),
    0 0 22px rgba(34, 211, 238, .18),
    0 0 26px rgba(255, 0, 255, .12);

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: inherit;
        padding: 1px;
        background: linear-gradient(135deg, ${C.purple}, ${C.cyan}, ${C.magenta});
        -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
    }
`;

const Name = styled.div`
    font-size: clamp(1.02rem, 5.2vw, 1.22rem);
    font-weight: 800;
    letter-spacing: .3px;
    text-shadow: 0 0 6px rgba(255, 0, 255, .45),
    0 0 12px rgba(34, 211, 238, .35);
`;

const Role = styled.div`
    font-size: clamp(.84rem, 4.4vw, .98rem);
    font-weight: 600;
    color: ${C.dim};
`;

/* 社群列：右下角 */
const SocialBar = styled.nav`
    position: absolute;
    right: 12px;
    bottom: 12px;
    display: flex;
    gap: 12px;

    a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 999px;
        color: ${C.white};
        background: linear-gradient(180deg, rgba(255, 255, 255, .10), rgba(255, 255, 255, .04));
        border: 1px solid rgba(255, 255, 255, .14);
        backdrop-filter: blur(8px);
        font-size: 1.2rem;
        transition: transform .15s ease, box-shadow .2s ease, background .2s ease;

        &:active {
            transform: translateY(1px) scale(.98);
        }

        &:hover {
            background: linear-gradient(180deg, rgba(255, 255, 255, .14), rgba(255, 255, 255, .06));
            box-shadow: 0 8px 20px rgba(124, 58, 237, .22), inset 0 0 10px rgba(34, 211, 238, .08);
        }
    }
`;

/* === 資源路徑 === */
const VIDEO_480 = `${process.env.PUBLIC_URL}/videos/author/author_1080.mp4`;

const TeamMobile = () => {
    return (
        <Section>
            <FusionCard>
                <MediaGroup style={{ "--fade-bottom": "16%" }}> {/* 想更長就加大數字 */}
                    {/* 影片主體 */}
                <VideoBase
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    poster={`${process.env.PUBLIC_URL}/pics/home_video_preload.webp`}
                >
                    <source src={VIDEO_480} type="video/mp4"/>
                </VideoBase>

                </MediaGroup>

                {/* 邊框效果 & 底部閱讀遮罩 */}
                <FrameFx/>
                <ReadMask/>

                {/* 內容：名稱/職稱、三段介紹、社群 */}
                <Content>
                    <NameTag>
                        <Name>@Crypto_two_face</Name>
                        <Role>Founder / Web Developer</Role>
                        <Role>創作者、網頁工程師與 NFT 愛好者</Role>
                        <Role>熱衷於區塊鏈、藝術與技術的交匯</Role>
                        <Role>夢想是賺錢，賺到足以讓世界變得更好的錢</Role>
                    </NameTag>


                    <SocialBar aria-label="社群連結">
                        <a href="https://www.instagram.com/crypto_two_face/"
                           target="_blank" rel="noopener noreferrer"
                           aria-label="Instagram" title="Instagram">
                            <FaInstagram/>
                        </a>
                        <a href="https://www.threads.net/@crypto_two_face"
                           target="_blank" rel="noopener noreferrer"
                           aria-label="Threads" title="Threads">
                            <FaThreads/>
                        </a>
                        <a href="https://x.com/crypto_two_face"
                           target="_blank" rel="noopener noreferrer"
                           aria-label="X (Twitter)" title="X (Twitter)">
                            <FaXTwitter/>
                        </a>
                    </SocialBar>
                </Content>
            </FusionCard>
        </Section>
    );
};

export default TeamMobile;
