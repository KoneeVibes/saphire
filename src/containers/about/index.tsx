import { Typography } from "@mui/material";
import { BgImageBox } from "../../components/header/styled";
import about from "../../assets/about.svg";
import { AboutBox, AboutStack } from "./styled";
import { motion } from "framer-motion";

export const About = () => {
    return (
        <AboutBox
            id="about"
            component={motion.div}
            initial={{ opacity: 0, transform: "translate(0, 10vh)" }}
            whileInView={{ opacity: 1, transform: "translate(0, 0)" }}
        >
            <Typography
                variant="h2"
                fontFamily={"Helvetica Neue"}
                fontWeight={900}
                fontSize={{ mobile: "15vw", miniTablet: "13.9vw", tablet: "15vw", laptop: "15.7vw" }}
                lineHeight={"normal"}
                textAlign={"center"}
                letterSpacing={"-1vw"}
                textTransform={"uppercase"}
            >
                About Saphire
            </Typography>
            <BgImageBox
                component={motion.div}
                initial={{ opacity: 0, transform: "translate(0, 10vh)" }}
                whileInView={{ opacity: 1, transform: "translate(0, 0)" }}
                bg={`url(${about})`}
                borderRadius={15}
                minHeight={606}
            />
            <AboutStack
                component={motion.div}
                initial={{ opacity: 0, transform: "translate(0, 10vh)" }}
                whileInView={{ opacity: 1, transform: "translate(0, 0)" }}
            >
                <Typography
                    variant="body1"
                    fontFamily={"Helvetica Neue"}
                    fontWeight={400}
                    fontSize={20}
                    lineHeight={"normal"}
                    whiteSpace={"normal"}
                    flex={"1 1 25%"}
                >
                    SAPHIRE® LAGOS
                    (BRANDING AGENCY)
                </Typography>
                <Typography
                    variant="body1"
                    fontFamily={"Helvetica Neue"}
                    fontWeight={500}
                    fontSize={{ mobile: 24, miniTablet: 28, laptop: 32, desktop: 41 }}
                    color={"#242424"}
                    lineHeight={"normal"}
                    whiteSpace={"normal"}
                    flex={"1 1 75%"}
                >
                    Saphire is .01% of branding agency owned by a strategist and a designer who left corporates with
                    about $200 and decided to do brand differently.
                </Typography>
            </AboutStack>
        </AboutBox>
    )
}