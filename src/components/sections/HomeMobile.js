// HomeMobile.jsx
import styled from "styled-components";
import {SiOpensea} from "react-icons/si";
import CoverVideo from "../CoverVideo";

const Section = styled.section`
    min-height: 100svh;
    background: #0c0c0e;
    position: relative;
    overflow: hidden;
    padding-top: 2.5rem; /* 固定導覽列高度 */
`;

const VideoWrapper = styled.div`
    height: calc(100svh);
    display: grid;
    grid-template-areas: "stack";
    position: relative;
    overflow: hidden;
`;

const VideoLayer = styled.div`
    grid-area: stack;
    position: relative; /* 保持普通定位即可 */
    z-index: 0;
`;

// 遮罩
const Fade = styled.div`
    //grid-area: stack;
    //align-self: end;
    //height: 45%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 55%;
    background: linear-gradient(
            to top,
            rgba(12, 12, 14, 0.99) 0%,
            rgba(12, 12, 14, 0.75) 60%,
            rgba(12, 12, 14, 0.3) 70%,
            transparent 100%
    );
    z-index: 1;
    pointer-events: none;
    transform: translateZ(0);
`;

const Content = styled.div`
    grid-area: stack;
    align-self: end;
    width: 100%;
    padding: 1.25rem 1rem calc(1rem + env(safe-area-inset-bottom));
    text-align: center;
    z-index: 2;
`;

const Title = styled.h1`
    font-size: 1.6rem;
    font-weight: 800;
    margin: 0 0 0.6rem;

    span {
        background: linear-gradient(90deg, #a855f7, #22d3ee);
        -webkit-background-clip: text;
        color: transparent;
    }
`;
const Desc = styled.p`
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.85);
    margin: 0 0 1rem;
`;
const Cta = styled.a`
    display: inline-flex;
    align-items: center;
    gap: .5rem;
    padding: 12px 18px;
    border-radius: 12px;
    font-weight: 700;
    text-decoration: none;
    background: linear-gradient(90deg, #a855f7, #22d3ee);
    color: #0b0d0f;
`;

export default function HomeMobile() {
    return (
        <Section>
            <VideoWrapper>
                <VideoLayer>
                    <CoverVideo $fill/>
                </VideoLayer>
                <Fade/>
                <Content>
                    <Title><span>A New Era Of NFTs.</span></Title>

                    <Desc>
                        Tired of ugly NFTs?
                        <br/>Try our new collection — Glitch World.
                    </Desc>

                    <Cta
                        href="https://opensea.io/zh-TW/collection/glitch-world-two-face-eth"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Explore on OpenSea"
                    >
                        <SiOpensea/> Explore on OpenSea
                    </Cta>
                </Content>
            </VideoWrapper>
        </Section>
    );
}
