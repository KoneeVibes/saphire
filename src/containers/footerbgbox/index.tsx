import { Typography } from "@mui/material";
import footerbg from "../../assets/footerbg.svg";
import { BgImageBox } from "../../components/header/styled";
import { motion } from "framer-motion";
import { BgBox } from "./styled";

export const FooterBgBox: React.FC<{}> = () => {
    return (
        <BgBox>
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
        </BgBox>
    )
}