import { BgImageBox } from "../header/styled";
import footerbg from "../../assets/footerbg.svg";
import { Footerbox, WorkWithUsStack } from "./styled";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";

export const Footer: React.FC<{}> = () => {
    return (
        <Footerbox>
            <BgImageBox
                component={motion.div}
                initial={{ opacity: 0, transform: "translate(0, 10vh)" }}
                whileInView={{ opacity: 1, transform: "translate(0, 0)" }}
                bg={`url(${footerbg})`}
                borderRadius={0}
                minHeight={937}
                padding={"calc(2 * var(--cardPadding)) var(--cardPadding)"}
                display={"flex"}
                justifyContent={"center"}
            >
                <Typography
                    variant="h2"
                    color={"#E5E5E5"}
                    textAlign={"center"}
                    whiteSpace={"normal"}
                    fontFamily={"Helvetica Neue"}
                    fontWeight={400}
                    width={{ laptop: "75%" }}
                    fontSize={{ mobile: 30, miniTablet: 36, tablet: 55, laptop: 65, desktop: 100 }}
                    sx={{
                        textWrap: "pretty"
                    }}
                >
                    Building irrational love between brands and their consumers
                </Typography>
            </BgImageBox>
            <WorkWithUsStack>
                <Typography
                    variant="h2"
                    color={"#F3F3F3"}
                    whiteSpace={"normal"}
                    fontFamily={"Helvetica Neue"}
                    fontWeight={300}
                    fontSize={{ mobile: 47, laptop: 47 }}
                    lineHeight={"normal"}
                    width={{ laptop: "20%" }}
                >
                    Work with us
                </Typography>
                <Typography
                    variant="body1"
                    color={"#F3F3F3"}
                    whiteSpace={"normal"}
                    fontFamily={"Helvetica Neue"}
                    fontWeight={300}
                    fontSize={{ mobile: 22, laptop: 22 }}
                    lineHeight={"normal"}
                    width={{ laptop: "30%" }}
                >
                    We're excited to discover your organization and assist in developing a unique and innovative visual strategy. Let's think outside the box together.
                </Typography>
                <Typography
                    variant="body1"
                    color={"#F3F3F3"}
                    whiteSpace={"normal"}
                    fontFamily={"Helvetica Neue"}
                    fontWeight={300}
                    fontSize={{ mobile: 22, laptop: 22 }}
                    lineHeight={"normal"}

                >
                    You can contact us at:<br />
                    info@saphire.com
                </Typography>
            </WorkWithUsStack>
        </Footerbox >
    )
}