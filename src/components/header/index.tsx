import { BgImageBox, HeaderStack, Headerbox } from "./styled";
import { Box, Button, Card, CardActions, CardContent, CardHeader, Typography } from "@mui/material";
import { HeaderType } from "../../types/app.type";
import { motion } from "framer-motion";
import { stackDetails } from "../../configs/content";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Header: React.FC<HeaderType> = ({ headerText, carddisplayvalue, headerCarousel }) => {
    return (
        <Headerbox
            component={motion.div}
            initial={{ opacity: 0, transform: "translate(0, 10vh)" }}
            whileInView={{ opacity: 1, transform: "translate(0, 0)" }}
            carddisplayvalue={carddisplayvalue}
        >
            <Box
                padding={"0 var(--pagePadding)"}
            >
                {headerText}
                <Carousel
                    autoPlay={true}
                    stopOnHover={false}
                    infiniteLoop={true}
                    interval={2000}
                    emulateTouch={true}
                    showIndicators={false}
                    showThumbs={false}
                    showArrows={false}
                    showStatus={false}
                >
                    {headerCarousel?.map((caseStudy: any, key: any) => {
                        return (
                            <BgImageBox
                                key={key}
                                component={motion.div}
                                initial={{ opacity: 0, transform: "translate(0, 10vh)" }}
                                whileInView={{ opacity: 1, transform: "translate(0, 0)" }}
                                bg={`url(${caseStudy.headerImg})`}
                                borderRadius={32}
                                minHeight={878}
                            >
                                <Card className="card">
                                    <CardHeader title={
                                        <Typography
                                            variant="h2"
                                            fontFamily={"Helvetica Neue"}
                                            fontWeight={900}
                                            fontSize={{ mobile: 35 }}
                                            lineHeight={"normal"}
                                            textAlign={"left"}
                                        >
                                            {caseStudy.title}
                                        </Typography>
                                    }
                                    />
                                    <CardContent>
                                        <Typography
                                            variant="body1"
                                            fontFamily={"Helvetica Neue"}
                                            fontWeight={400}
                                            fontSize={{ mobile: 20 }}
                                            lineHeight={"normal"}
                                            textTransform={"capitalize"}
                                            whiteSpace={"normal"}
                                            textAlign={"left"}
                                        >
                                            {caseStudy.body}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
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
                                    </CardActions>
                                </Card>
                            </BgImageBox>
                        )
                    })}
                </Carousel>
            </Box>
            <HeaderStack
                component={motion.div}
                initial={{ opacity: 0, transform: "translate(0, 10vh)" }}
                whileInView={{ opacity: 1, transform: "translate(0, 0)" }}
            >
                <Box
                    flex={"1 1 20%"}
                >
                    <Typography
                        variant="h2"
                        fontFamily={"Helvetica Neue"}
                        fontWeight={400}
                        fontSize={{ mobile: 20, laptop: 22.419 }}
                        lineHeight={"normal"}
                        color={"#8A8474"}
                        whiteSpace={"normal"}
                    >
                        Working worldwide for →
                    </Typography>
                </Box>
                {stackDetails.map((detail, k) => {
                    return (
                        <Box
                            key={k}
                            flex={"1 1 20%"}
                            display={"flex"}
                            flexDirection={"column"}
                            gap={"var(--flexGap)"}
                        >
                            {detail.map((item, k) => {
                                return (
                                    <Typography
                                        key={k}
                                        variant="body1"
                                        fontFamily={"Helvetica Neue"}
                                        fontWeight={400}
                                        fontSize={{ mobile: 18, laptop: 22.419 }}
                                        lineHeight={"normal"}
                                        color={"#000000"}
                                        whiteSpace={"normal"}
                                    >
                                        {item}
                                    </Typography>
                                )
                            })}
                        </Box>
                    )
                })}
            </HeaderStack>
        </Headerbox>
    )
}