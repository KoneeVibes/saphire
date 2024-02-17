import { Box, Container, Typography } from "@mui/material";
import { Nav } from "../../components/navigation";
import { MarqueeBox } from "../../components/marquee";
import { Header } from "../../components/header";
import { CaseStudies } from "../../containers/caseStudies";
import { About } from "../../containers/about";
import { Formbox } from "../../containers/form/formfields";
import { FormHeader } from "../../containers/form/formheader";
import { Footer } from "../../components/footer";
import { FooterBgBox } from "../../containers/footerbgbox";
import { comingSoon } from "../../configs/content";

export const Home: React.FC<{}> = () => {
    return (
        <Container
            sx={{
                padding: "0",
                overflowX: "hidden",
            }}
        >
            <Nav />
            <MarqueeBox
                content={
                    <Typography
                        fontFamily={"Helvetica Neue"}
                        fontWeight={400}
                        fontSize={15}
                        lineHeight={1.8}
                        color={"#3A3A3A"}
                        textTransform={"uppercase"}
                        padding={"1rem 0"}
                    >
                        Saphire partners with business to be industry captains <Typography component={"span"} padding={"0 0.5rem"}>&#8594;</Typography>
                    </Typography>
                }
                bg={"#E4E4E4"}
                border={"0.3px dashed #000"}
            />
            <Header
                headerText={
                    <Typography
                        fontFamily={"Helvetica Neue"}
                        fontWeight={900}
                        fontSize={{ mobile: "25.2vw", miniTablet: "23.8vw", tablet: "26.5vw", laptop: "27.1vw" }}
                        lineHeight={{ mobile: "30vw", tablet: "22vw" }}
                        display={"inline-block"}
                        textTransform={"uppercase"}
                        letterSpacing={"-1vw"}
                        color={"#000"}
                        width={"100%"}
                        textAlign={{ mobile: "center" }}
                    >
                        SAPHIRE
                    </Typography>
                }
                headerCarousel={comingSoon}
            />
            <CaseStudies />
            <About />
            <MarqueeBox
                pauseOnHover={true}
                content={<FormHeader />}
                padding={"var(--cardPadding) 0 0"}
            />
            <Formbox />
            <Box bgcolor={"#000"}>
                <FooterBgBox />
                <Footer />
            </Box>
        </Container >
    )
}