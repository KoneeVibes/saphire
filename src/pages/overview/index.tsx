import { Container, Typography } from "@mui/material";
import { Nav } from "../../components/navigation";
import { useParams } from "react-router-dom";
import { caseStudies } from "../../configs/content";
import { MarqueeBox } from "../../components/marquee";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { OverviewBody } from "../../containers/overview";
import { Related } from "../../containers/related";

export const Overview: React.FC<{}> = () => {
    const { overview } = useParams();
    const caseStudy = caseStudies.filter((caseStudy) => {
        return (
            caseStudy.title
                .split(" ")
                .join("")
                .toLowerCase() === overview
        )
    });
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
                        variant="h1"
                        fontFamily={"Helvetica Neue"}
                        fontSize={{ mobile: "10vw" }}
                        fontWeight={500}
                        marginBlock={"1rem"}
                        letterSpacing={"-0.5vw"}
                        textTransform={"uppercase"}
                        whiteSpace={"normal"}
                    >
                        {caseStudy[0]?.title}
                    </Typography>
                }
                headerCarousel={caseStudy}
                carddisplayvalue={"none"}
            />
            <OverviewBody details={caseStudy[0]?.details} />
            <Related activeCaseStudy={overview} />
            <Footer />
        </Container>
    )
}