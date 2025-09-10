import React, { useState } from "react";
import styled from "styled-components";

const Section = styled.section`
    width: 100%;
    min-height: 100vh;
    //padding: 4rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background: linear-gradient(-45deg, #ff00ff, #1e90ff, #ff1493);
    background-size: 400% 400%;
    animation: neonFlow 15s ease infinite;

    @keyframes neonFlow {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
`;


// 流動背景
const NeonBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(-45deg, #ff00ff, #00ffff, #1e90ff, #ff1493);
    background-size: 400% 400%;
    animation: neonFlow 15s ease infinite;
    z-index: -2;

    @keyframes neonFlow {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
`;

// 玻璃效果卡片
const Card = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 1rem 0;
    padding: 1.5rem 2rem;
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    cursor: pointer;
    transition: all 0.4s ease;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 0 20px rgba(255, 0, 255, 0.5),
        0 0 40px rgba(0, 255, 255, 0.4);
    }
`;

const Question = styled.h3`
    font-size: 1.2rem;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Answer = styled.p`
    margin-top: 1rem;
    font-size: 0.95rem;
    line-height: 1.6;
    color: #ddd;
`;

const Title = styled.h1`
    font-size: 2.2rem;
    margin-bottom: 2rem;
    color: white;
    text-shadow: 0 0 8px #ff00ff, 0 0 20px #00ffff;
    position: relative;

    &::after {
        content: "";
        display: block;
        width: 80px;
        height: 3px;
        margin: 0.5rem auto;
        background: linear-gradient(90deg, #ff00ff, #00ffff);
        border-radius: 2px;
    }
`;

const Faq = () => {
    const [open, setOpen] = useState(null);

    const toggle = (index) => {
        setOpen(open === index ? null : index);
    };

    const faqs = [
        {
            q: "我可以在哪裡查看我的 NFTs？",
            a: "一旦鑄造或購買，只需連接到您的 OpenSea 帳戶即可查看您的 NFT。",
        },
        {
            q: "如何使用我的 NFT？",
            a: "您將能夠將您的 NFT 用作酷酷的頭像，並進入社群，除此之外目前確實沒屌用。",
        },
        {
            q: "我可以提客製化嗎？",
            a: "可以，去作者的threads找一篇最新的推文留言祈願，他會看到的，沒看到就多留幾次。",
        },
    ];

    return (
        <Section>
            <NeonBackground />
            <Title>常見問題</Title>
            {faqs.map((item, i) => (
                <Card key={i} onClick={() => toggle(i)}>
                    <Question>
                        {item.q}
                        <span>{open === i ? "−" : "+"}</span>
                    </Question>
                    {open === i && <Answer>{item.a}</Answer>}
                </Card>
            ))}
        </Section>
    );
};

export default Faq;
