import React from "react";
import styled from "styled-components";
import {FaInstagram, FaThreads, FaXTwitter} from "react-icons/fa6"; // Threads 用 fa6
import { SiOpensea } from "react-icons/si";

const FooterContainer = styled.footer`
    width: 100%;
    padding: 2rem 1rem;
    background: #0d0d0d;
    border-top: 2px solid transparent;
    border-image: linear-gradient(90deg, #ff00ff, #00ffff, #1e90ff, #ff1493) 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    color: #ccc;
    font-size: 0.9rem;
    text-align: center;
`;

const SocialLinks = styled.div`
    display: flex;
    gap: 1.5rem;

    a {
        color: #fff;
        font-size: 1.5rem;
        transition: all 0.3s ease;
        text-shadow: 0 0 8px rgba(255, 0, 255, 0.8);

        &:hover {
            transform: scale(1.2);
            color: #0ff;
            text-shadow: 0 0 15px rgba(0, 255, 255, 1);
        }
    }

    @media (max-width: 480px) {
        a {
            width: 42px;
            height: 42px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.4rem;
        }
    }

`;

const CopyRight = styled.p`
    font-size: 0.8rem;
    color: #888;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <SocialLinks>
                <a href="https://x.com/crypto_two_face" target="_blank" rel="noopener noreferrer">
                    <FaXTwitter/>
                </a>
                <a href="https://www.instagram.com/crypto_two_face/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram/>
                </a>
                <a href="https://www.threads.com/@crypto_two_face" target="_blank" rel="noopener noreferrer">
                    <FaThreads/>
                </a>
                <a href="https://opensea.io/zh-TW/collection/glitch-world-two-face-eth" target="_blank" rel="noopener noreferrer">
                    <SiOpensea />
                </a>
            </SocialLinks>
            <CopyRight>© {new Date().getFullYear()} Crypto_two_face. All rights reserved.</CopyRight>
        </FooterContainer>
    );
};

export default Footer;
