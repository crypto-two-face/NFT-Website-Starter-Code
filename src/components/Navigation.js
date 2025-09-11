// src/components/Navigation.js
import React from "react";
import styled from "styled-components";
import LogoImg from "../assets/logo Glitch.png";

const Section = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background: rgba(13, 13, 13, 0.8);
    backdrop-filter: blur(8px);

    //* {
    //    outline: 1px solid red; /* 臨時檢查用 */
    //}
`;

const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    height: ${({theme}) => theme.navHeight};
    margin: 0 auto;

    @media (max-width: 480px) {
        width: 80%;
        height: 2.5rem;
        justify-content: space-around ;
    }
`;

/* 以 clamp + vw 放大，避免死 px；logo 高度跟 navHeight 對齊 */
const LogoWrapper = styled.div`
    width: clamp(180px, 26vw, 360px);
    height: auto;
    cursor: pointer;

    @media (max-width: 480px) {
        width: clamp(130px, 30vw, 260px);
    }

    .logo-mask {
        width: 100%;
        height: ${({ theme }) => theme.navHeight};
        -webkit-mask-image: url(${LogoImg});
        -webkit-mask-repeat: no-repeat;
        -webkit-mask-size: contain;
        -webkit-mask-position: left;

        mask-image: url(${LogoImg});
        mask-repeat: no-repeat;
        mask-size: contain;
        mask-position: left;

        background: linear-gradient(-45deg, #ff00ff, #00ffff, #ff1493, #1e90ff);
        background-size: 400% 400%;
        animation: gradientMove 8s ease infinite;
    }

    @keyframes gradientMove {
        0% {
            background-position: 0 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0 50%;
        }
    }
`;

const Menu = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
`;

const MenuItem = styled.li`
    margin: 0 1rem;
    font-size: ${props => props.theme.fontLg};
    font-weight: 500;
    color: white;
    cursor: pointer;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0%;
        height: 2px;
        background: linear-gradient(90deg, #ff00ff, #00ffff);
        transition: width 0.3s ease;
    }

    &:hover::after {
        width: 100%;
    }

    @media (max-width: 480px) {
        font-size: ${props => props.theme.fontMd};
        margin: 0 0.5rem;
    }
`;

const Navigation = () => {
    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <Section>
            <NavBar>
                <LogoWrapper onClick={() => handleScroll("home")}>
                    <div className="logo-mask" />
                </LogoWrapper>
                <Menu>
                    <MenuItem onClick={() => handleScroll("home")}>Home</MenuItem>
                    {/*<MenuItem onClick={() => handleScroll("nfts")}>NFTs.</MenuItem>*/}
                    <MenuItem onClick={() => handleScroll("author")}>Author</MenuItem>
                    <MenuItem onClick={() => handleScroll("faq")}>FAQ</MenuItem>
                </Menu>
            </NavBar>
        </Section>
    );
};

export default Navigation;
