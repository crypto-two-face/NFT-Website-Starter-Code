// src/components/sections/Home.js
import React from "react";
import styled from "styled-components";
import CoverVideo from "../CoverVideo";

/* === 外層區塊：置中兩欄 === */
const Section = styled.section`
    min-height: ${({ theme }) => `calc(100vh - ${theme.navHeight})`};
    width: 100%;
    background: #0c0c0e;
    display: grid;
    place-items: center;
    padding: clamp(24px, 4vw, 56px) 20px;
`;

const Container = styled.div`
    width: min(1200px, 94vw);
    display: grid;
    grid-template-columns: 1.05fr 1fr; /* 左卡片略大一點點 */
    align-items: center;
    gap: clamp(16px, 4vw, 48px);

    @media (max-width: 1024px) {
        grid-template-columns: 1fr; /* 手機/平板上下排 */
    }
`;

/* === 中央玻璃卡片 === */
const Card = styled.div`
  z-index: 1;
  padding: clamp(20px, 3.8vw, 40px);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  color: #fff;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.45);

  @media (max-width: 1024px) {
    order: 1; /* 手機優先看到文字 */
  }
`;

const Kicker = styled.div`
  font-size: 0.82rem;
  letter-spacing: 0.25em;
  opacity: 0.75;
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
  color: rgba(255, 255, 255, 0.82);
  font-size: clamp(14px, 1.7vw, 16px);
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
`;

const Primary = styled.a`
  padding: 12px 20px;
  border-radius: 12px;
  text-decoration: none;
  color: #0b0d0f;
  background: linear-gradient(90deg, #a855f7, #22d3ee);
  font-weight: 700;
  box-shadow: 0 0 15px rgba(34, 211, 238, 0.6);
`;

const Ghost = styled.a`
  padding: 12px 20px;
  border-radius: 12px;
  text-decoration: none;
  color: #cfd5db;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.03);
`;

/* 影片外層：控制寬度與對齊 */
const Media = styled.div`
  display: grid;
  place-items: center;

  @media (max-width: 1024px) {
    order: 2;
  }
`;

export default function Home() {
    return (
        <Section id="home" aria-label="Hero">
            <Container>
                <Card>
                    <Kicker>DISCOVER A NEW ERA OF COOL</Kicker>
                    <Title>
                        A New Era Of <br />
                        <span>NFTs.</span>
                    </Title>
                    <Desc>
                        Bored Of Apes? Try our new Ape Killers collection — fresh style, clean art, and a community-first vibe.
                    </Desc>
                    <Actions>
                        <Primary href="#nfts">Explore Collection</Primary>
                        <Ghost href="https://opensea.io" target="_blank" rel="noreferrer">
                            View on OpenSea
                        </Ghost>
                    </Actions>
                </Card>

                <Media>
                    <CoverVideo />
                </Media>
            </Container>
        </Section>
    );
}
