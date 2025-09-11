// src/components/sections/Home.js
import React, { useRef } from "react";
import styled from "styled-components";
import CoverVideo from "../CoverVideo";
import { SiOpensea } from "react-icons/si";

/* ===== 背景：低調科幻網格 + 漸層暈光 ===== */
const BgFx = styled.div`
    pointer-events: none;
    position: absolute;
    inset: 0;

    /* 細點陣網格 */
    background:
            radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 1px) 0 0 / 24px 24px,
            radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 1px) 12px 12px / 24px 24px;
    mask-image: linear-gradient(to bottom, transparent 0%, #000 12%, #000 88%, transparent 100%);

    /* 背後兩團柔光 */
    &::before,
    &::after {
        content: "";
        position: absolute;
        border-radius: 50%;
        filter: blur(40px);
        opacity: .25;
        animation: floatMove 10s ease-in-out infinite alternate;
    }

    &::before {
        width: 60vw; height: 60vw;
        left: -8vw; top: 10vh;
        background: radial-gradient(
                closest-side,
                #22d3ee 30%,   /* 核心區縮小 */
                rgba(34,211,238,0.3) 60%, /* 過渡帶加長 */
                transparent 85%
        );
        animation-delay: -6s; /* 讓兩團不同步 */
    }

    &::after {
        width: 50vw; height: 50vw;
        right: -6vw; bottom: 8vh;
        background: radial-gradient(
                closest-side,
                #a855f7 25%,
                rgba(168,85,247,0.25) 60%,
                transparent 90%
        );
    }

    @keyframes floatMove {
        0%   { transform: translate(0, 0) scale(1); }
        50%  { transform: translate(6vw, -4vh) scale(1.1); }
        100% { transform: translate(-4vw, 5vh) scale(0.9); }
    }
`;


/* ===== 外層區塊：置中兩欄 ===== */
const Section = styled.section`
    position: relative;
    min-height: ${({ theme }) => `calc(100vh - ${theme.navHeight})`};
    width: 100%;
    background: #0c0c0e;
    display: grid;
    place-items: center;
    padding: clamp(24px, 4vw, 56px) 20px;
    overflow: hidden;
`;

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    display: grid;
    grid-template-columns: 1.05fr 1fr; /* 左文案略大，視覺平衡 */
    align-items: center;
    gap: clamp(16px, 4vw, 48px);

    @media (max-width: 480px) {
        grid-template-columns: 1fr; /* 手機上下排 */
    }
`;

/* ===== 卡片：玻璃 + 霓虹邊 + 傾斜 + 光澤 ===== */
const Card = styled.div`
    position: relative;
    z-index: 1;
    padding: clamp(20px, 3.8vw, 40px);
    border-radius: 22px;
    background: rgba(255,255,255,.06);
    border: none;
    color: #fff;
    box-shadow: 0 12px 40px rgba(0,0,0,.45);
    backdrop-filter: blur(12px);
    transform-style: preserve-3d;
    will-change: transform, box-shadow;

    /* 動態傾斜（由 style inline 設定變數） */
    transform: perspective(900px)
    rotateX(var(--ry, 0deg))
    rotateY(var(--rx, 0deg))
    translateZ(0);

    /* 霓虹漸層外框（mask 技巧只露出邊） */
    &::before {
        content: "";
        position: absolute;
        inset: 0;
        padding: 1px;
        border-radius: inherit;
        background: linear-gradient(120deg, #a855f7, #22d3ee, #60a5fa);
        -webkit-mask: linear-gradient(#000 0 0) content-box,
        linear-gradient(#000 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
    }

    /* 跟隨滑鼠的光澤 */
    &::after {
        content: "";
        position: absolute;
        inset: -1px;
        border-radius: inherit;
        background:
                radial-gradient(600px 220px at var(--mx,50%) var(--my,50%),
                rgba(255,255,255,.14), transparent 55%);
        mix-blend-mode: screen;
        pointer-events: none;
        transition: opacity .25s ease;
        opacity: .65;
    }

    /* 掃描線細節（很淡）*/
    background-image:
            repeating-linear-gradient(180deg,
            rgba(255,255,255,.04) 0px,
            rgba(255,255,255,.04) 1px,
            transparent 1px,
            transparent 3px);
    background-blend-mode: overlay;

    @media (prefers-reduced-motion: reduce) {
        transform: none !important;
        &::after { display: none; }
    }

    @media (max-width: 480px) {
        padding: 16px;
    }
`;

const Kicker = styled.div`
    font-size: .82rem;
    letter-spacing: .25em;
    opacity: .75;
    margin-bottom: 12px;
`;

const Title = styled.h1`
    font-size: clamp(32px, 5.5vw, 60px);
    line-height: 1.12;
    margin: 6px 0 12px;
    font-weight: 800;

    span {
        background: linear-gradient(90deg, #a855f7, #22d3ee, #60a5fa);
        -webkit-background-clip: text;
        color: transparent;
    }
`;

const Desc = styled.p`
    margin-top: 10px;
    color: rgba(255,255,255,.82);
    font-size: clamp(14px, 1.7vw, 16px);
`;

/* 按鈕：只留一顆，帶微發光 + 高速亮片 */
const Cta = styled.a`
    display: inline-block;
    margin-top: 20px;
    padding: 12px 22px;
    border-radius: 12px;
    text-decoration: none;
    color: #0b0d0f;
    font-weight: 800;
    background: linear-gradient(90deg, #a855f7, #22d3ee);
    box-shadow: 0 0 20px rgba(34,211,238,.6);
    position: relative;
    overflow: hidden;

    /* 斜切亮片掃過 */
    &::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(120deg,
        transparent 0%,
        rgba(255,255,255,.6) 40%,
        transparent 60%);
        transform: translateX(-120%);
        transition: transform .6s ease;
        mix-blend-mode: screen;
    }
    &:hover::after {
        transform: translateX(120%);
    }
`;

// 右側影片外層：不加外框
const Media = styled.div`
    display: grid;
    place-items: center;

    @media (max-width: 1024px) {
        order: 2;
    }
`;


export default function Home() {
    const cardRef = useRef(null);

    const onMove = (e) => {
        const el = cardRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // 正中心為 0deg，邊緣最多 8deg
        const rx = ((x / rect.width) - 0.5) * 16;  // rotateY
        const ry = -((y / rect.height) - 0.5) * 16; // rotateX

        el.style.setProperty("--rx", `${rx}deg`);
        el.style.setProperty("--ry", `${ry}deg`);
        el.style.setProperty("--mx", `${x}px`);
        el.style.setProperty("--my", `${y}px`);
    };

    const onLeave = () => {
        const el = cardRef.current;
        if (!el) return;
        el.style.setProperty("--rx", `0deg`);
        el.style.setProperty("--ry", `0deg`);
    };

    return (
        <Section id="home" aria-label="Hero">
            <BgFx />
            <Container>
                <Card
                    ref={cardRef}
                    onMouseMove={onMove}
                    onMouseLeave={onLeave}
                >
                    <Kicker>重新定義藝術</Kicker>
                    <Title>
                        A New Era Of <br />
                        <span>NFTs.</span>
                    </Title>
                    <Desc>
                        Tired Of UGLY NFTs?
                    </Desc>
                    <Desc>
                        Try our new collection — Glitch World.
                    </Desc>

                    <Cta href="https://opensea.io/zh-TW/collection/glitch-world-two-face-eth"><SiOpensea />Explore on OpenSea</Cta>
                </Card>

                <Media>
                    <CoverVideo />
                </Media>
            </Container>
        </Section>
    );
}
