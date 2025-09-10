import React from "react";
import styled from "styled-components";
import LogoImg from "../assets/logo Glitch.png";

const Section = styled.section`
    width: 100vw;
    background: rgba(13, 13, 13, 0.8);
    backdrop-filter: blur(8px);
    position: sticky;
    top: 0;
    z-index: 10;
`;

const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    height: ${props => props.theme.navHeight};
    margin: 0 auto;
`;

const LogoWrapper = styled.div`
    width: 320px;
    height: 500px; /* 固定高度，避免 Mask 拉扯 */
    cursor: pointer;
    position: relative;

    .logo-mask {
        width: 100%;
        height: 100%;

        /* Mask 設定 */
        -webkit-mask-image: url(${LogoImg});
        -webkit-mask-repeat: no-repeat;
        -webkit-mask-size: contain;
        -webkit-mask-position: left;

        mask-image: url(${LogoImg});
        mask-repeat: no-repeat;
        mask-size: contain;
        mask-position: left;

        /* 背景流動漸層 */
        background: linear-gradient(
                -45deg,
                #ff00ff,
                #00ffff,
                #ff1493,
                #1e90ff
        );
        background-size: 400% 400%;
        animation: gradientMove 8s ease infinite;
    }

    @keyframes gradientMove {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
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
    font-size: 1rem;
    font-weight: 500;
    color: white;
    cursor: pointer;
    position: relative;

    &::after {
        content: '';
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
`;

const Navigation = () => {
    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Section>
            <NavBar>
                <LogoWrapper onClick={() => handleScroll("home")}>
                    <div className="logo-mask"></div>
                </LogoWrapper>
                <Menu>
                    <MenuItem onClick={() => handleScroll("home")}>首頁</MenuItem>
                    <MenuItem onClick={() => handleScroll("nfts")}>NFTs.</MenuItem>
                    <MenuItem onClick={() => handleScroll("author")}>作者</MenuItem>
                    <MenuItem onClick={() => handleScroll("faq")}>FAQ</MenuItem>
                </Menu>
            </NavBar>
        </Section>
    );
};

export default Navigation;
