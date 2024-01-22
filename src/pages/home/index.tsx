import { Button, Container, Typography } from "@mui/material";
import { Nav } from "../../components/navigation";
import { MarqueeBox } from "../../components/marquee";
import { Header } from "../../components/header";
import Headerphoto from "../../assets/headerPhoto.svg";
import { CaseStudies } from "../../containers/caseStudies";

export const Home: React.FC<{}> = () => {
    return (
        <>
            <Container
                sx={{
                    padding: "0",
                    overflowX: "hidden"
                }}
            >
                <Nav />
                <MarqueeBox />
                <Header
                    headerText={
                        <Typography
                            fontFamily={"Helvetica Neue"}
                            fontWeight={900}
                            fontSize={{ mobile: "25.2vw", miniTablet: "23.8vw", tablet: "26.5vw", laptop: "27.5vw" }}
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
            </Container>
            <Container
                sx={{
                    padding: "0 var(--pagePadding)",
                    overflowX: "hidden"
                }}
            >
                <CaseStudies />
            </Container>
        </>
    )
}