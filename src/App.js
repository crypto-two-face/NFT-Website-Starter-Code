import {ThemeProvider} from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import {light} from "./styles/Themes";
import styled from "styled-components";

import Navigation from "./components/Navigation";
import Home from "./components/sections/Home";
import HomeMobile from "./components/sections/HomeMobile";
// import About from "./components/sections/About";
import Team from "./components/sections/Team";
import Faq from "./components/sections/Faq";
import Footer from "./components/Footer";

const Main = styled.main`
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    overflow-x: hidden;
`;

const Section = styled.section`
    height: ${({full}) => (full ? "100vh" : "auto")};
    scroll-snap-align: start;
`;


function App() {
    const isMobile = window.innerWidth <= 480;


    return (
        <ThemeProvider theme={light}>
            <>
                <GlobalStyles/>
                <Navigation/>
                <Main>
                    <Section id="home">
                        {isMobile ? <HomeMobile/> : <Home/>}
                    </Section>
                    {/*<Section id="nfts"><About/></Section>*/}
                    <Section id="author"><Team/></Section>
                    <Section id="faq"><Faq/></Section>
                    <Section><Footer/></Section>
                </Main>
            </>
        </ThemeProvider>
    );
}

export default App;
