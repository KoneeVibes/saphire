import { Button, Container, Typography } from "@mui/material";
import { Nav } from "../../components/navigation";
import { MarqueeBox } from "../../components/marquee";
import { Header } from "../../components/header";
import Headerphoto from "../../assets/headerPhoto.svg";
import { CaseStudies } from "../../containers/caseStudies";
import { About } from "../../containers/about";
import { Formbox } from "../../containers/form/formfields";
import { FormHeader } from "../../containers/form/formheader";
import { Footer } from "../../components/footer";

export const Home: React.FC<{}> = () => {
    return (
        <Container
            sx={{
                padding: "0",
                overflow: "hidden"
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
                headerPhoto={Headerphoto}
                cardTitle={
                    <Typography
                        variant="h2"
                        fontFamily={"Helvetica Neue"}
                        fontWeight={900}
                        fontSize={{ mobile: 35 }}
                        lineHeight={"normal"}
                    >
                        Pinatta
                    </Typography>
                }
                cardContent={
                    <Typography
                        variant="body1"
                        fontFamily={"Helvetica Neue"}
                        fontWeight={400}
                        fontSize={{ mobile: 20 }}
                        lineHeight={"normal"}
                        textTransform={"capitalize"}
                        whiteSpace={"normal"}
                    >
                        Building the future of beverages
                    </Typography>
                }
                cardActionButton={
                    <Button
                        variant={"contained"}
                        sx={{
                            fontFamily: "Helvetica Neue",
                            fontWeight: 300,
                            fontSize: 10,
                            lineHeight: "normal",
                            background: "#141414",
                            borderRadius: 50,
                            textTransform: "capitalize",
                            "&:hover": {
                                background: "#141414",
                            }
                        }}
                    >
                        CASE STUDIES COMING SOON
                    </Button>
                }
            />
            <CaseStudies />
            <About />
            <MarqueeBox
                pauseOnHover={true}
                content={<FormHeader />}
                padding={"var(--cardPadding) 0 0"}
            />
            <Formbox />
            <Footer />
        </Container>
    )
}