import React from "react";
import styled from "styled-components";
import BgVideo from "../../assets/author.mp4";

const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.body};
`;

const Card = styled.div`
    width: 80%;
    max-width: 900px;
    height: 400px;
    background: ${props => props.theme.text};
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    position: relative;
`;

const Left = styled.div`
    flex: 1;
    position: relative;
    overflow: hidden;
    clip-path: polygon(0 0, 100% 0, 0 100%); /* 三角形裁切 */

    video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover; /* 影片鋪滿 */
    }
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    color: ${props => props.theme.body};
`;

const Name = styled.h1`
    font-size: ${props => props.theme.fontXl};
    margin-bottom: 1rem;
`;

const Position = styled.h2`
    font-size: ${props => props.theme.fontMd};
    font-weight: normal;
    opacity: 0.8;
    margin-bottom: 1rem;
`;

const Bio = styled.p`
    font-size: ${props => props.theme.fontSm};
    line-height: 1.6;
    opacity: 0.9;
`;

const AuthorCard = () => {
    return (
        <Section>
            <Card>
                <Left>
                    <video autoPlay loop muted playsInline>
                        <source src={BgVideo} type="video/mp4"/>
                    </video>
                </Left>
                <Right>
                    <Name>@Crypto_two_face</Name>
                    <Position>Founder / Web Developer</Position>
                    <Bio> 創作者、網頁工程師與 NFT 愛好者 </Bio>
                    <Bio> 熱衷於區塊鏈、藝術與技術的交匯 </Bio>
                    <Bio> 夢想是賺錢，賺到足以讓世界變得更好的錢 </Bio>
                </Right>
            </Card>
        </Section>
    );
};

export default AuthorCard;
