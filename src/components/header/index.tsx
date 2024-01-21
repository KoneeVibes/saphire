import { HeaderImageBox, HeaderStack, Headerbox } from "./styled";
import { Box, Card, CardActions, CardContent, CardHeader, Typography } from "@mui/material";
import { HeaderType } from "../../types/app.type";
import { motion } from "framer-motion";

export const Header: React.FC<HeaderType> = ({ headerPhoto, cardTitle, cardContent, cardActionButton, headerText }) => {
    return (
        <Headerbox
            component={motion.div}
            initial={{ opacity: 0, transform: "translate(0, 10vh)" }}
            whileInView={{ opacity: 1, transform: "translate(0, 0)" }}
        >
            <Box
                padding={"0 var(--pagePadding)"}
            >
                {headerText}
                <HeaderImageBox
                    component={motion.div}
                    initial={{ opacity: 0, transform: "translate(0, 10vh)" }}
                    whileInView={{ opacity: 1, transform: "translate(0, 0)" }}
                    sx={{
                        backgroundImage: `url(${headerPhoto})`,
                    }}
                >
                    <Card className="card">
                        <CardHeader title={cardTitle} />
                        <CardContent>{cardContent}</CardContent>
                        <CardActions>{cardActionButton}</CardActions>
                    </Card>
                </HeaderImageBox>
            </Box>
            <HeaderStack>
                <Box
                    flex={"1 1 20%"}
                >
                    <Typography
                        fontFamily={"Helvetica Neue"}
                        fontWeight={400}
                        fontSize={22.419}
                        lineHeight={"normal"}
                        color={"#8A8474"}
                        whiteSpace={"normal"}
                    >
                        Working worldwide for →
                    </Typography>
                </Box>
                <Box
                    flex={"1 1 20%"}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"var(--flexGap)"}
                >
                    <Typography
                        variant="body1"
                        fontFamily={"Helvetica Neue"}
                        fontWeight={400}
                        fontSize={22.419}
                        lineHeight={"normal"}
                        color={"#000000"}
                        whiteSpace={"normal"}
                    >
                        Cultural Heritage
                    </Typography>
                    <Typography
                        variant="body1"
                        fontFamily={"Helvetica Neue"}
                        fontWeight={400}
                        fontSize={22.419}
                        lineHeight={"normal"}
                        color={"#000000"}
                        whiteSpace={"normal"}
                    >
                        Creative Design
                    </Typography>
                </Box>
                <Box
                    flex={"1 1 20%"}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"var(--flexGap)"}
                >
                    <Typography
                        variant="body1"
                        fontFamily={"Helvetica Neue"}
                        fontWeight={400}
                        fontSize={22.419}
                        lineHeight={"normal"}
                        color={"#000000"}
                        whiteSpace={"normal"}
                    >
                        Community
                    </Typography>
                    <Typography
                        variant="body1"
                        fontFamily={"Helvetica Neue"}
                        fontWeight={400}
                        fontSize={22.419}
                        lineHeight={"normal"}
                        color={"#000000"}
                        whiteSpace={"normal"}
                    >
                        Not-For-Profit
                    </Typography>
                </Box>
                <Box
                    flex={"1 1 20%"}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"var(--flexGap)"}
                >
                    <Typography
                        variant="body1"
                        fontFamily={"Helvetica Neue"}
                        fontWeight={400}
                        fontSize={22.419}
                        lineHeight={"normal"}
                        color={"#000000"}
                        whiteSpace={"normal"}
                    >
                        Architectural Innovations
                    </Typography>
                    <Typography
                        variant="body1"
                        fontFamily={"Helvetica Neue"}
                        fontWeight={400}
                        fontSize={22.419}
                        lineHeight={"normal"}
                        color={"#000000"}
                        whiteSpace={"normal"}
                    >
                        Public Services
                    </Typography>
                </Box>
            </HeaderStack>
        </Headerbox>
    )
}