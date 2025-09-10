// src/components/sections/Home.js
import React from "react";
import styled, { keyframes } from "styled-components";

// === 資產：跑馬燈圖片 ===
import chip1 from  "../../assets/webp/image_1.webp";
import chip2 from  "../../assets/webp/image_2.webp";
import chip3 from  "../../assets/webp/image_3.webp";
import chip4 from  "../../assets/webp/image_4.webp";
import chip5 from  "../../assets/webp/image_5.webp";
import chip6 from  "../../assets/webp/image_6.webp";
import chip7 from  "../../assets/webp/image_7.webp";
import chip8 from  "../../assets/webp/image_8.webp";
import chip9 from  "../../assets/webp/image_9.webp";
import chip10 from "../../assets/webp/image_10.webp";

const chips = [chip1, chip2, chip3, chip4, chip5, chip6, chip7, chip8, chip9, chip10];

/* 流動動畫 */
const bigScroll = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
`;

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100%;
  background: #0c0c0e;
  display: grid;
  place-items: center;
  padding: clamp(72px, 10vh, 120px) 0 96px;
  overflow: hidden;
`;

/* 左右分欄 */
const Grid = styled.div`
  width: min(1200px, 92%);
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: clamp(28px, 5vw, 48px);
  align-items: center;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

/* 左：玻璃卡 */
const Card = styled.div`
  position: relative;
  padding: clamp(20px, 3.6vw, 32px);
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.04));
  border: 1px solid rgba(255,255,255,.18);
  box-shadow: 0 12px 40px rgba(0,0,0,.35);
  color: #fff;
  backdrop-filter: blur(10px);
`;

const Kicker = styled.div`
  font-size: .82rem;
  letter-spacing: .25em;
  opacity: .75;
  margin-bottom: 12px;
`;

const Title = styled.h1`
  font-size: clamp(34px, 6.2vw, 64px);
  line-height: 1.05;
  margin: 6px 0 10px;
  font-weight: 800;
`;

const Accent = styled.span`
  background: linear-gradient(90deg, #a855f7, #22d3ee, #60a5fa);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const Desc = styled.p`
  margin-top: 10px;
  color: rgba(255,255,255,.82);
  font-size: clamp(14px, 1.7vw, 16px);
`;

const Actions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: clamp(14px, 2.2vw, 20px);
  flex-wrap: wrap;
`;

const Primary = styled.a`
  padding: 12px 18px;
  border-radius: 12px;
  text-decoration: none;
  color: #0b0d0f;
  background: linear-gradient(90deg, #a855f7, #22d3ee);
  font-weight: 700;
  box-shadow: 0 8px 18px rgba(168,85,247,.35);
  &:hover { filter: brightness(1.06); }
`;

const Ghost = styled.a`
  padding: 12px 18px;
  border-radius: 12px;
  text-decoration: none;
  color: #cfd5db;
  border: 1px solid rgba(255,255,255,.2);
  background: rgba(255,255,255,.03);
  &:hover { background: rgba(255,255,255,.08); }
`;

/* 右：整區 NFT 流動牆 */
const Visual = styled.div`
  position: relative;
  min-height: 480px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;

  @media (max-width: 960px) {
    min-height: 320px;
  }
`;

const Carousel = styled.div`
  display: flex;
  width: 200%; /* 兩倍寬，循環無縫 */
  animation: ${bigScroll} 60s linear infinite; /* 越大越慢 */
`;

const Slide = styled.img`
  width: 20%;   /* 一張圖佔 Carousel 寬度的 20% */
  height: auto;
  object-fit: cover;
`;

export default function Home() {
    return (
        <Section id="home" aria-label="Hero">
            <Grid>
                {/* 左：文案玻璃卡 */}
                <Card>
                    <Kicker>DISCOVER A NEW ERA OF COOL</Kicker>
                    <Title>
                        A New Era Of <br />
                        <Accent>NFTs.</Accent>
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

                {/* 右：全區域流動 NFT 牆 */}
                <Visual>
                    <Carousel>
                        {[...chips, ...chips].map((src, i) => (
                            <Slide src={src} alt="" key={i} />
                        ))}
                    </Carousel>
                </Visual>
            </Grid>
        </Section>
    );
}
