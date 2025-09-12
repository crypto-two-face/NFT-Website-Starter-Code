import React, { useState } from "react";
import styled from "styled-components";

/* ===== 外層區塊 ===== */
const Section = styled.section`
    /* 全域 box-sizing，避免 padding 讓子元素超寬 */
    &, * , *::before, *::after { box-sizing: border-box; }

    width: 100%;
    min-height: 100svh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start; /* 由上往下排，避免被置中擠壓 */
    position: relative;
    overflow-x: hidden;          /* 允許垂直滾動，禁止水平溢出 */
    overflow-y: auto;
    padding: calc(env(safe-area-inset-top) + 16px) 0
    calc(env(safe-area-inset-bottom) + 24px);

    background: linear-gradient(-45deg, #ff00ff, #1e90ff, #ff1493);
    background-size: 400% 400%;
    animation: neonFlow 15s ease infinite;

    @keyframes neonFlow {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }

    @media (prefers-reduced-motion: reduce) {
        animation: none;
        background-size: cover;
    }
`;

/* 內層寬度容器 */
const Wrapper = styled.div`
    width: min(92vw, 800px);
    margin: 0 auto;
`;

/* 標題 */
const Title = styled.h1`
    font-size: clamp(1.6rem, 6.2vw, 2.2rem);
    margin: 0 0 clamp(12px, 4vw, 24px);
    color: #fff;
    text-align: center;
    text-shadow: 0 0 8px #ff00ff, 0 0 20px #00ffff;
    position: relative;

    &::after {
        content: "";
        display: block;
        width: 80px;
        height: 3px;
        margin: 0.5rem auto 0;
        background: linear-gradient(90deg, #ff00ff, #00ffff);
        border-radius: 2px;
    }
`;

/* 卡片（手指可點） */
const Card = styled.button`
    width: 100%;
    margin: 0 0 clamp(10px, 3.4vw, 16px);
    padding: clamp(14px, 4vw, 20px) clamp(16px, 5vw, 24px);
    border: 1px solid rgba(255,255,255,.2);
    border-radius: 15px;
    background: rgba(0,0,0,.4);
    backdrop-filter: blur(10px);
    color: #fff;
    cursor: pointer;
    text-align: left;
    transition: transform .2s ease, box-shadow .3s ease, background .2s ease;
    -webkit-tap-highlight-color: transparent;

    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 12px;

    &:focus-visible {
        outline: 2px solid rgba(34,211,238,.9);
        outline-offset: 2px;
    }
    &:active { transform: translateY(1px); }
    &:hover {
        background: rgba(0,0,0,.46);
        box-shadow: 0 0 20px rgba(255, 0, 255, .45),
        0 0 40px rgba(0, 255, 255, .35);
    }
`;

const Question = styled.span`
    font-size: clamp(1rem, 4.6vw, 1.2rem);
    font-weight: 700;
    letter-spacing: .2px;
    word-break: break-word; /* 長字不會把卡片撐爆 */
`;

const Toggle = styled.span`
    font-size: clamp(1.3rem, 6.4vw, 1.6rem);
    line-height: 1;
    opacity: .9;
`;

const Answer = styled.div`
  grid-column: 1 / -1; /* 讓答案占滿整列 */
  margin-top: 10px;
  font-size: clamp(.92rem, 4.2vw, .98rem);
  line-height: 1.66;
  color: #ddd;
`;

/* ===== 元件 ===== */
const Faq = () => {
    const [open, setOpen] = useState(null);
    const toggle = (idx) => setOpen(open === idx ? null : idx);

    const faqs = [
        { q: "我可以在哪裡查看我的 NFTs？",
            a: "一旦鑄造或購買，只需連接到您的 OpenSea 帳戶即可查看您的 NFT。" },
        { q: "如何使用我的 NFT？",
            a: "您可以把它當成頭像、展示品或作為社群入場憑證；功能端會隨專案更新而擴充。" },
        { q: "我可以提客製化嗎？",
            a: "可以，去作者的 Threads 留言祈願，或直接私訊需求內容與風格參考。" },
    ];

    return (
        <Section>
            <Wrapper>
                <Title>常見問題</Title>

                {faqs.map((item, i) => (
                    <Card
                        key={i}
                        onClick={() => toggle(i)}
                        aria-expanded={open === i}
                        aria-controls={`faq-${i}`}
                    >
                        <Question>{item.q}</Question>
                        <Toggle>{open === i ? "−" : "+"}</Toggle>

                        {open === i && (
                            <Answer id={`faq-${i}`}>
                                {item.a}
                            </Answer>
                        )}
                    </Card>
                ))}
            </Wrapper>
        </Section>
    );
};
export default Faq;
